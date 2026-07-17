---
title: How It Works
description: The full generation pipeline, retry behavior, and what each question status means.
---

## Pipeline

1. **Ingest** — uploaded documents are parsed, split into overlapping chunks, and embedded
2. **Index** — chunks are indexed with BM25 (and optionally a dense vector index for reranking)
3. **Retrieve** — for a given keyword, the most relevant chunks are pulled from the knowledge base
4. **Generate** — an LLM writes a question stem, four options, and an explanation grounded in the retrieved evidence
5. **Verify** — a verification gate checks the question's schema, that its evidence span is actually present in the source document, and topic relevance
6. **Cross-CoVe** — three independently configured reviewer LLMs each vote on whether the answer is correct; the question needs a majority to pass
7. **Dedup** — near-duplicate stems are detected and regenerated
8. **Stream** — passing questions are sent to the client immediately over WebSocket

## OK-only mode and retries

With `OK_ONLY_MODE` enabled (the default), the app never shows you a question that failed verification. Instead, for each requested question it retries — up to 3 rounds, or 90 seconds, whichever comes first — adjusting retrieval parameters and prompt instructions between attempts.

If every retry still fails, one of two things happens:

- If a **question bank fallback** is configured, a previously-verified question on the same topic is served instead
- Otherwise, a **graceful fallback** kicks in: the best attempt from the retries is marked `OK` anyway (flagged internally as a graceful fallback) so you still get a result rather than nothing

Only if no usable question exists at all does the item come back as a visible error.

## Question statuses

| Status | Meaning |
| --- | --- |
| `OK` | Passed verification (or served via graceful fallback) |
| `FAILED_VERIFICATION` | The Cross-CoVe reviewers didn't reach majority agreement on the answer |
| `INSUFFICIENT_EVIDENCE` | The generated question couldn't be tied back to a real span in the source document |

Because the live generate page always runs in OK-only mode, you will only ever see `OK` questions there — `FAILED_VERIFICATION` and `INSUFFICIENT_EVIDENCE` are internal states used during retries. They can appear in results if you call the REST `/generate` endpoint directly with OK-only mode disabled, or in older history entries.
