---
title: Knowledge Base
description: Membuat, mengedit, dan mengelola dokumen sumber soal docs-to-quiz.
---

Knowledge base adalah kumpulan dokumen bernama. Setiap permintaan generate menyasar tepat satu knowledge base.

## Membuat knowledge base

Klik **+ Create Knowledge** di halaman utama dan isi:

- **Title** — harus unik (tidak case-sensitive); duplikat akan ditolak
- **Files** — satu atau lebih file `.pdf`, `.docx`, `.txt`, `.md`

Tidak ada batas ukuran file di server. File di-stream ke disk lalu diparse saat ingestion — hanya empat format di atas yang punya parser, jadi tipe file lain dilewati dengan peringatan, bukan bikin gagal total.

## Siklus status

| Status | Arti |
| --- | --- |
| **Embedding Processing** | Dokumen sedang diparse, dipotong, dan di-embed. Halaman polling tiap 2 detik dan update otomatis. |
| **Ready** | Indexing selesai. Kamu bisa buka knowledge base dan generate soal. |
| **Failed** | Ingestion gagal — pesan error ditampilkan di kartu. Penyebab paling umum adalah `no_extractable_text`, artinya tidak ada satu pun file yang punya teks yang bisa dibaca parser (misalnya PDF hasil scan gambar tanpa lapisan teks OCR). |

Di baliknya, tiap dokumen dipotong jadi chunk (1000 karakter, overlap 150 karakter), di-embed dengan model multibahasa, dan diindeks untuk pencarian kata kunci (BM25) dan — kalau diaktifkan — pencarian semantik.

## Mengedit knowledge base

Klik **Edit** di kartu knowledge base untuk:

- **Rename** — ubah judul dan simpan
- **Add files** — unggah dokumen tambahan ke knowledge base yang sama
- **Remove file** — hapus salah satu file sumber yang ada

:::note
Menambah atau menghapus file **membuat ulang ingestion seluruh knowledge base** — statusnya kembali ke Embedding Processing, dan generate diblokir sampai Ready lagi.
:::

## Menghapus knowledge base

Klik **Delete** di kartu. Kamu akan diminta konfirmasi — aksi ini tidak bisa dibatalkan.
