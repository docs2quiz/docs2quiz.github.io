---
title: Mengekspor
description: Format ekspor JSON, PDF, dan DOCX.
---

Setelah punya soal hasil generate, menu **⬇ Export** menawarkan tiga format. Ketiganya selalu menyertakan jawaban benar, terlepas dari toggle "Show correct answers" di layar, dan mengekspor sesuai bahasa tampilan (EN/ID) yang aktif saat itu.

## JSON — data mentah

Ekspor terstruktur dengan semua field: nomor soal, topic, competency, stem, keempat opsi, answer key, explanation, dan evidence (document ID, file sumber, dan teks span). Berguna untuk memasukkan hasil ke tool atau pipeline lain.

## PDF — ujian siap cetak

Dokumen terformat dengan banner judul, metadata generate (tanggal, bahasa, total soal), dan tiap soal disusun dengan opsi benar disorot serta jawabannya dinyatakan eksplisit — siap dicetak atau dibagikan apa adanya.

## DOCX — dokumen bisa diedit

Konten sama seperti ekspor PDF, tapi dalam bentuk dokumen Word yang bisa diedit, jadi kamu bisa ubah kata-kata, urutkan ulang soal, atau gabungkan dengan materimu sendiri sebelum dibagikan.

## Nama file

Ekspor diberi nama `docs-to-quiz_questions_export_YYYY-MM-DD.<ext>` sesuai tanggal ekspor.
