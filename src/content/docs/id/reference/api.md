---
title: Referensi API
description: Route REST dan WebSocket yang disediakan backend.
---

Backend adalah aplikasi FastAPI dengan dokumentasi interaktif di `http://localhost:8000/docs` begitu server jalan — itu referensi paling akurat dan selalu up-to-date. Halaman ini cuma peta singkat.

| Route | Fungsi |
| --- | --- |
| `GET /health` | Health check |
| `POST /knowledge` | Buat knowledge base (multipart: title + files) |
| `GET /knowledge` | List semua knowledge base |
| `GET /knowledge/{id}` | Ambil satu knowledge base |
| `PATCH /knowledge/{id}` | Rename knowledge base |
| `POST /knowledge/{id}/files` | Tambah file ke knowledge base |
| `DELETE /knowledge/{id}/files/{filename}` | Hapus file |
| `DELETE /knowledge/{id}` | Hapus knowledge base |
| `GET /knowledge/{id}/keywords` | Kata kunci teratas dari chunk terindeks |
| `POST /generate` | Generate batch sinkron (REST) |
| `WS /ws/generate` | Generate streaming — yang dipakai UI |
| `GET /runs/latest` | Log run terbaru |
| `GET /eval/rouge` | Skor ROUGE atas question bank |
| `GET /eval/nli` | Skor entailment NLI atas question bank |
| `GET /eval/semantic` | Skor kemiripan embedding atas question bank |

Untuk skema request/response, gunakan halaman `/docs` live — itu merefleksikan persis model Pydantic yang divalidasi API.
