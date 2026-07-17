---
title: Cara Kerja
description: Pipeline generate lengkap, perilaku retry, dan arti tiap status soal.
---

## Pipeline

1. **Ingest** — dokumen yang diunggah diparse, dipotong jadi chunk overlap, dan di-embed
2. **Index** — chunk diindeks dengan BM25 (dan opsional indeks vektor untuk reranking)
3. **Retrieve** — untuk suatu keyword, chunk paling relevan diambil dari knowledge base
4. **Generate** — LLM menulis stem soal, empat opsi, dan explanation yang berdasar pada bukti yang diambil
5. **Verify** — gerbang verifikasi memeriksa skema soal, apakah span evidence-nya memang ada di dokumen sumber, dan relevansi topik
6. **Cross-CoVe** — tiga LLM reviewer yang dikonfigurasi independen masing-masing memberi suara apakah jawabannya benar; soal butuh suara mayoritas untuk lolos
7. **Dedup** — stem yang hampir sama dideteksi dan dibuat ulang
8. **Stream** — soal yang lolos langsung dikirim ke klien lewat WebSocket

## Mode OK-only dan retry

Dengan `OK_ONLY_MODE` aktif (default), aplikasi tidak pernah menampilkan soal yang gagal verifikasi ke kamu. Sebaliknya, untuk tiap soal yang diminta ia mencoba ulang — sampai 3 putaran, atau 90 detik, mana yang lebih dulu tercapai — menyesuaikan parameter retrieval dan instruksi prompt di antara percobaan.

Kalau semua percobaan tetap gagal, salah satu dari dua hal terjadi:

- Kalau **question bank fallback** dikonfigurasi, soal yang sudah pernah terverifikasi di topik yang sama disajikan sebagai gantinya
- Kalau tidak, **graceful fallback** berjalan: percobaan terbaik dari retry tetap ditandai `OK` (ditandai secara internal sebagai graceful fallback) supaya kamu tetap dapat hasil, bukan kosong

Hanya kalau tidak ada soal yang bisa dipakai sama sekali, item itu kembali sebagai error yang terlihat.

## Status soal

| Status | Arti |
| --- | --- |
| `OK` | Lolos verifikasi (atau disajikan lewat graceful fallback) |
| `FAILED_VERIFICATION` | Reviewer Cross-CoVe tidak mencapai kesepakatan mayoritas soal jawabannya |
| `INSUFFICIENT_EVIDENCE` | Soal yang dihasilkan tidak bisa dikaitkan balik ke span nyata di dokumen sumber |

Karena halaman generate live selalu jalan dalam mode OK-only, kamu hanya akan pernah melihat soal `OK` di sana — `FAILED_VERIFICATION` dan `INSUFFICIENT_EVIDENCE` adalah status internal yang dipakai selama retry. Status itu bisa muncul di hasil kalau kamu memanggil endpoint REST `/generate` langsung dengan mode OK-only dimatikan, atau di entri history yang lebih lama.
