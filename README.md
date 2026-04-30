# ReelEstate — Генератор видео-слайдшоу недвижимости

Веб-приложение для создания видео-презентаций объектов недвижимости с использованием AI и базы квартир.

## 🚀 Деплой

Production URL: <https://reelestate-video-generator.vercel.app>

## 📋 Возможности

- **Свои фото** — загрузка 5–20 фото вручную и генерация видео.
- **Из базы** — выбор квартиры из встроенной базы (`data/apartments.json`); фото и описание подтягиваются автоматически.
- **Шаблоны** — наборы пресетов для видео (длительность кадра, переходы, оформление подписей) и для текста (тон/структура подписей, передаются в Gemini как system prompt).
- **Backend Gemini-прокси** — `GEMINI_API_KEY` хранится в env-переменных Vercel, в клиентский JS не попадает.
- Видео-слайдшоу собирается прямо в браузере через Canvas + MediaRecorder, опционально конвертируется в MP4 (FFmpeg.wasm).

## 🏗 Архитектура

```
my-vercel-project/
├─ index.html               # SPA: вкладки + рендер видео
├─ api/
│  ├─ apartments.js        # GET /api/apartments[?id|q|district|rooms|min_price|max_price]
│  ├─ gemini.js            # POST /api/gemini  → проксирует Gemini c env-ключом
│  ├─ templates.js         # GET /api/templates → { video, text }
│  └─ _lib/data.js         # общие хелперы
├─ data/
│  └─ apartments.json      # экспорт квартир из SS.GE!/data/database.db
├─ templates/
│  ├─ video.json           # видео-шаблоны (стиль слайдов)
│  └─ text.json            # текстовые шаблоны (промпты для Gemini)
├─ scripts/
│  ├─ export_db.py         # экспортёр SQLite → JSON
│  └─ dev-server.js        # локальный сервер без `vercel dev`
├─ vercel.json             # конфигурация Vercel
└─ package.json
```

## 🔑 Настройка

1. **Получите Gemini API ключ:** <https://aistudio.google.com/app/apikey>
2. **На Vercel:** добавьте переменную окружения `GEMINI_API_KEY` (Project → Settings → Environment Variables) для production / preview / development.
3. **Локально:** можно ввести ключ прямо в UI (поле «Gemini API»), он сохранится в `localStorage` и используется как fallback, если бэкенд-прокси недоступен.

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
GEMINI_API_KEY="..." node scripts/dev-server.js 3000
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

В `templates/text.json` — пресеты тона/структуры подписей, которые передаются в Gemini:

- `system` — system prompt;
- `captionPrompt` / `scriptPrompt` — шаблоны промптов с плейсхолдерами `{n}` и `{property}`.

## 🔄 Деплой

```bash
vercel --prod
```

или через GitHub-интеграцию Vercel (push в main / PR-превью).
