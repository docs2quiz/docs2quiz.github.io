---
title: Configuration
description: The .env settings you'll actually touch, and where to find the rest.
---

docs-to-quiz is configured entirely through a `.env` file, copied from `.env.example` at setup time. The example file documents 70+ settings; this page covers the ones most people need.

## LLM provider

Set `LLM_PROVIDER` to one of `gemini_sdk`, `openai_compatible`, `groq`, `cerebras`, or `ollama`, then fill in the matching credentials.

**Gemini:**
```bash
LLM_PROVIDER=gemini_sdk
LLM_API_KEY=your_gemini_api_key
LLM_MODEL=gemini-2.5-flash-lite
```

**Groq:**
```bash
LLM_PROVIDER=groq
GROQ_API_KEY=your_groq_api_key
LLM_MODEL=llama-3.3-70b-versatile
```

**Cerebras:**
```bash
LLM_PROVIDER=cerebras
CEREBRAS_API_KEY=your_cerebras_api_key
LLM_MODEL=llama-3.3-70b
```

**Any OpenAI-compatible endpoint:**
```bash
LLM_PROVIDER=openai_compatible
LLM_API_BASE=https://api.your-provider.com/v1
LLM_API_KEY=your_api_key
LLM_MODEL=your-model-name
```

**Ollama (fully offline):**
```bash
LLM_PROVIDER=ollama
LLM_API_BASE=http://localhost:11434
LLM_MODEL=qwen3:8b
```

## Retrieval

`RETRIEVAL_MODE` is `bm25_only` (default, fast lexical search) or `hybrid_rerank` (adds a dense semantic reranking pass on top — better recall, more latency).

## Cross-CoVe verification

`COVE_ENABLED` (default `true`) turns on three-reviewer majority-vote verification. Configure each reviewer independently — mixing providers means the three votes aren't correlated by one provider's blind spots:

```bash
REVIEWER_1_PROVIDER=groq
REVIEWER_1_API_KEY=your_groq_api_key
REVIEWER_1_MODEL=llama-3.3-70b-versatile

REVIEWER_2_PROVIDER=gemini_sdk
REVIEWER_2_API_KEY=your_gemini_api_key
REVIEWER_2_MODEL=gemini-2.5-flash-lite

REVIEWER_3_PROVIDER=cerebras
REVIEWER_3_API_KEY=your_cerebras_api_key
REVIEWER_3_MODEL=llama-3.3-70b
```

Any reviewer left unconfigured falls back to the single `REVIEWER_*` settings (which themselves default to your main `LLM_*` settings if also unset).

## Knowledge base ingestion

```bash
KNOWLEDGE_DIR=data/knowledge
EMBED_MODEL=intfloat/multilingual-e5-small
CHUNK_SIZE=1000
CHUNK_OVERLAP=150
```

## Generation behavior

`OK_ONLY_MODE` (default `true`) means only verified questions are ever shown to you — the pipeline retries internally rather than surfacing a failed one. See [How It Works](/reference/how-it-works/) for the full retry and fallback behavior.

## Everything else

For the complete annotated list — evidence trimming, question bank fallback, NLI/semantic evaluation models, and more — see [`.env.example`](https://github.com/iqbal-rahmatullah/docs-to-quiz/blob/main/.env.example) in the repository.
