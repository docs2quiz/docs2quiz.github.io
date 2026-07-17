---
title: Pengantar
description: Apa itu docs-to-quiz, untuk siapa, dan bagaimana ia menghindari soal halusinasi.
---

**docs-to-quiz** mengubah dokumenmu sendiri jadi soal pilihan ganda — setiap soal mengutip potongan teks persis tempat ia berasal, dan setiap jawaban diperiksa oleh tiga reviewer LLM independen sebelum sampai ke kamu.

Unggah file PDF, DOCX, TXT, atau Markdown, pilih kata kunci, lalu aplikasi mengambil bukti relevan dari dokumenmu, menghasilkan soal yang berdasar pada bukti itu, dan memverifikasi bahwa jawabannya memang bisa diturunkan darinya. Tidak ada yang dihasilkan murni dari pengetahuan umum model — kalau buktinya tidak mendukung suatu jawaban, soal itu ditolak atau dibuat ulang.

## Untuk siapa

- Guru dan trainer yang membuat kuis dari materi ajar mereka sendiri
- Tim yang mengubah dokumen internal atau wiki jadi asesmen onboarding
- Siapa pun yang ingin soal buatan LLM yang benar-benar bisa dipercaya, karena tiap soal bisa dilacak balik ke sumbernya

## Yang membuatnya berbeda

- **Berbasis bukti** — setiap stem soal terhubung ke potongan dokumen tempat ia dihasilkan
- **Terverifikasi Cross-CoVe** — tiga LLM reviewer yang dikonfigurasi independen memberi suara apakah jawabannya benar; soal hanya rilis kalau mayoritas setuju
- **Bebas pilih provider** — Gemini, Groq, Cerebras, endpoint kompatibel OpenAI mana pun, atau sepenuhnya offline lewat Ollama
- **Self-hosted** — dokumen dan konten yang dihasilkan tidak pernah keluar dari server milikmu sendiri

:::caution[Tanpa autentikasi]
docs-to-quiz dibuat untuk **self-hosted oleh satu pengguna tepercaya**. Tidak ada sistem login dan tidak ada isolasi multi-tenant — siapa pun yang bisa mengakses aplikasi bisa mengelola knowledge base dan menghasilkan soal. **Jangan ekspos langsung ke internet publik.** Jalankan di localhost, di balik VPN, atau di balik reverse proxy milikmu sendiri dengan auth kalau butuh akses jarak jauh.
:::

Siap mencoba? Lanjut ke [Instalasi](/id/getting-started/installation/).
