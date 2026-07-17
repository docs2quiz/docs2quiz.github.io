---
title: Installation
description: Three ways to run docs-to-quiz — manual, dev script, or Docker.
---

## Prerequisites

- Python 3.10 or later
- Node.js 20 or later
- An API key from at least one LLM provider (Gemini, Groq, Cerebras, or an OpenAI-compatible endpoint) — or [Ollama](https://ollama.com) running locally if you want to stay fully offline

## Option 1: Manual

Backend:

```bash
git clone https://github.com/iqbal-rahmatullah/docs-to-quiz.git
cd docs-to-quiz
python -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env   # set your LLM provider + API key
uvicorn app.main:app   # API on :8000
```

Frontend, in a second terminal:

```bash
cd web
npm install
npm run dev             # UI on :3000
```

## Option 2: `dev.sh`

Runs both servers together from the repo root (after the manual `.venv` and `npm install` setup above has been done once):

```bash
./dev.sh
```

## Option 3: Docker

No local Python or Node needed — everything runs in containers.

```bash
cp .env.example .env    # set your LLM provider + API key
docker compose up --build
```

Backend on `:8000`, frontend on `:3000`. Uploaded knowledge bases persist in the `data/` volume across restarts.

## Minimal `.env`

At minimum, set a provider and its key. Example with Gemini:

```bash
LLM_PROVIDER=gemini_sdk
LLM_API_KEY=your_api_key_here
LLM_MODEL=gemini-2.5-flash-lite
```

See [Configuration](/reference/configuration/) for the full list of providers and every tunable setting.

Next: walk through generating your first quiz in [First Quiz](/getting-started/first-quiz/).
