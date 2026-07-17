---
title: Konfigurasi
description: Setelan .env yang akan benar-benar kamu pakai, dan di mana cari selebihnya.
---

docs-to-quiz dikonfigurasi lewat file `.env`, disalin dari `.env.example` saat setup. File contoh itu mendokumentasikan 70+ setelan; halaman ini membahas yang paling sering dibutuhkan.

## Provider LLM

Set `LLM_PROVIDER` ke salah satu dari `gemini_sdk`, `openai_compatible`, `groq`, `cerebras`, atau `ollama`, lalu isi kredensial yang sesuai.

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

**Endpoint kompatibel OpenAI mana pun:**
```bash
LLM_PROVIDER=openai_compatible
LLM_API_BASE=https://api.your-provider.com/v1
LLM_API_KEY=your_api_key
LLM_MODEL=your-model-name
```

**Ollama (sepenuhnya offline):**
```bash
LLM_PROVIDER=ollama
LLM_API_BASE=http://localhost:11434
LLM_MODEL=qwen3:8b
```

## Retrieval

`RETRIEVAL_MODE` bisa `bm25_only` (default, pencarian leksikal cepat) atau `hybrid_rerank` (menambah tahap reranking semantik di atasnya — recall lebih baik, latensi lebih tinggi).

## Verifikasi Cross-CoVe

`COVE_ENABLED` (default `true`) mengaktifkan verifikasi voting-mayoritas tiga reviewer. Konfigurasikan tiap reviewer secara independen — mencampur provider berarti ketiga suara tidak berkorelasi dengan blind spot satu provider:

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

Reviewer mana pun yang belum dikonfigurasi akan jatuh ke setelan `REVIEWER_*` tunggal (yang sendirinya default ke setelan `LLM_*` utama kalau belum diset juga).

## Ingestion knowledge base

```bash
KNOWLEDGE_DIR=data/knowledge
EMBED_MODEL=intfloat/multilingual-e5-small
CHUNK_SIZE=1000
CHUNK_OVERLAP=150
```

## Perilaku generate

`OK_ONLY_MODE` (default `true`) berarti hanya soal terverifikasi yang pernah ditampilkan ke kamu — pipeline mencoba ulang secara internal alih-alih menampilkan yang gagal. Lihat [Cara Kerja](/id/reference/how-it-works/) untuk perilaku retry dan fallback lengkap.

## Selebihnya

Untuk daftar lengkap beranotasi — pemangkasan evidence, fallback question bank, model evaluasi NLI/semantik, dan lainnya — lihat [`.env.example`](https://github.com/iqbal-rahmatullah/docs-to-quiz/blob/main/.env.example) di repository.
