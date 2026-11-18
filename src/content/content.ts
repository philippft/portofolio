// src/content/content.ts
// Single source of truth for every word on the portfolio.
// Strings that start with "[ISI:" are placeholders Philip still has to fill in;
// render them with the highlight style (bg #fff1bf, text #5a4300).

export type Lang = 'en' | 'id';
export type L = { en: string; id: string };
export type Track = 'be' | 'ml';

export const isPlaceholder = (s: string) => s.startsWith('[ISI');

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Philip Filadelphia Tomasui',
  shortName: 'Philip F. Tomasui',
  brandName: 'Philip Tomasui',
  email: 'dzosfphilip@gmail.com',
  wordmark: 'Tomasui',
  copyrightYear: '2026',
  campus: 'Universitas Udayana',
  entryYear: '2024',
  gpa: '3.97',
  base: 'Jimbaran, Bali',
  timeZone: 'Asia/Makassar', // WITA, UTC+8
  photo: '/images/philip.jpg', // full photo, used for Open Graph
  photoCard: '/images/philip-card.jpg', // head-and-shoulders crop for the ID card
  cvUrl: '/cv/CV_Philip_Tomasui.pdf',
  program: { en: 'Informatics, Faculty of Mathematics and Natural Sciences', id: 'Informatika, Fakultas MIPA' } as L,
  role: { en: 'Back-end and machine learning, Universitas Udayana.', id: 'Back-end dan machine learning, Universitas Udayana.' } as L,
  intro: {
    en: 'I build Laravel and Express back-ends, and train machine-learning models on Indonesian and Balinese data.',
    id: 'Saya membangun back-end Laravel dan Express, dan melatih model machine learning untuk data berbahasa Indonesia dan Bali.',
  } as L,
  lookingFor: { en: 'Looking for a back-end or ML internship from', id: 'Mencari magang back-end atau ML mulai' } as L,
  availableFrom: '[ISI: bulan/tahun]',
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contacts = [
  { key: 'whatsapp', label: 'WhatsApp', handle: '+62 812-3765-1330', href: 'https://wa.me/6281237651330', external: true },
  { key: 'email', label: 'Email', handle: 'dzosfphilip@gmail.com', href: 'mailto:dzosfphilip@gmail.com', external: false },
  { key: 'linkedin', label: 'LinkedIn', handle: '[ISI: linkedin.com/in/…]', href: '#', external: true },
  { key: 'instagram', label: 'Instagram', handle: '[ISI: @username]', href: '#', external: true },
  { key: 'github', label: 'GitHub', handle: 'github.com/philippft', href: 'https://github.com/philippft', external: true },
] as const;

/* ------------------------------------------------------------------ */
/* Experience (newest first)                                           */
/* ------------------------------------------------------------------ */

