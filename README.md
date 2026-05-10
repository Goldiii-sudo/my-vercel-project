# ReelEstate — Генератор видео-слайдшоу недвижимости

Веб-приложение для создания видео-презентаций объектов недвижимости с использованием AI и базы квартир.

## 🚀 Деплой

Production URL: <https://reelestate-video-generator.vercel.app>

## 📋 Возможности

- **Свои фото** — загрузка 5–20 фото вручную и генерация видео.
- **Из базы** — выбор квартиры из встроенной базы (`data/apartments.json`); фото и описание подтягиваются автоматически.
- **Шаблоны** — наборы пресетов для видео (длительность кадра, переходы, оформление подписей) и для текста (тон/структура подписей, передаются в LLM как system prompt).
- **Backend LLM-прокси** — `NVIDIA_API_KEY` (и опционально `NVIDIA_MODEL`) хранятся в env-переменных Vercel, в клиентский JS не попадают. По умолчанию используется NVIDIA NIM с моделью `qwen/qwen3.5-122b-a10b` через OpenAI-совместимый endpoint.
- Видео-слайдшоу собирается прямо в браузере через Canvas + MediaRecorder, опционально конвертируется в MP4 (FFmpeg.wasm).

## 🏗 Архитектура

```
my-vercel-project/
├─ index.html               # SPA: вкладки + рендер видео
├─ api/
│  ├─ apartments.js        # GET /api/apartments[?id|q|district|rooms|min_price|max_price]
│  ├─ llm.js               # POST /api/llm    → проксирует NVIDIA NIM (OpenAI-compat) c env-ключом
│  ├─ templates.js         # GET /api/templates → { video, text }
│  └─ _lib/data.js         # общие хелперы
├─ data/
│  └─ apartments.json      # экспорт квартир из SS.GE!/data/database.db
├─ templates/
│  ├─ video.json           # видео-шаблоны (стиль слайдов)
│  └─ text.json            # текстовые шаблоны (промпты для LLM)
├─ scripts/
│  ├─ export_db.py         # экспортёр SQLite → JSON
│  └─ dev-server.js        # локальный сервер без `vercel dev`
├─ vercel.json             # конфигурация Vercel
└─ package.json
```

## 🔑 Настройка

1. **Получите NVIDIA API ключ:** <https://build.nvidia.com/explore/discover> (формат `nvapi-...`).
2. **На Vercel:** добавьте переменные окружения для production / preview / development:
   - `NVIDIA_API_KEY` (обязательно)
   - `NVIDIA_MODEL` или `LLM_MODEL` (опционально, по умолчанию `qwen/qwen3.5-122b-a10b`)
   - `LLM_BASE_URL` (опционально, по умолчанию `https://integrate.api.nvidia.com/v1`)
3. **Локально:** можно ввести ключ прямо в UI (поле «LLM API»), он сохранится в `localStorage` и используется как fallback, если бэкенд-прокси недоступен. Клиентский fallback ходит напрямую на NVIDIA NIM.

## 🗃 Обновление базы квартир

База хранится как JSON-файл `data/apartments.json`, выгруженный из SQLite-БД проекта `SS.GE!` (`data/database.db`, таблица `flats`).

```bash
python3 scripts/export_db.py /path/to/SS.GE!/data/database.db data/apartments.json
git add data/apartments.json && git commit -m "data: refresh apartments"
```

Скрипт оставляет только публичные поля (без телефонов, CRM-статусов и Telegram-метаданных).

## 🛠 Локальная разработка

```bash
# 1. Стандартный путь — через Vercel CLI (требует логина):
npm i -g vercel
vercel dev

# 2. Без логина — простой dev-сервер:
NVIDIA_API_KEY="nvapi-..." node scripts/dev-server.js 3000
# опционально: NVIDIA_MODEL="qwen/qwen3.5-122b-a10b"
# → http://localhost:3000
```

## 🎨 Видео-шаблоны

Описаны в `templates/video.json`. Каждый шаблон задаёт:

- `secondsPerSlide` — длительность кадра;
- `transition` (`fade` / `slide` / `cut`) и `transitionMs`;
- `kenBurns` — флаг плавного зума;
- `captionStyle` — типографика подписей (`fontSize`, `fontWeight`, `color`, `shadow`, `background`, `padding`, `position`);
- `accentColor` — акцентный цвет.

## ✍️ Текстовые шаблоны

В `templates/text.json` — пресеты тона/структуры подписей, которые передаются в LLM как system prompt:

- `system` — system prompt;
- `captionPrompt` / `scriptPrompt` — шаблоны промптов с плейсхолдерами `{n}` и `{property}`.

## 🔄 Деплой

```bash
vercel --prod
```

или через GitHub-интеграцию Vercel (push в main / PR-превью).
