---
title: Riset
description: Metodologi ablation di balik verifikasi Cross-CoVe.
---

Cross-CoVe — tahap verifikasi tiga-reviewer yang dijelaskan di [Cara Kerja](/id/reference/how-it-works/) — divalidasi dengan studi ablation yang mengukur apa yang benar-benar ia tangkap, dan dengan biaya seperti apa.

## Yang diukur studi ini

- **Filtering rate** — berapa banyak soal hasil generate yang ditolak Cross-CoVe
- **Detection rate** — dari soal dengan jawaban yang *sengaja dibuat salah*, berapa banyak yang berhasil ditandai Cross-CoVe — ini angka yang benar-benar memvalidasi tahap verifikasi
- **Evidence-support rate** — seberapa sering span evidence suatu soal benar-benar ditemukan di dokumen sumber, terlepas dari opini reviewer
- Proksi kualitas teks offline standar (ROUGE, entailment NLI, kemiripan embedding) yang membandingkan konten hasil generate dengan evidence yang diambil

## Mereproduksi

Script ablation ada di repository aplikasi di bawah `app/eval/` dan `app/scripts/`, dan didokumentasikan lengkap — termasuk perintah persisnya — di [`docs/RESEARCH.md`](https://github.com/iqbal-rahmatullah/docs-to-quiz/blob/main/docs/RESEARCH.md). Script-script itu dibuat untuk jalan di knowledge base mana pun, jadi kamu bisa mengukur efektivitas Cross-CoVe di dokumen dan konfigurasi provider milikmu sendiri, bukan cuma angka yang dilaporkan upstream.
