#!/usr/bin/env python3
"""Export apartments from SS.GE! SQLite DB into a JSON file the frontend can consume.

Usage:
    python3 scripts/export_db.py /path/to/database.db data/apartments.json

Only public-facing fields are exported. Phone numbers, CRM statuses, telegram
metadata, etc. are stripped.
"""

from __future__ import annotations

import json
import sqlite3
import sys
from pathlib import Path


PUBLIC_FIELDS = [
    "id",
    "url",
    "title",
    "price",
    "currency",
    "rooms",
    "bedrooms",
    "bathrooms",
    "area",
    "floor",
    "city",
    "district",
    "subdistrict",
    "address",
    "latitude",
    "longitude",
    "description",
    "real_estate_type",
    "real_estate_status",
    "state",
    "project",
    "source",
]


def parse_images(raw: str | None) -> list[str]:
    if not raw:
        return []
    try:
        data = json.loads(raw)
    except (TypeError, json.JSONDecodeError):
        return []
    if isinstance(data, list):
        return [u for u in data if isinstance(u, str) and u.startswith("http")]
    return []


def parse_options(raw: str | None) -> list[str]:
    if not raw:
        return []
    try:
        data = json.loads(raw)
    except (TypeError, json.JSONDecodeError):
        return [s.strip() for s in raw.split(",") if s.strip()]
    if isinstance(data, list):
        return [str(item) for item in data if item]
    if isinstance(data, dict):
        return [str(k) for k, v in data.items() if v]
    return []


def export(db_path: Path, out_path: Path) -> int:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.execute(
        f"SELECT {', '.join(PUBLIC_FIELDS)}, images, options "
        "FROM flats WHERE is_active = 1 ORDER BY id"
    )

    apartments = []
    for row in cur:
        item = {field: row[field] for field in PUBLIC_FIELDS}
        item["images"] = parse_images(row["images"])
        item["options"] = parse_options(row["options"])
        apartments.append(item)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(apartments, ensure_ascii=False, indent=2), encoding="utf-8")
    return len(apartments)


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    db_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2])
    if not db_path.exists():
        print(f"DB not found: {db_path}", file=sys.stderr)
        return 1
    count = export(db_path, out_path)
    print(f"Exported {count} apartments to {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
