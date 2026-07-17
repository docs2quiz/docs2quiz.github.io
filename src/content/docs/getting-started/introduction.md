---
title: Introduction
description: What docs-to-quiz is, who it's for, and how it avoids hallucinated questions.
---

**docs-to-quiz** turns your own documents into multiple-choice quiz questions — every question cites the exact span of text it came from, and every answer is checked by three independent LLM reviewers before it ever reaches you.

Upload a PDF, DOCX, TXT, or Markdown file, pick a keyword, and the app retrieves relevant evidence from your document, generates a question grounded in that evidence, and verifies the answer is actually derivable from it. Nothing is generated from the model's general knowledge alone — if the evidence doesn't support an answer, the question is rejected or regenerated.

## Who this is for

- Teachers and trainers building quizzes from their own course material
- Teams turning internal docs or wikis into onboarding assessments
- Anyone who wants LLM-generated questions they can actually trust, because each one is traceable back to a source

## What makes it different

- **Evidence-grounded** — every question stem links to the document span it's based on
- **Cross-CoVe verification** — three independently configured reviewer LLMs vote on whether the answer is correct; a question only ships on majority agreement
- **Provider-agnostic** — Gemini, Groq, Cerebras, any OpenAI-compatible endpoint, or fully offline via Ollama
- **Self-hosted** — your documents and generated content never leave your own server

:::caution[No authentication]
docs-to-quiz is built for **self-hosting by a single trusted user**. There is no login system and no multi-tenant isolation — anyone who can reach the app can manage knowledge bases and generate questions. **Do not expose it directly to the public internet.** Run it on localhost, behind a VPN, or behind your own reverse proxy with auth if you need remote access.
:::

Ready to try it? Continue to [Installation](/getting-started/installation/).
