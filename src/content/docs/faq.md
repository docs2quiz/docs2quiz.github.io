---
title: FAQ & Troubleshooting
description: Common issues and their causes.
---

### My knowledge base shows "Failed" with `no_extractable_text`

None of the uploaded files had any text a parser could read — the most common cause is a scanned/image-only PDF with no OCR text layer. Try a text-based export of the same document, or run OCR on it first.

### I got a 409 error creating a knowledge base

Titles must be unique (case-insensitive). Rename the new one, or delete/rename the existing knowledge base with that title.

### Generate is grayed out / I can't generate questions

The knowledge base is still in **Embedding Processing** — this happens on first creation and again any time you add or remove a file, since that re-ingests the whole knowledge base. Wait for the status to switch to **Ready**.

### What does "N failed validation" in the progress line mean?

Those are generation attempts that didn't pass verification and were retried or replaced internally — they're not shown as questions. If you're in OK-only mode (the default), you'll only ever see questions that ultimately passed.

### My history is empty on another computer / browser

History is stored in your browser's local storage only — it's never synced to the server or between devices. See [History](/guides/history/).

### The Docker image is huge / slow to build

Make sure you're using the backend `Dockerfile` from the repo as-is — it installs a CPU-only build of PyTorch specifically to avoid pulling in several gigabytes of unused CUDA dependencies. If you've customized it and lost that step, the full CUDA-enabled wheel is the likely cause.

### Can I expose this to the internet?

Not directly — see the [warning in the introduction](/getting-started/introduction/). There's no authentication built in. Put it behind your own auth layer or reverse proxy, or keep it on a private network / VPN.
