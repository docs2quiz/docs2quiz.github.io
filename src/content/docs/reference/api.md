---
title: API Reference
description: REST and WebSocket routes exposed by the backend.
---

The backend is a FastAPI app with interactive docs at `http://localhost:8000/docs` once it's running — that's the authoritative, always-up-to-date reference. This page is a quick map.

| Route | Purpose |
| --- | --- |
| `GET /health` | Health check |
| `POST /knowledge` | Create a knowledge base (multipart: title + files) |
| `GET /knowledge` | List all knowledge bases |
| `GET /knowledge/{id}` | Get one knowledge base |
| `PATCH /knowledge/{id}` | Rename a knowledge base |
| `POST /knowledge/{id}/files` | Add files to a knowledge base |
| `DELETE /knowledge/{id}/files/{filename}` | Remove a file |
| `DELETE /knowledge/{id}` | Delete a knowledge base |
| `GET /knowledge/{id}/keywords` | Top keywords across indexed chunks |
| `POST /generate` | Synchronous batch generation (REST) |
| `WS /ws/generate` | Streaming generation — what the UI uses |
| `GET /runs/latest` | Most recent run log |
| `GET /eval/rouge` | ROUGE score over the question bank |
| `GET /eval/nli` | NLI entailment score over the question bank |
| `GET /eval/semantic` | Embedding similarity score over the question bank |

For request/response schemas, use the live `/docs` page — it reflects the exact Pydantic models the API validates against.
