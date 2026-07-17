---
title: Exporting
description: JSON, PDF, and DOCX export formats.
---

Once you have generated questions, the **⬇ Export** menu offers three formats. All three always include the correct answers, regardless of whether "Show correct answers" is toggled on screen, and they export whichever display language (EN/ID) is currently active.

## JSON — raw data

A structured export with every field: question number, topic, competency, stem, all four options, the answer key, explanation, and evidence (document ID, source file, and span text). Useful for feeding results into another tool or pipeline.

## PDF — print-ready exam

A formatted document with a title banner, generation metadata (date, language, total questions), and each question laid out with the correct option highlighted and the answer stated explicitly — ready to print or share as-is.

## DOCX — editable document

The same content as the PDF export, but as an editable Word document, so you can tweak wording, reorder questions, or merge it into your own material before distributing it.

## Filenames

Exports are named `docs-to-quiz_questions_export_YYYY-MM-DD.<ext>` using the date of export.
