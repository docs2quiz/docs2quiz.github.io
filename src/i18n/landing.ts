export type LandingLang = 'en' | 'id'

export const landing = {
	en: {
		nav: {
			docs: 'Docs',
			github: 'GitHub',
			switchLang: 'ID',
		},
		hero: {
			tagline: 'Turn your documents into quiz questions.',
			subline:
				'Evidence-cited, multi-LLM verified, never hallucinated. Upload a PDF, DOCX, TXT, or Markdown file and get grounded multiple-choice questions — every answer traceable back to the exact source span it came from.',
			ctaPrimary: 'Get Started',
			ctaSecondary: 'View on GitHub',
			demoAlt:
				'Demo: picking a knowledge base, entering a keyword, streaming generation, and the finished question with cited evidence',
		},
		features: {
			title: 'Why docs-to-quiz',
			items: [
				{
					title: 'Evidence-grounded',
					desc: 'Every question stem cites the exact document and text span it was generated from — ungrounded questions are rejected before they ship.',
				},
				{
					title: 'Cross-CoVe verified',
					desc: 'Three independently configured reviewer LLMs vote on every answer. A question only ships on majority agreement.',
				},
				{
					title: 'Provider-agnostic',
					desc: 'Gemini, Groq, Cerebras, any OpenAI-compatible endpoint, or fully offline via Ollama — your choice.',
				},
				{
					title: 'Bilingual output',
					desc: 'English and Indonesian versions of every question are generated together in a single run.',
				},
				{
					title: 'Live streaming',
					desc: 'Questions stream in over WebSocket as they’re generated and verified — no waiting for a full batch.',
				},
				{
					title: 'Export anywhere',
					desc: 'PDF for print-ready exams, DOCX for editing, or JSON for your own pipeline.',
				},
			],
		},
		howItWorks: {
			title: 'How it works',
			steps: [
				'Upload',
				'Chunk & Embed',
				'Retrieve',
				'Generate',
				'Verify (Cross-CoVe ×3)',
				'Stream & Export',
			],
		},
		quickstart: {
			title: 'Quickstart',
			tabs: {
				manual: {
					label: 'Manual',
					code: `python -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env
uvicorn app.main:app

# in a second terminal
cd web && npm install && npm run dev`,
				},
				devsh: {
					label: './dev.sh',
					code: `cp .env.example .env
./dev.sh`,
				},
				docker: {
					label: 'Docker',
					code: `cp .env.example .env
docker compose up --build`,
				},
			},
		},
		warning: {
			title: 'No authentication by design',
			body: 'docs-to-quiz is built for self-hosting by a single trusted user. There is no login system. Do not expose it directly to the public internet — run it on localhost, behind a VPN, or behind your own reverse proxy with auth.',
		},
		footer: {
			license: 'MIT License',
			github: 'GitHub',
			docs: 'Documentation',
			credit: 'docs-to-quiz',
		},
	},
	id: {
		nav: {
			docs: 'Docs',
			github: 'GitHub',
			switchLang: 'EN',
		},
		hero: {
			tagline: 'Ubah dokumenmu jadi soal kuis.',
			subline:
				'Bersumber dari bukti, diverifikasi banyak LLM, tidak pernah halusinasi. Unggah PDF, DOCX, TXT, atau Markdown dan dapatkan soal pilihan ganda yang berdasar — setiap jawaban bisa dilacak balik ke potongan teks sumbernya.',
			ctaPrimary: 'Mulai Sekarang',
			ctaSecondary: 'Lihat di GitHub',
			demoAlt:
				'Demo: memilih knowledge base, memasukkan kata kunci, proses generate streaming, dan soal jadi dengan bukti yang disertakan',
		},
		features: {
			title: 'Kenapa docs-to-quiz',
			items: [
				{
					title: 'Berbasis bukti',
					desc: 'Setiap soal mengutip dokumen dan potongan teks persis tempat ia dihasilkan — soal tanpa bukti ditolak sebelum sampai ke kamu.',
				},
				{
					title: 'Terverifikasi Cross-CoVe',
					desc: 'Tiga LLM reviewer yang dikonfigurasi independen memberi suara pada setiap jawaban. Soal hanya lolos jika mayoritas setuju.',
				},
				{
					title: 'Bebas pilih provider',
					desc: 'Gemini, Groq, Cerebras, endpoint kompatibel OpenAI mana pun, atau sepenuhnya offline lewat Ollama — terserah kamu.',
				},
				{
					title: 'Output dwibahasa',
					desc: 'Versi Inggris dan Indonesia dari setiap soal dihasilkan bersamaan dalam satu proses.',
				},
				{
					title: 'Streaming langsung',
					desc: 'Soal muncul lewat WebSocket saat dihasilkan dan diverifikasi — tidak perlu menunggu satu batch selesai.',
				},
				{
					title: 'Ekspor ke mana saja',
					desc: 'PDF siap cetak untuk ujian, DOCX untuk diedit, atau JSON untuk pipeline-mu sendiri.',
				},
			],
		},
		howItWorks: {
			title: 'Cara kerja',
			steps: [
				'Unggah',
				'Potong & Embed',
				'Ambil Bukti',
				'Generate',
				'Verifikasi (Cross-CoVe ×3)',
				'Stream & Ekspor',
			],
		},
		quickstart: {
			title: 'Mulai Cepat',
			tabs: {
				manual: {
					label: 'Manual',
					code: `python -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env
uvicorn app.main:app

# di terminal kedua
cd web && npm install && npm run dev`,
				},
				devsh: {
					label: './dev.sh',
					code: `cp .env.example .env
./dev.sh`,
				},
				docker: {
					label: 'Docker',
					code: `cp .env.example .env
docker compose up --build`,
				},
			},
		},
		warning: {
			title: 'Sengaja tanpa autentikasi',
			body: 'docs-to-quiz dibuat untuk self-hosted oleh satu pengguna tepercaya. Tidak ada sistem login. Jangan ekspos langsung ke internet publik — jalankan di localhost, di balik VPN, atau di balik reverse proxy dengan auth milikmu sendiri.',
		},
		footer: {
			license: 'Lisensi MIT',
			github: 'GitHub',
			docs: 'Dokumentasi',
			credit: 'docs-to-quiz',
		},
	},
} as const
