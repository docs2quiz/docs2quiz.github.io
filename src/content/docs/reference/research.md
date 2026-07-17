---
title: Research
description: The ablation methodology behind Cross-CoVe verification.
---

Cross-CoVe — the three-reviewer verification step described in [How It Works](/reference/how-it-works/) — was validated with an ablation study measuring what it actually catches, and at what cost.

## What the study measures

- **Filtering rate** — how many generated questions Cross-CoVe rejects
- **Detection rate** — of questions with *known-wrong* answers (deliberately corrupted), how many Cross-CoVe correctly flags — this is the number that actually validates the verification step
- **Evidence-support rate** — how often a question's evidence span is genuinely found in the source document, independent of reviewer opinion
- Standard offline text-quality proxies (ROUGE, NLI entailment, embedding similarity) comparing generated content against retrieved evidence

## Reproducing it

The ablation scripts live in the app repository under `app/eval/` and `app/scripts/`, and are documented in full — including exact commands — in [`docs/RESEARCH.md`](https://github.com/iqbal-rahmatullah/docs-to-quiz/blob/main/docs/RESEARCH.md). They're built to run against any knowledge base, so you can measure Cross-CoVe's effectiveness on your own documents and provider configuration, not just the numbers reported upstream.
