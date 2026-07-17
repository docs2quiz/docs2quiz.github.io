---
title: Instalasi
description: Tiga cara menjalankan docs-to-quiz — manual, dev script, atau Docker.
---

## Prasyarat

- Python 3.10 ke atas
- Node.js 20 ke atas
- API key dari minimal satu provider LLM (Gemini, Groq, Cerebras, atau endpoint kompatibel OpenAI) — atau [Ollama](https://ollama.com) yang jalan lokal kalau mau sepenuhnya offline

## Opsi 1: Manual

Backend:

```bash
git clone https://github.com/iqbal-rahmatullah/docs-to-quiz.git
cd docs-to-quiz
python -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env   # set provider LLM + API key
uvicorn app.main:app   # API di :8000
```

Frontend, di terminal kedua:

```bash
cd web
npm install
npm run dev             # UI di :3000
```

## Opsi 2: `dev.sh`

Menjalankan kedua server bersamaan dari root repo (setelah setup manual `.venv` dan `npm install` di atas dilakukan sekali):

```bash
./dev.sh
```

## Opsi 3: Docker

Tidak butuh Python atau Node lokal — semua jalan di container.

```bash
cp .env.example .env    # set provider LLM + API key
docker compose up --build
```

Backend di `:8000`, frontend di `:3000`. Knowledge base yang diunggah tersimpan permanen di volume `data/` walau restart.

## `.env` minimal

Minimal, set satu provider dan key-nya. Contoh dengan Gemini:

```bash
LLM_PROVIDER=gemini_sdk
LLM_API_KEY=your_api_key_here
LLM_MODEL=gemini-2.5-flash-lite
```

Lihat [Konfigurasi](/id/reference/configuration/) untuk daftar lengkap provider dan semua setelan yang bisa diatur.

Selanjutnya: ikuti langkah membuat kuis pertama di [Kuis Pertama](/id/getting-started/first-quiz/).
