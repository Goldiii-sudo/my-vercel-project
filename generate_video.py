#!/usr/bin/env python3
"""
ReelEstate Video Generator
Generates real estate video slideshows from database photos.
Uses NVIDIA API (vision model) to create marketing descriptions for each photo.
"""

import sqlite3
import json
import os
import sys
import base64
import subprocess
import textwrap
import urllib.request
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

# ── Config ──────────────────────────────────────────────────────────
NVIDIA_API_KEY = os.environ.get("NVIDIA_API_KEY", "")
NVIDIA_VISION_MODEL = "meta/llama-3.2-90b-vision-instruct"
NVIDIA_CHAT_URL = "https://integrate.api.nvidia.com/v1/chat/completions"

DB_PATH = os.path.join(os.path.dirname(__file__), "data", "database.db")
MUSIC_PATH = os.path.join(os.path.dirname(__file__), "data", "background_music.aac")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")

SLIDE_W, SLIDE_H = 1080, 1080  # Square format (Instagram Reels style)
FPS = 30

# Available ffmpeg xfade transitions
AVAILABLE_TRANSITIONS = [
    "fade", "slideleft", "slideright", "slideup", "slidedown",
    "wipeleft", "wiperight", "wipeup", "wipedown",
    "dissolve", "pixelize", "radial", "smoothleft", "smoothright",
    "circleopen", "circleclose", "horzopen", "horzclose",
    "vertopen", "vertclose", "diagbl", "diagbr", "diagtl", "diagtr",
    "hlslice", "hrslice", "vuslice", "vdslice",
    "squeezeh", "squeezev", "zoomin",
]


def nvidia_describe_image(image_url: str, flat_info: dict) -> str:
    """Use NVIDIA vision model to generate a marketing description for a photo."""
    import urllib.request as req

    context = (
        f"Это фото из объявления недвижимости: {flat_info['rooms']}-комнатная, "
        f"{flat_info['area']} м², {flat_info['district']}, {flat_info['city']}."
    )
    prompt = (
        f"{context}\n"
        "Напиши одну короткую цепляющую маркетинговую фразу на русском (максимум 12 слов) "
        "для этого фото. Фраза должна продавать эмоцию, а не описывать комнату. "
        "Без кавычек, без эмодзи. Только текст."
    )

    body = json.dumps({
        "model": NVIDIA_VISION_MODEL,
        "messages": [{"role": "user", "content": [
            {"type": "text", "text": prompt},
            {"type": "image_url", "image_url": {"url": image_url}},
        ]}],
        "max_tokens": 60,
        "temperature": 0.8,
    }).encode()

    request = req.Request(NVIDIA_CHAT_URL, data=body, headers={
        "Authorization": f"Bearer {NVIDIA_API_KEY}",
        "Content-Type": "application/json",
    })
    with req.urlopen(request, timeout=30) as resp:
        data = json.loads(resp.read())
    text = data["choices"][0]["message"]["content"].strip().strip('"').strip("«»")
    # Truncate if model returned too much text
    words = text.split()
    if len(words) > 15:
        text = " ".join(words[:12])
    return text


def download_image(url: str) -> Image.Image | None:
    """Download an image from URL and return as PIL Image."""
    try:
        request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, timeout=15) as resp:
            return Image.open(BytesIO(resp.read())).convert("RGB")
    except Exception as e:
        print(f"  Warning: Failed to download {url}: {e}")
        return None


def load_font(size: int):
    """Load a font, falling back to default if needed."""
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf",
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()


