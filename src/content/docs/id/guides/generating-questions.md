---
title: Membuat Soal
description: Semua kontrol di halaman generate, dan bagaimana streaming generation bekerja.
---

Buka knowledge base berstatus **Ready** untuk sampai ke halaman generate.

## Bagian keyword

Tiap bagian punya:

- **Keyword** — topik yang mau dibuatkan soal. Sebaiknya istilah yang kamu tahu memang muncul di dokumenmu.
- **Question Count** — berapa banyak soal untuk keyword itu. Default 5; server menerima 1–100.

Klik **+ Add Keyword Section** untuk antre beberapa topik sekaligus dalam satu run, atau **Remove** untuk menghapus salah satu.

### Keyword Stats

Klik **📊 Keyword Stats** untuk membuka daftar istilah paling sering muncul di chunk yang terindeks di knowledge base-mu (stopword umum dalam bahasa Inggris dan Indonesia dikecualikan). Klik salah satu kata untuk otomatis mengisi bagian keyword — berguna kalau kamu belum tahu isi dokumennya apa.

## Generate dan Stop

Klik **Generate Questions** untuk mulai. Soal muncul langsung lewat koneksi WebSocket saat masing-masing dihasilkan dan diverifikasi — kamu tidak perlu menunggu seluruh batch. Baris progres menunjukkan berapa yang selesai dan berapa yang gagal verifikasi selama proses. Klik **Stop Generation** kapan saja untuk membatalkan.

## Bahasa tampilan

Toggle **EN / ID** hanya mengatur bahasa *tampilan* — versi Inggris dan Indonesia dari setiap soal selalu dihasilkan bersamaan dalam satu run, apa pun yang dipilih. Mengganti toggle cuma mengubah teks mana yang ditampilkan. Dalam mode Indonesia, soal dengan terjemahan Indonesia lengkap ditampilkan lebih dulu.

## Show correct answers

Aktifkan **Show correct answers** untuk menampilkan opsi jawaban benar (disorot) dan **Explanation** yang bisa dibuka untuk tiap soal. Matikan untuk memakai soal sebagai kuis buta.

## Membaca kartu soal

Tiap soal menampilkan:

- Stem soal dan empat opsi (A–D)
- Chip status kalau soal butuh fallback (lihat [Cara Kerja](/id/reference/how-it-works/) untuk arti masing-masing)
- **Explanation** yang bisa dibuka
- Blok **Source Evidence / RAG Context** yang mencantumkan file sumber, document ID, dan potongan teks persis tempat soal itu berdasar

Lanjut ke [Mengekspor](/id/guides/exporting/) untuk menyimpan hasilmu.
