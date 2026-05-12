#!/usr/bin/env python3
"""Generate a short real estate video using NVIDIA FLUX API for image generation + ffmpeg."""

import requests, base64, json, os, subprocess, sys

API_KEY = os.environ.get("NVIDIA_API_KEY", "")
FUNC_URL = "https://api.nvcf.nvidia.com/v2/nvcf/pexec/functions/105fe02c-924b-4dfa-9797-92d89c3936ad"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

PROMPTS = [
    "Luxury modern villa with infinity pool overlooking ocean, golden hour sunset lighting, professional real estate photography, 8k quality",
    "Elegant living room interior with marble floors, floor-to-ceiling windows, modern furniture, warm ambient lighting, architectural photography",
    "Beautiful master bedroom suite with panoramic city view at night, luxury penthouse, soft lighting, interior design magazine photo",
    "Stunning rooftop terrace with outdoor lounge area, city skyline background at dusk, luxury real estate, cinematic composition",
]

OUT_DIR = "/home/ubuntu/frames"
os.makedirs(OUT_DIR, exist_ok=True)

for i, prompt in enumerate(PROMPTS):
    print(f"Generating image {i+1}/{len(PROMPTS)}...")
    resp = requests.post(FUNC_URL, headers=HEADERS, json={
        "text_prompts": [{"text": prompt}],
        "height": 1024, "width": 1024, "steps": 4, "seed": 42 + i,
    })
    data = resp.json()
    if "artifacts" not in data:
        print(f"Error: {data}")
        sys.exit(1)
    img_b64 = data["artifacts"][0]["base64"]
    path = f"{OUT_DIR}/frame_{i:03d}.png"
    with open(path, "wb") as f:
        f.write(base64.b64decode(img_b64))
    print(f"  Saved {path}")

# Create video with crossfade transitions using ffmpeg
print("Creating video with ffmpeg...")
DURATION = 3  # seconds per image
FADE = 1      # crossfade duration

# Build ffmpeg filter for crossfade transitions
inputs = []
filter_parts = []
n = len(PROMPTS)

for i in range(n):
    inputs.extend(["-loop", "1", "-t", str(DURATION), "-i", f"{OUT_DIR}/frame_{i:03d}.png"])

# Build xfade filter chain
if n == 1:
    filter_complex = "[0:v]scale=1024:1024,format=yuv420p[v]"
else:
    prev = "0:v"
    for i in range(1, n):
        out = f"v{i}" if i < n - 1 else "v"
        offset = i * DURATION - i * FADE
        filter_parts.append(f"[{prev}][{i}:v]xfade=transition=fade:duration={FADE}:offset={offset}[{out}]")
        prev = out
    filter_complex = ";".join(filter_parts)

cmd = [
    "ffmpeg", "-y",
    *inputs,
    "-filter_complex", filter_complex,
    "-map", "[v]",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-r", "30",
    "/home/ubuntu/realestate_video.mp4",
]
subprocess.run(cmd, check=True)
print("Video saved to /home/ubuntu/realestate_video.mp4")
