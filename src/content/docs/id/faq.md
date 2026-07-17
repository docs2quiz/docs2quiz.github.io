---
title: FAQ & Pemecahan Masalah
description: Masalah umum dan penyebabnya.
---

### Knowledge base saya menampilkan "Failed" dengan `no_extractable_text`

Tidak ada satu pun file yang diunggah punya teks yang bisa dibaca parser — penyebab paling umum adalah PDF hasil scan/gambar tanpa lapisan teks OCR. Coba ekspor versi berbasis teks dari dokumen yang sama, atau jalankan OCR dulu.

### Saya dapat error 409 saat membuat knowledge base

Judul harus unik (tidak case-sensitive). Ganti nama yang baru, atau hapus/rename knowledge base yang sudah ada dengan judul itu.

### Generate abu-abu / saya tidak bisa generate soal

Knowledge base masih di status **Embedding Processing** — ini terjadi saat pembuatan pertama dan setiap kali kamu menambah atau menghapus file, karena itu membuat ulang ingestion seluruh knowledge base. Tunggu sampai statusnya jadi **Ready**.

### Apa arti "N failed validation" di baris progres?

Itu percobaan generate yang tidak lolos verifikasi dan dicoba ulang atau diganti secara internal — bukan ditampilkan sebagai soal. Kalau kamu di mode OK-only (default), kamu hanya akan melihat soal yang akhirnya lolos.

### Riwayat saya kosong di komputer/browser lain

Riwayat cuma tersimpan di local storage browser-mu — tidak pernah disinkronkan ke server atau antar perangkat. Lihat [Riwayat](/id/guides/history/).

### Image Docker-nya besar sekali / lambat di-build

Pastikan kamu pakai `Dockerfile` backend dari repo apa adanya — ia sengaja menginstal PyTorch versi CPU-only untuk menghindari beberapa gigabyte dependensi CUDA yang tidak terpakai. Kalau kamu mengubahnya dan kehilangan langkah itu, wheel CUDA penuh kemungkinan penyebabnya.

### Bisakah aplikasi ini diekspos ke internet?

Tidak secara langsung — lihat [peringatan di pengantar](/id/getting-started/introduction/). Tidak ada autentikasi bawaan. Taruh di balik auth atau reverse proxy milikmu sendiri, atau jaga tetap di jaringan privat / VPN.
