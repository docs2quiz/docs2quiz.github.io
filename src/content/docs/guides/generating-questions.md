---
title: Generating Questions
description: Every control on the generate page, and how streaming generation works.
---

Open a **Ready** knowledge base to reach the generate page.

## Keyword sections

Each section has:

- **Keyword** — the topic to generate questions about. It should be a term you expect to actually appear in your documents.
- **Question Count** — how many questions to generate for that keyword. The default is 5; the server accepts 1–100.

Click **+ Add Keyword Section** to queue multiple topics in a single run, or **Remove** to drop one.

### Keyword Stats

Click **📊 Keyword Stats** to open a ranked list of the most frequent terms across your knowledge base's indexed chunks (common stopwords in both English and Indonesian are excluded). Clicking a word fills it into a keyword section for you — useful when you don't already know what's in the documents.

## Generate and Stop

Click **Generate Questions** to start. Questions stream in live over a WebSocket connection as each one is generated and verified — you don't wait for the whole batch. A progress line shows how many are done and how many failed verification along the way. Click **Stop Generation** at any point to cancel the run.

## Display language

The **EN / ID** toggle controls the *display* language only — both English and Indonesian versions of every question are generated together in a single run regardless of which one is selected. Switching just changes which text is rendered. In Indonesian mode, questions with full Indonesian translation coverage are shown first.

## Show correct answers

Toggle **Show correct answers** to reveal the correct option (highlighted) and an expandable **Explanation** for each question. Turn it off to use the generated questions as a blind quiz.

## Reading a question card

Each question shows:

- The question stem and four options (A–D)
- A status chip if the question needed a fallback (see [How It Works](/reference/how-it-works/) for what these mean)
- An expandable **Explanation**
- A **Source Evidence / RAG Context** block listing the source file, document ID, and the exact text span the question was grounded in

Continue to [Exporting](/guides/exporting/) to save your results.