def create_title_slide(flat: dict) -> Image.Image:
    """Create the first title slide with property info overlaid on the first photo."""
    img_url = flat["image_urls"][0]
    photo = download_image(img_url)

    # Resize and crop to square
    photo = resize_and_crop(photo)

    # Darken
    overlay = Image.new("RGBA", (SLIDE_W, SLIDE_H), (0, 0, 0, 140))
    result = photo.convert("RGBA")
    result = Image.alpha_composite(result, overlay).convert("RGB")

    draw = ImageDraw.Draw(result)

    # Title text
    rooms_text = f"{flat['rooms']}-комнатная в\n{flat['district']}"
    price_text = f"{flat['price']:,} {flat['currency']}".replace(",", " ")
    details_text = f"{flat['area']} м² • {flat['district']}, {flat['address']}"

    font_title = load_font(72)
    font_price = load_font(56)
    font_details = load_font(28)

    # Blue accent line
    line_y = SLIDE_H // 2 - 180
    draw.rectangle([(SLIDE_W // 2 - 40, line_y), (SLIDE_W // 2 + 40, line_y + 5)],
                   fill=(100, 110, 240))

    # Title
    draw_centered_text(draw, rooms_text, SLIDE_W // 2, line_y + 30, font_title, "white")

    # Price
    price_y = line_y + 200
    draw_centered_text(draw, price_text, SLIDE_W // 2, price_y, font_price, (140, 150, 255))

    # Details
    details_y = price_y + 80
    draw_centered_text(draw, details_text, SLIDE_W // 2, details_y, font_details, (200, 200, 210))

    return result


def create_photo_slide_from_img(photo: Image.Image, description: str, slide_num: int, total: int) -> Image.Image:
    """Create a slide with pre-loaded photo, description overlay, and counter."""
    photo = resize_and_crop(photo)

    result = photo.convert("RGB")
    draw = ImageDraw.Draw(result)

    # Semi-transparent dark bar at bottom
    bar_height = 260
    bar = Image.new("RGBA", (SLIDE_W, bar_height), (30, 35, 50, 200))
    result_rgba = result.convert("RGBA")
    result_rgba.paste(bar, (0, SLIDE_H - bar_height), bar)
    result = result_rgba.convert("RGB")
    draw = ImageDraw.Draw(result)

    # Description text
    font_desc = load_font(48)
    font_counter = load_font(24)

    # Wrap text
    wrapped = wrap_text(description, font_desc, SLIDE_W - 80)
    desc_y = SLIDE_H - bar_height + 30
    draw_centered_text(draw, wrapped, SLIDE_W // 2, desc_y, font_desc, "white")

    # Counter
    counter_text = f"{slide_num} / {total}"
    draw_centered_text(draw, counter_text, SLIDE_W // 2, SLIDE_H - 40, font_counter, (150, 155, 170))

    return result


def resize_and_crop(img: Image.Image) -> Image.Image:
    """Resize and center-crop image to SLIDE_W x SLIDE_H."""
    w, h = img.size
    scale = max(SLIDE_W / w, SLIDE_H / h)
    new_w, new_h = int(w * scale), int(h * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - SLIDE_W) // 2
    top = (new_h - SLIDE_H) // 2
    return img.crop((left, top, left + SLIDE_W, top + SLIDE_H))


def wrap_text(text: str, font, max_width: int) -> str:
    """Wrap text to fit within max_width pixels."""
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        bbox = font.getbbox(test)
        if bbox[2] > max_width and current:
            lines.append(current)
            current = word
        else:
            current = test
    if current:
        lines.append(current)
    return "\n".join(lines)


def draw_centered_text(draw, text, cx, y, font, fill):
    """Draw multi-line centered text."""
    lines = text.split("\n")
    for line in lines:
        bbox = font.getbbox(line)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text((cx - tw // 2, y), line, font=font, fill=fill)
        y += th + 8


def get_flat_from_db(flat_id: int = None) -> dict:
    """Load a flat record from the database."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    if flat_id:
        cur.execute("SELECT * FROM flats WHERE id = ?", (flat_id,))
    else:
        cur.execute("SELECT * FROM flats LIMIT 1")
    row = cur.fetchone()
    cols = [d[0] for d in cur.description]
    flat = dict(zip(cols, row))
    flat["image_urls"] = json.loads(flat["images"])
    conn.close()
    return flat


def generate_video(flat_id: int = None, max_photos: int = 14,
                   transition: str = "slideleft", slide_duration: float = 4.0,
                   fade_duration: float = 0.8, music_path: str = None):
    """Main function: generate video for a flat listing.

    Args:
        flat_id: ID of flat in database (None = first flat)
        max_photos: Max number of photos to include
        transition: ffmpeg xfade transition name (see AVAILABLE_TRANSITIONS)
        slide_duration: Seconds each slide is shown
        fade_duration: Seconds for transition between slides
        music_path: Path to custom music file (mp3/aac/wav). None = default music
    """
    if music_path is None:
        music_path = MUSIC_PATH

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    frames_dir = os.path.join(OUTPUT_DIR, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    # 1. Load flat data
    flat = get_flat_from_db(flat_id)
    image_urls = flat["image_urls"][:max_photos]
    total_photos = len(image_urls)
    print(f"Flat: {flat['title']}")
    print(f"Photos: {total_photos}")

    # 2. Generate title slide
    print("Creating title slide...")
    title_slide = create_title_slide(flat)
    title_slide.save(os.path.join(frames_dir, "slide_000.png"))

    # 3. Generate descriptions and photo slides
    flat_info = {
        "rooms": flat["rooms"],
        "area": flat["area"],
        "district": flat["district"],
        "city": flat["city"],
    }

    slide_num = 0
    valid_urls = []
    for i, url in enumerate(image_urls):
        print(f"Processing photo {i + 1}/{total_photos}...")
        photo = download_image(url)
        if photo is None:
            print(f"  Skipped (download failed)")
            continue
        try:
            desc = nvidia_describe_image(url, flat_info)
        except Exception as e:
            print(f"  Warning: NVIDIA API error: {e}")
            desc = f"{flat_info['rooms']}-комнатная квартира в {flat_info['district']}"
        print(f"  Description: {desc}")

        slide_num += 1
        valid_urls.append(url)
        slide = create_photo_slide_from_img(photo, desc, slide_num, total_photos)
        slide.save(os.path.join(frames_dir, f"slide_{slide_num:03d}.png"))
    total_photos = slide_num

    # 4. Build video with ffmpeg
    total_slides = total_photos + 1  # +1 for title
    print(f"\nBuilding video from {total_slides} slides...")

    # Build ffmpeg command with xfade transitions
    inputs = []
    for i in range(total_slides):
        inputs.extend(["-loop", "1", "-t", str(slide_duration),
                       "-i", os.path.join(frames_dir, f"slide_{i:03d}.png")])

    # xfade chain
    if total_slides == 1:
        filter_complex = "[0:v]scale=1080:1080,format=yuv420p[v]"
    else:
        parts = []
        prev = "0:v"
        for i in range(1, total_slides):
            out = f"v{i}" if i < total_slides - 1 else "v"
            offset = round(i * slide_duration - i * fade_duration, 2)
            parts.append(f"[{prev}][{i}:v]xfade=transition={transition}:duration={fade_duration}:offset={offset}[{out}]")
            prev = out
        filter_complex = ";".join(parts)

    output_no_audio = os.path.join(OUTPUT_DIR, "video_no_audio.mp4")
    output_final = os.path.join(OUTPUT_DIR, "realestate_video.mp4")

    cmd_video = [
        "ffmpeg", "-y", *inputs,
        "-filter_complex", filter_complex,
        "-map", "[v]",
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", str(FPS),
        output_no_audio,
    ]
    subprocess.run(cmd_video, check=True, capture_output=True)

    # 5. Add background music
    if os.path.exists(music_path):
        video_duration = total_slides * slide_duration - (total_slides - 1) * fade_duration
        cmd_audio = [
            "ffmpeg", "-y",
            "-i", output_no_audio,
            "-i", music_path,
            "-c:v", "copy",
            "-c:a", "aac", "-b:a", "128k",
            "-shortest",
            "-map", "0:v", "-map", "1:a",
            output_final,
        ]
        subprocess.run(cmd_audio, check=True, capture_output=True)
        os.remove(output_no_audio)
    else:
        os.rename(output_no_audio, output_final)
        print("Warning: No background music file found, video saved without audio.")

    print(f"\nVideo saved: {output_final}")
    return output_final


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="ReelEstate Video Generator")
    parser.add_argument("--flat-id", type=int, default=None,
                        help="ID of flat in database (default: first flat)")
    parser.add_argument("--max-photos", type=int, default=14,
                        help="Max photos to include (default: 14)")
    parser.add_argument("--transition", type=str, default="slideleft",
                        choices=AVAILABLE_TRANSITIONS,
                        help="Transition effect between slides (default: slideleft)")
    parser.add_argument("--slide-duration", type=float, default=4.0,
                        help="Duration of each slide in seconds (default: 4.0)")
    parser.add_argument("--fade-duration", type=float, default=0.8,
                        help="Duration of transition in seconds (default: 0.8)")
    parser.add_argument("--music", type=str, default=None,
                        help="Path to custom background music file (mp3/aac/wav)")
    parser.add_argument("--no-music", action="store_true",
                        help="Generate video without background music")
    parser.add_argument("--list-transitions", action="store_true",
                        help="List all available transitions and exit")

    args = parser.parse_args()

    if args.list_transitions:
        print("Available transitions:")
        for t in AVAILABLE_TRANSITIONS:
            print(f"  {t}")
        sys.exit(0)

    if not NVIDIA_API_KEY:
        print("Error: Set NVIDIA_API_KEY environment variable")
        sys.exit(1)

    if args.no_music:
        music = "__no_music__"  # non-existent path, skips music
    else:
        music = args.music  # None = default music

    generate_video(
        flat_id=args.flat_id,
        max_photos=args.max_photos,
        transition=args.transition,
        slide_duration=args.slide_duration,
        fade_duration=args.fade_duration,
        music_path=music,
    )
