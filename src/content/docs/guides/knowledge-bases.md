---
title: Knowledge Bases
description: Creating, editing, and managing the documents docs-to-quiz generates questions from.
---

A knowledge base is a named collection of documents. Every generation request targets exactly one knowledge base.

## Creating a knowledge base

Click **+ Create Knowledge** on the home page and provide:

- **Title** — must be unique (case-insensitive); duplicates are rejected
- **Files** — one or more of `.pdf`, `.docx`, `.txt`, `.md`

There's no server-side file size limit. Files are streamed to disk and then parsed during ingestion — only the four listed formats have parsers, so other file types are skipped with a warning rather than causing a failure.

## Status lifecycle

| Status | Meaning |
| --- | --- |
| **Embedding Processing** | Documents are being parsed, chunked, and embedded. The page polls every 2 seconds and updates automatically. |
| **Ready** | Indexing finished. You can open the knowledge base and generate questions. |
| **Failed** | Ingestion couldn't complete — an error message is shown on the card. The most common cause is `no_extractable_text`, meaning none of the uploaded files had any text your parser could read (e.g. a scanned image PDF with no OCR layer). |

Behind the scenes, each document is split into chunks (1000 characters, 150 character overlap), embedded with a multilingual model, and indexed for both keyword (BM25) and — if enabled — semantic search.

## Editing a knowledge base

Click **Edit** on a knowledge base card to:

- **Rename** — change the title and save
- **Add files** — upload more documents into the same knowledge base
- **Remove a file** — delete one of the existing source files

:::note
Adding or removing a file **re-ingests the entire knowledge base** — it goes back to Embedding Processing status, and generation is blocked until it's Ready again.
:::

## Deleting a knowledge base

Click **Delete** on a card. You'll be asked to confirm — this cannot be undone.