export const experience: { when: L; current?: boolean; title: L; desc: L }[] = [
  {
    when: { en: 'Sep 2026, now', id: 'Sep 2026, sekarang' },
    current: true,
    title: { en: 'SatuaGen-AI', id: 'SatuaGen-AI' },
    desc: {
      en: 'Building the IndoBART language model and the interface for a web app that writes Balinese folktales (satua).',
      id: 'Membangun model bahasa IndoBART dan antarmuka untuk aplikasi web yang menulis cerita rakyat Bali (satua).',
    },
  },
  {
    when: { en: '2026', id: '2026' },
    title: { en: 'Paper submitted to JNATIA', id: 'Paper dikirim ke JNATIA' },
    desc: {
      en: 'Time-Series Electricity Consumption Prediction using SARIMA, LightGBM, and LSTM. Lead author, under review.',
      id: 'Time-Series Electricity Consumption Prediction using SARIMA, LightGBM, and LSTM. Penulis utama, sedang direview.',
    },
  },
  {
    when: { en: '2026', id: '2026' },
    title: { en: 'Three national data science competitions', id: 'Tiga lomba data science nasional' },
    desc: {
      en: 'SATRIA DATA and Data Science Informatics Festival as team lead; Sebelas Maret Statistics Data Science as data scientist.',
      id: 'SATRIA DATA dan Data Science Informatics Festival sebagai ketua tim; Sebelas Maret Statistics Data Science sebagai data scientist.',
    },
  },
  {
    when: { en: '2025', id: '2025' },
    title: { en: 'Best Proposal Award, PKM-KC, PIONEER PKM 2025', id: 'Proposal Terbaik PKM-KC, PIONEER PKM 2025' },
    desc: { en: '[ISI: ide proposalnya dalam satu kalimat]', id: '[ISI: ide proposalnya dalam satu kalimat]' },
  },
  {
    when: { en: '2025', id: '2025' },
    title: { en: 'Student Innovation Centre, Universitas Udayana', id: 'Student Innovation Centre, Universitas Udayana' },
    desc: {
      en: 'Officer in the Talent and Competition division since January 2025. Led the Smart City division that mentored Udayana’s Gemastik teams.',
      id: 'Pengurus Divisi Talent and Competition sejak Januari 2025. Memimpin divisi Smart City yang mendampingi tim Gemastik Udayana.',
    },
  },
  {
    when: { en: '2024', id: '2024' },
    title: { en: 'Started Informatics at Universitas Udayana', id: 'Mulai kuliah Informatika di Universitas Udayana' },
    desc: { en: 'GPA 3.97 so far.', id: 'IPK sejauh ini 3.97.' },
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectDetail = {
  context: L;
  headline: L;
  problem: L;
  approach: L;
  result: L;
  takeaway: L;
  screenshot: string; // image path, or an [ISI] placeholder
  metric?: string;
  scores?: { model: string; score: string }[];
};

export type Project = {
  slug: string;
  title: string;
  track: Track;
  when: string;
  featured: boolean;
  line: L; // one sentence for cards
  result?: L; // short result for featured cards
  stack: string[];
  thumbnail: string; // image path, or an [ISI] placeholder
  detail?: ProjectDetail; // featured projects have a full case study
};

export const projects: Project[] = [
  {
    slug: 'waste-classification',
    title: 'Waste image classification',
    track: 'ml',
    when: 'Jul 2026',
    featured: true,
    line: {
      en: 'Cleaned a noisy image set, then fine-tuned a CNN to sort three kinds of waste.',
      id: 'Membersihkan dataset gambar, lalu fine-tune CNN untuk memilah tiga jenis sampah.',
    },
    result: { en: '0.972 macro-F1, SATRIA DATA', id: 'Macro-F1 0.972, SATRIA DATA' },
    stack: ['Python', 'EfficientNetB3', 'MobileNet', 'MD5', 'pHash'],
    thumbnail: '[ISI: gambar sampah sebelum/sesudah dibersihkan]',
    detail: {
      context: { en: 'SATRIA DATA national competition. Team lead and data scientist.', id: 'Lomba nasional SATRIA DATA. Ketua tim dan data scientist.' },
      headline: { en: 'Cleaning the data mattered as much as picking the model.', id: 'Membersihkan data sama pentingnya dengan memilih model.' },
      problem: {
        en: 'The dataset had corrupted files and duplicates. Duplicates that end up in both training and validation make a model look better than it is.',
        id: 'Dataset berisi file rusak dan duplikat. Duplikat yang masuk ke data latih dan validasi sekaligus membuat model terlihat lebih bagus dari aslinya.',
      },
      approach: {
        en: 'Removed corrupted files, exact duplicates (MD5) and near-duplicates (perceptual hash), then fine-tuned and compared MobileNet and EfficientNetB3.',
        id: 'Membuang file rusak, duplikat persis (MD5), dan hampir-duplikat (perceptual hash), lalu fine-tune dan membandingkan MobileNet dan EfficientNetB3.',
      },
      result: { en: '0.972 validation macro-F1 with EfficientNetB3.', id: 'Macro-F1 validasi 0.972 dengan EfficientNetB3.' },
      takeaway: { en: '[ISI: berapa gambar yang dibuang, dan apa pelajarannya]', id: '[ISI: berapa gambar yang dibuang, dan apa pelajarannya]' },
      screenshot: '[ISI: contoh gambar rusak/duplikat di samping gambar bersih]',
      metric: 'Macro-F1',
      scores: [
        { model: 'MobileNet', score: '[ISI]' },
        { model: 'EfficientNetB3', score: '0.972' },
      ],
    },
  },
  {
    slug: 'tempe-iris',
    title: 'Tempe Iris',
    track: 'be',
    when: 'May–Jun 2026',
    featured: true,
    line: {
      en: 'Inventory loan system for FMIPA with email confirmations and PDF receipts.',
      id: 'Sistem peminjaman inventaris FMIPA dengan konfirmasi email dan bukti PDF.',
    },
    result: { en: 'SRS, DFD and ERD before code', id: 'SRS, DFD, dan ERD sebelum kode' },
    stack: ['Laravel', 'MySQL', 'Mailtrap', 'Dompdf'],
    thumbnail: '[ISI: screenshot halaman peminjaman]',
    detail: {
      context: { en: 'Inventory loan system for FMIPA Udayana. Back-end developer.', id: 'Sistem peminjaman inventaris FMIPA Udayana. Back-end developer.' },
      headline: { en: 'Wrote the SRS, DFD and ERD before the first line of code.', id: 'Menulis SRS, DFD, dan ERD sebelum baris kode pertama.' },
      problem: {
        en: 'The faculty needed to track who borrows which equipment and when it comes back. [ISI: sebelumnya pakai apa?]',
        id: 'Fakultas perlu mencatat siapa meminjam alat apa dan kapan dikembalikan. [ISI: sebelumnya pakai apa?]',
      },
      approach: {
        en: 'Built the loan and return logic in Laravel and MySQL, sent confirmations by email (Mailtrap) and generated PDF receipts (Dompdf).',
        id: 'Membangun logika pinjam dan kembali dengan Laravel dan MySQL, mengirim konfirmasi lewat email (Mailtrap), dan membuat bukti pinjam PDF (Dompdf).',
      },
      result: { en: '[ISI: dipakai siapa, dan statusnya sekarang]', id: '[ISI: dipakai siapa, dan statusnya sekarang]' },
      takeaway: { en: '[ISI: bagian logika yang paling susah dan solusinya]', id: '[ISI: bagian logika yang paling susah dan solusinya]' },
      screenshot: '[ISI: screenshot halaman peminjaman dan bukti PDF]',
    },
  },
  {
    slug: 'gamelan-classifier',
    title: 'Balinese gamelan classifier',
    track: 'ml',
    when: 'Jun 2026',
    featured: true,
    line: { en: 'Recognizes six Balinese gamelan instruments from audio.', id: 'Mengenali enam instrumen gamelan Bali dari audio.' },
    result: { en: '96% accuracy', id: 'Akurasi 96%' },
    stack: ['Python', 'KNN', 'SVM', 'LSTM'],
    thumbnail: '[ISI: spektrogram atau confusion matrix]',
    detail: {
      context: { en: 'Audio classification. ML engineer and data scientist.', id: 'Klasifikasi audio. ML engineer dan data scientist.' },
      headline: {
        en: 'Six Balinese instruments recognized from audio, with classical ML tested against an LSTM.',
        id: 'Enam instrumen Bali dikenali dari audio, dengan ML klasik diuji melawan LSTM.',
      },
      problem: {
        en: 'Sort recordings into saron barong, demung, peking, bonang, slenthem and kendhang.',
        id: 'Memilah rekaman ke saron barong, demung, peking, bonang, slenthem, dan kendhang.',
      },
      approach: {
        en: 'Ran the same task with KNN, SVM and an LSTM, compared them, then tuned the final architecture.',
        id: 'Menjalankan tugas yang sama dengan KNN, SVM, dan LSTM, membandingkannya, lalu menyetel arsitektur akhir.',
      },
      result: { en: '96% accuracy on the final system.', id: 'Akurasi 96% pada sistem akhir.' },
      takeaway: { en: '[ISI: model mana yang menang, dan kenapa menurutmu]', id: '[ISI: model mana yang menang, dan kenapa menurutmu]' },
      screenshot: '[ISI: spektrogram tiap instrumen atau confusion matrix]',
      metric: 'Accuracy',
      scores: [
        { model: 'KNN', score: '[ISI]' },
        { model: 'SVM', score: '[ISI]' },
        { model: 'LSTM', score: '[ISI]' },
        { model: 'Final', score: '96%' },
      ],
    },
  },
  {
    slug: 'psycholens-ai',
    title: 'PsychoLens AI',
    track: 'ml',
    when: 'May 2026',
    featured: false,
    line: {
      en: 'IndoBERT model that sorts emotions in social-media transcripts into 8 classes. Team lead.',
      id: 'Model IndoBERT yang memilah emosi pada transkrip media sosial ke 8 kelas. Ketua tim.',
    },
    stack: ['IndoBERT', 'Transformers'],
    thumbnail: '',
  },
  {
    slug: 'orinimo-store',
    title: 'Orinimo Store',
    track: 'be',
    when: 'Mar–Aug 2026',
    featured: false,
    line: { en: 'Laravel store with password reset, WhatsApp OTP and PDF/Excel invoices.', id: 'Toko Laravel dengan reset password, OTP WhatsApp, dan invoice PDF/Excel.' },
    stack: ['Laravel', 'Fonte WhatsApp', 'PDF/Excel export'],
    thumbnail: '',
  },
  {
    slug: 'sic-website',
    title: 'SIC website',
    track: 'be',
    when: 'Jan–Jun 2025',
    featured: false,
    line: { en: 'Normalized MySQL schema and a CRUD REST API in Express.js.', id: 'Skema MySQL ternormalisasi dan REST API CRUD dengan Express.js.' },
    stack: ['Express.js', 'MySQL'],
    thumbnail: '',
  },
  {
    slug: 'umkm-prediction',
    title: 'UMKM success prediction',
    track: 'ml',
    when: 'Jun 2026',
    featured: false,
    line: { en: 'AdaBoost, random forest and SVM across four sampling scenarios. Team lead.', id: 'AdaBoost, random forest, dan SVM di empat skenario sampling. Ketua tim.' },
    stack: ['AdaBoost', 'Random forest', 'SVM'],
    thumbnail: '',
  },
  {
    slug: 'water-level-forecasting',
    title: 'Water level forecasting',
    track: 'ml',
    when: 'Jul 2026',
    featured: false,
    line: { en: 'Cleaned irregular sensor data and built lag and rolling-window features.', id: 'Membersihkan data sensor yang tidak teratur dan membuat fitur lag dan rolling window.' },
    stack: ['Python', 'Time series'],
    thumbnail: '',
  },
];

/* ------------------------------------------------------------------ */
/* Skills (each skill lists where it was used)                         */
/* ------------------------------------------------------------------ */

export const skillGroups: { name: L; accent: 'navy' | 'gold' | 'muted'; items: { name: string; usedIn: L }[] }[] = [
  {
    name: { en: 'Back-end', id: 'Back-end' },
    accent: 'navy',
    items: [
      { name: 'Laravel', usedIn: { en: 'Tempe Iris, Orinimo Store', id: 'Tempe Iris, Orinimo Store' } },
      { name: 'Express.js, Node.js', usedIn: { en: 'SIC website', id: 'Website SIC' } },
      { name: 'MySQL, schema design', usedIn: { en: 'Tempe Iris, SIC website', id: 'Tempe Iris, website SIC' } },
      { name: 'REST APIs', usedIn: { en: 'SIC website', id: 'Website SIC' } },
      { name: 'Auth, OTP, email', usedIn: { en: 'Orinimo Store, Tempe Iris', id: 'Orinimo Store, Tempe Iris' } },
      { name: 'PDF and Excel reports', usedIn: { en: 'Tempe Iris, Orinimo Store', id: 'Tempe Iris, Orinimo Store' } },
      { name: 'SRS, DFD, ERD', usedIn: { en: 'Tempe Iris', id: 'Tempe Iris' } },
    ],
  },
  {
    name: { en: 'Machine learning and data', id: 'Machine learning dan data' },
    accent: 'gold',
    items: [
      { name: 'Python', usedIn: { en: 'All ML projects', id: 'Semua proyek ML' } },
      { name: 'IndoBERT, NLP', usedIn: { en: 'PsychoLens AI', id: 'PsychoLens AI' } },
      { name: 'CNN (EfficientNet, MobileNet)', usedIn: { en: 'Waste image classification', id: 'Klasifikasi gambar sampah' } },
      { name: 'LSTM', usedIn: { en: 'Gamelan classifier, electricity paper', id: 'Klasifikasi gamelan, paper listrik' } },
      { name: 'KNN, SVM, random forest, AdaBoost', usedIn: { en: 'Gamelan classifier, UMKM prediction', id: 'Klasifikasi gamelan, prediksi UMKM' } },
      { name: 'SARIMA, LightGBM, time series', usedIn: { en: 'Electricity paper, water level forecasting', id: 'Paper listrik, peramalan tinggi air' } },
      { name: 'Data cleaning (MD5, pHash)', usedIn: { en: 'Waste image classification', id: 'Klasifikasi gambar sampah' } },
    ],
  },
  {
    name: { en: 'Front-end and tools', id: 'Front-end dan tools' },
    accent: 'muted',
    items: [
      { name: 'React, Next.js, Tailwind CSS', usedIn: { en: 'This portfolio', id: 'Portofolio ini' } },
      { name: 'Git, GitHub', usedIn: { en: '[ISI: dipakai di proyek mana?]', id: '[ISI: dipakai di proyek mana?]' } },
      { name: 'Docker, CasaOS', usedIn: { en: '[ISI: dipakai di proyek mana?]', id: '[ISI: dipakai di proyek mana?]' } },
      { name: 'Postman', usedIn: { en: '[ISI: dipakai di proyek mana?]', id: '[ISI: dipakai di proyek mana?]' } },
      { name: 'Linux (Ubuntu)', usedIn: { en: '[ISI: dipakai untuk apa?]', id: '[ISI: dipakai untuk apa?]' } },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Interface strings                                                   */
/* ------------------------------------------------------------------ */

export const ui = {
  langToggle: {
    label: { en: 'Language', id: 'Bahasa' },
    en: { short: 'EN', name: 'English' },
    id: { short: 'ID', name: 'Bahasa Indonesia' },
  },
  navLabel: { en: 'Main', id: 'Utama' },
  nav: {
    experience: { en: 'Experience', id: 'Pengalaman' },
    projects: { en: 'Projects', id: 'Proyek' },
    skills: { en: 'Skills', id: 'Skill' },
    contact: { en: 'Contact', id: 'Kontak' },
  },
  emailMe: { en: 'Email me', id: 'Kirim email' },
  downloadCv: { en: 'Download CV', id: 'Unduh CV' },
  whatsappCta: { en: 'Chat on WhatsApp', id: 'Chat lewat WhatsApp' },
  cvFormat: { en: 'PDF', id: 'PDF' },
  card: {
    label: { en: 'Student card for Philip Tomasui', id: 'Kartu mahasiswa Philip Tomasui' },
    focus: { en: 'Focus', id: 'Fokus' },
    focusValue: { en: 'Back-end, ML', id: 'Back-end, ML' },
    base: { en: 'Based in', id: 'Domisili' },
    status: { en: 'Status', id: 'Status' },
    statusValue: { en: 'Open to internship', id: 'Terbuka untuk magang' },
    gpa: { en: 'GPA', id: 'IPK' },
    photoAlt: {
      en: 'Philip Tomasui in a navy Universitas Udayana blazer',
      id: 'Philip Tomasui memakai jas almamater Universitas Udayana berwarna navy',
    },
    footer: { en: 'Student', id: 'Mahasiswa' },
  },
  experienceTitle: { en: 'Experience', id: 'Pengalaman' },
  projectsTitle: { en: 'Projects', id: 'Proyek' },
  filter: {
    label: { en: 'Filter projects', id: 'Saring proyek' },
    all: { en: 'All', id: 'Semua' },
    be: { en: 'Back-end', id: 'Back-end' },
    ml: { en: 'Machine learning', id: 'Machine learning' },
  },
  moreProjects: { en: 'More projects', id: 'Proyek lainnya' },
  prev: { en: 'Previous projects', id: 'Proyek sebelumnya' },
  next: { en: 'Next projects', id: 'Proyek berikutnya' },
  seeDetails: { en: 'See details', id: 'Lihat detail' },
  skillsTitle: { en: 'Skills', id: 'Skill' },
  skillsSub: { en: 'Each skill is listed with the projects where I actually used it.', id: 'Setiap skill ditulis bersama proyek tempat saya benar-benar memakainya.' },
  usedIn: { en: 'Used in:', id: 'Dipakai di:' },
  contactTitle: { en: 'Hiring a back-end or ML intern? Let’s talk.', id: 'Mencari intern back-end atau ML? Ayo ngobrol.' },
  contactBody: {
    en: 'Email is the fastest way to reach me. Tell me the role and the team, and I’ll reply with anything else you need.',
    id: 'Email adalah cara tercepat. Sebutkan posisi dan timnya, nanti saya balas dengan apa pun yang kamu butuhkan.',
  },
  footer: {
    localTime: { en: 'Local time in Bali:', id: 'Waktu lokal di Bali:' },
    onThisPage: { en: 'On this page', id: 'Di halaman ini' },
    reachMe: { en: 'Reach me', id: 'Hubungi saya' },
    language: { en: 'Language', id: 'Bahasa' },
    backToTop: { en: 'Back to top', id: 'Kembali ke atas' },
    timeZoneLabel: { en: 'WITA', id: 'WITA' },
    built: { en: 'Built with Next.js and Tailwind CSS. Updated November 2026.', id: 'Dibuat dengan Next.js dan Tailwind CSS. Diperbarui November 2026.' },
  },
  detail: {
    back: { en: 'All projects', id: 'Semua proyek' },
    problem: { en: 'Problem', id: 'Masalah' },
    approach: { en: 'Approach', id: 'Pendekatan' },
    result: { en: 'Result', id: 'Hasil' },
    takeaway: { en: 'Takeaway', id: 'Pelajaran' },
    compare: { en: 'Model comparison', id: 'Perbandingan model' },
    model: { en: 'Model', id: 'Model' },
    stack: { en: 'Stack', id: 'Teknologi' },
    prevProject: { en: 'Previous project', id: 'Proyek sebelumnya' },
    nextProject: { en: 'Next project', id: 'Proyek berikutnya' },
    pagerLabel: { en: 'Other projects', id: 'Proyek lain' },
    noStory: { en: '[ISI: ceritakan proyek ini]', id: '[ISI: ceritakan proyek ini]' },
  },
} satisfies Record<string, unknown>;
