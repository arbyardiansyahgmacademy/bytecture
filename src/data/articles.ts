export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  modifiedDate?: string;
  author: string;
  authorRole: string;
  readingTime: string;
  excerpt: string;
  image: string;
  alt: string;
  heroCaption: string;
  summaryPoints: string[];
  contentHtml: string;
  faqs: ArticleFAQ[];
}

export const articles: ArticleItem[] = [
  {
    slug: "panduan-memilih-arsitek",
    title: "Panduan Memilih Jasa Arsitek Online di Indonesia: Cermat, Aman, dan Tepat Kebutuhan",
    category: "PANDUAN LENGKAP • JASA ARSITEK 2026",
    publishDate: "2026-10-12",
    modifiedDate: "2026-10-28",
    author: "Arby Ardiansyah",
    authorRole: "LEAD ARCHITECT & FOUNDER • IAI",
    readingTime: "6 min baca",
    excerpt: "Panduan komprehensif memilih jasa arsitek online di Indonesia 2026. Mulai dari checklist portofolio, kejelasan gambar kerja teknis, tahapan komunikasi via WhatsApp, hingga kiat efisiensi anggaran.",
    image: "/images/blog/panduan-memilih-arsitek.webp",
    alt: "Meja kerja arsitek dengan sketsa denah rumah, penggaris ukur, dan laptop untuk konsultasi online",
    heroCaption: "Kolaborasi arsitektur berbasis digital memungkinkan pemilik lahan di seluruh kota di Indonesia merancang hunian idaman dengan presisi teknis tanpa batasan jarak.",
    summaryPoints: [
      "Mengapa Arsitek Online Solusi Terbaik: Menghubungkan keahlian perancang profesional dengan pemilik lahan di seluruh Indonesia tanpa biaya survei fisik yang membengkak.",
      "Cek Kelayakan Deliverables: Pastikan paket mencakup gambar kerja arsitektur, rencana MEP (listrik & pipa air), serta spesifikasi material, bukan hanya render 3D fasad semata.",
      "Alur Komunikasi Digital Terarah: Konsultasi intensif via WhatsApp dan virtual meeting menjamin setiap revisi tercatat rapi sebelum masuk fase konstruksi.",
      "Efisiensi Biaya Signifikan: Perencanaan denah yang matang terbukti menghemat hingga 15-25% dari risiko salah bangun dan pemborosan material tukang di lapangan."
    ],
    contentHtml: `
      <h2 id="mengapa-arsitek-online">1. Mengapa Layanan Arsitek Online Semakin Jadi Pilihan Utama di Indonesia?</h2>
      
      <!-- ANSWER-FIRST CALLOUT BOX -->
      <div class="answer-first-box callout-card-gold">
        <p class="text-slate-lead">
          <strong>Memilih jasa arsitek online yang tepat</strong> memberikan efisiensi biaya konsultasi hingga 40%, fleksibilitas diskusi via WhatsApp kapan saja, serta jaminan dokumen gambar kerja berstandar konstruksi nasional yang siap dieksekusi oleh kontraktor maupun tukang lokal di kota Anda.
        </p>
      </div>

      <p>Memasuki era pembangunan modern 2026, mobilitas dan akses internet berkecepatan tinggi telah mentransformasi cara masyarakat merancang rumah. Calon pemilik hunian di berbagai provinsi—dari Sumatera, Kalimantan, Sulawesi, hingga Papua—kini tidak lagi dibatasi oleh keterbatasan tenaga arsitek di daerah asalnya. Kolaborasi jarak jauh memungkinkan Anda memperoleh gubahan denah terbaik yang memaksimalkan sirkulasi udara dan cahaya alami tanpa perlu mengeluarkan ongkos akomodasi survei fisik yang mahal.</p>

      <p>Banyak kegagalan konstruksi terjadi bukan karena mandor yang tidak bisa bekerja, melainkan karena ketiadaan panduan gambar kerja yang jelas. Tanpa perencanaan arsitek, kesalahan fatal seperti ruangan pengap tanpa ventilasi silang, tangga yang terlalu curam, atau struktur atap yang bocor kerap menelan puluhan juta rupiah untuk perbaikan. Jasa arsitek online hadir sebagai solusi pencegahan paling terjangkau sejak garis pertama ditarik.</p>

      <!-- BACA JUGA BOX 1 -->
      <div class="baca-juga-box">
        <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg></div>
        <div class="thumb">
          <img src="/images/blog/tahapan-desain-rumah.webp" alt="Tahapan Desain Rumah Bersama Arsitek" loading="lazy">
        </div>
        <div class="content">
          <div class="label">Alur Kerja Arsitektur</div>
          <h4><a href="/blog/tahapan-desain-rumah/">Tahapan Lengkap Proses Desain Rumah Bersama Arsitek dari Awal Hingga Serah Terima</a></h4>
          <p>Pelajari 4 fase penting dari pengumpulan data lahan hingga serah terima bundel dokumen teknis siap bangun.</p>
        </div>
      </div>

      <h2 id="checklist-memilih-arsitek">2. Empat Checklist Wajib Sebelum Memilih Studio Arsitek Daring</h2>
      <p>Agar proses kolaborasi berjalan aman dan membuahkan hasil memuaskan, perhatikan 4 kriteria utama berikut ini saat menyaring penyedia jasa desain:</p>

      <div class="article-steps-flow">
        <div class="step-card card-border-gold">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> A. Periksa Keaslian Portofolio & Karakter Desain</h3>
          <p>Cermati apakah portofolio yang ditampilkan mencerminkan pemahaman iklim tropis Indonesia—seperti tritisan atap yang memadai, bukaan jendela lebar, dan inner courtyard. Hindari memilih arsitek yang hanya mengandalkan render visual dramatis tanpa penjelasan fungsi ruang.</p>
          <div class="step-output">Kunci: Minta contoh portofolio dengan studi denah tata ruang 2D yang riil.</div>
        </div>

        <div class="step-card card-border-blue">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> B. Transparansi Deliverables Dokumen Teknis</h3>
          <p>Tanyakan secara spesifik: apakah paket mencakup gambar kerja MEP (rencana titik lampu, saklar, jalur pipa air bersih, dan septic tank)? Gambar teknis inilah yang menjadi nyawa proyek saat mandor memulai penggalian pondasi.</p>
          <div class="step-output">Kunci: Jangan hanya tergiur render 3D; pastikan dokumen teknis lengkap.</div>
        </div>

        <div class="step-card card-border-green">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> C. Saluran Komunikasi yang Terbuka & Responsif</h3>
          <p>Proses desain adalah dialog dua arah mengenai kenyamanan hidup keluarga Anda. Studio arsitek yang baik menyediakan formulir kuesioner kebutuhan terpadu dan saluran konsultasi WhatsApp yang tanggap mendengarkan masukan revisi.</p>
          <div class="step-output">Kunci: Komunikasi langsung dengan perancang tanpa perantara berbelit.</div>
        </div>

        <div class="step-card card-border-purple">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> D. Skema Pembayaran Bertahap Sesuai Progress</h3>
          <p>Pilihlah penyedia jasa yang menerapkan sistem pembayaran berjenjang (termin), misalnya uang muka saat konsep denah awal, termin kedua saat visualisasi 3D, dan pelunasan saat dokumen gambar kerja siap diserahkan.</p>
          <div class="step-output">Kunci: Transparansi kontrak kerja melindungi kedua belah pihak.</div>
        </div>
      </div>

      <!-- SUPPORTING IMAGE -->
      <figure class="article-support-image">
        <img
          src="/images/blog/support-denah-kerja.webp"
          alt="Gambar kerja teknis arsitektur dan denah berdimensi presisi"
          width="900"
          height="550"
          loading="lazy"
        >
        <figcaption>Ketelitian notasi ukuran dan pembagian zonasi ruang pada gambar kerja 2D merupakan syarat mutlak agar kontraktor tidak salah tafsir di lapangan.</figcaption>
      </figure>

      <h2 id="dokumen-yang-wajib-diterima">3. Daftar Dokumen Gambar Kerja yang Wajib Anda Terima</h2>
      <p>Sebelum menandatangani persetujuan kerja sama, pastikan Anda mendapatkan dokumen lengkap yang mencakup:</p>
      <ul>
        <li><strong>Gambar Arsitektur:</strong> Denah tata ruang berskala, tampak 4 sisi bangunan (depan, samping kanan-kiri, belakang), dan potongan melintang/membujur untuk mengecek elevasi plafon.</li>
        <li><strong>Gambar Rencana Denah Pola Lantai & Plafon:</strong> Acuan ukuran keramik/granit dan rangka drop ceiling pencahayaan tersembunyi.</li>
        <li><strong>Gambar Jadwal Pintu & Jendela:</strong> Dimensi kusen, jenis kaca, dan arah bukaan engsel.</li>
        <li><strong>Gambar Rencana Utilitas (MEP):</strong> Skema instalasi kelistrikan, penempatan saklar, jalur pipa sanitasi air kotor dan air bersih.</li>
        <li><strong>Buku Konsep Digital (PDF Resolusi Tinggi):</strong> Bundel portofolio visual 3D yang dapat dicetak dalam ukuran kertas A3 untuk acuan mandor di lokasi.</li>
      </ul>

      <!-- BACA JUGA BOX 2 -->
      <div class="baca-juga-box">
        <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg></div>
        <div class="thumb">
          <img src="/images/blog/estimasi-biaya-bangun.webp" alt="Panduan Menghitung Biaya Arsitek dan Bangun Rumah" loading="lazy">
        </div>
        <div class="content">
          <div class="label">Anggaran & Finansial</div>
          <h4><a href="/blog/estimasi-biaya-bangun/">Panduan Menghitung Estimasi Biaya Jasa Arsitek dan Anggaran Bangun Rumah Baru</a></h4>
          <p>Pelajari formula biaya per meter persegi vs persentase RAB serta strategi menyiapkan dana cadangan.</p>
        </div>
      </div>

      <h2 id="kesimpulan-panduan">4. Kesimpulan: Wujudkan Rumah Nyaman Tanpa Khawatir Salah Bangun</h2>
      <p>Membangun rumah adalah salah satu keputusan finansial dan emosional terbesar dalam hidup Anda. Menyerahkan perencanaannya pada jasa arsitek profesional yang berpengalaman bukanlah biaya tambahan, melainkan proteksi investasi agar setiap rupiah yang Anda keluarkan bermuara pada hunian yang sehat, indah, dan bernilai jual tinggi untuk puluhan tahun mendatang.</p>
    `,
    faqs: [
      {
        question: "Apakah hasil gambar arsitek online bisa dipahami mandor lokal?",
        answer: "Bisa, karena seluruh dokumen gambar kerja Bytecture disusun berdasarkan standar teknis konstruksi Indonesia dengan simbol baku, skala terukur, dan notasi ukuran lengkap dalam format siap cetak."
      },
      {
        question: "Bagaimana cara arsitek online menganalisis kondisi tanah saya?",
        answer: "Klien cukup mengirimkan sketsa ukuran batas tanah, foto atau video rekaman kondisi lingkungan sekitar dari berbagai arah, serta orientasi kompas mata angin untuk menghitung jatuhnya sinar matahari."
      },
      {
        question: "Berapa lama rata-rata waktu pengerjaan desain lengkap?",
        answer: "Untuk rumah tinggal standar 1-2 lantai, proses pengerjaan membutuhkan waktu 2 hingga 4 minggu kerja, bergantung pada luas bangunan dan kecepatan feedback diskusi revisi."
      }
    ]
  },
  {
    slug: "tahapan-desain-rumah",
    title: "Tahapan Lengkap Proses Desain Rumah Bersama Arsitek dari Awal Hingga Serah Terima",
    category: "PROSES KERJA • STANDAR ARSITEKTUR 2026",
    publishDate: "2026-10-18",
    modifiedDate: "2026-10-29",
    author: "Arby Ardiansyah",
    authorRole: "LEAD ARCHITECT & FOUNDER • IAI",
    readingTime: "6 min baca",
    excerpt: "Ketahui setiap fase perancangan arsitektur dari pengumpulan data lahan, pembuatan alternatif denah ruang, modeling 3D fasad eksterior & interior, hingga penyusunan bundel dokumen teknis konstruksi.",
    image: "/images/blog/tahapan-desain-rumah.webp",
    alt: "Diagram tahapan proses desain arsitektur rumah dari konsep sketsa denah hingga visual 3D",
    heroCaption: "Perencanaan bertahap yang sistematis menjamin visi hunian Anda diterjemahkan secara presisi ke dalam gambar teknis konstruksi.",
    summaryPoints: [
      "Fase 1 Data & Kebiasaan: Menggali ritme hidup keluarga, preferensi ruang, dan analisis orientasi matahari serta arah angin pada lahan.",
      "Fase 2 Eksplorasi Denah: Merumuskan zonasi ruang privat, publik, dan servis dengan fokus pada sirkulasi silang dan pencahayaan alami.",
      "Fase 3 Visualisasi 3D Fasad: Pemodelan fotorealistik yang memperlihatkan permainan bidang atap, material dinding, dan pencahayaan aksen.",
      "Fase 4 Dokumen Siap Bangun: Penyusunan gambar kerja arsitektur dan utilitas MEP yang menjadi pedoman mutlak kontraktor lapangan."
    ],
    contentHtml: `
      <h2 id="empat-fase-utama">1. Empat Fase Utama Perancangan Arsitektur yang Terstruktur</h2>
      
      <!-- ANSWER-FIRST CALLOUT BOX -->
      <div class="answer-first-box callout-card-gold">
        <p class="text-slate-lead">
          <strong>Proses desain arsitektur profesional</strong> dibagi menjadi 4 tahapan berurutan: (1) Pengumpulan Data Lahan & Brief Kebutuhan, (2) Pengembangan Alternatif Denah Tata Ruang, (3) Pemodelan Visualisasi 3D Fasad & Interior, dan (4) Finalisasi Dokumen Gambar Kerja Teknis Siap Konstruksi.
        </p>
      </div>

      <p>Sering kali calon pemilik rumah merasa khawatir bahwa menggunakan jasa arsitek akan memakan waktu berbelit-belit. Faktanya, studio arsitektur modern menerapkan alur kerja terstruktur yang dirancang agar setiap keputusan desain disepakati secara bertahap. Hal ini mencegah revisi mendasar di tengah proses dan menjamin hasil akhir sesuai ekspektasi fungsional maupun estetika.</p>

      <!-- TIMELINE CARDS -->
      <div class="article-steps-flow">
        <div class="step-card card-border-gold">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Fase 1: Briefing & Analisis Karakteristik Tapak</h3>
          <p>Pada tahap ini, arsitek membedah kebutuhan riil keluarga Anda: berapa jumlah kamar tidur, apakah ada anggota keluarga lansia yang memerlukan akses tanpa tangga, serta kebiasaan memasak di dapur bersih atau dapur kotor. Orientasi lahan dipelajari untuk memposisikan bukaan jendela agar terhindar dari panas terik barat.</p>
          <div class="step-output">Output: Lembar kuesioner kebutuhan ruang dan arahan moodboard desain.</div>
        </div>

        <div class="step-card card-border-blue">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> Fase 2: Skematik Layout Denah Tata Ruang 2D</h3>
          <p>Arsitek menyajikan alternatif susunan denah lengkap dengan ukuran ruang, jalur sirkulasi orang, dan peletakan perabot. Ini adalah fase paling krusial untuk revisi karena perubahan denah di atas kertas jauh lebih mudah dan tanpa biaya dibandingkan membongkar dinding bata yang sudah berdiri.</p>
          <div class="step-output">Output: Gambar denah 2D berdimensi dan denah penataan furniture.</div>
        </div>

        <div class="step-card card-border-green">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> Fase 3: Visualisasi 3D Fasad Eksterior & Suasana Ruang</h3>
          <p>Setelah denah disetujui, massa bangunan diangkat ke dalam visualisasi 3D fotorealistik. Anda dapat melihat secara gamblang perpaduan material finishing—seperti roster beton, conwood, marmer, kaca tempered, dan kanopi kantilever—beserta pencahayaan dramatis saat senja.</p>
          <div class="step-output">Output: Render 3D eksterior 4 sudut pandang dan suasana interior utama.</div>
        </div>

        <div class="step-card card-border-purple">
          <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Fase 4: Penyusunan Dokumen Gambar Kerja & MEP</h3>
          <p>Semua gagasan estetika diterjemahkan ke dalam bahasa gambar kerja konstruksi. Mulai dari detail sambungan pembesian, rencana sanitasi air kotor dan pembuangan hujan, hingga titik stop kontak listrik yang menjadi pegangan kontraktor.</p>
          <div class="step-output">Output: Master PDF gambar kerja ukuran A3 siap cetak untuk lapangan.</div>
        </div>
      </div>

      <!-- SUPPORTING IMAGE -->
      <figure class="article-support-image">
        <img
          src="/images/blog/support-3d-render.webp"
          alt="Visualisasi 3D fasad rumah modern tropis sudut pandang senja"
          width="900"
          height="550"
          loading="lazy"
        >
        <figcaption>Visualisasi 3D beresolusi tinggi memberikan kepastian visual sebelum semen dan bata pertama dibeli, mengeliminasi keraguan estetika pemilik rumah.</figcaption>
      </figure>

      <h2 id="mengapa-tahapan-ini-penting">2. Mengapa Disiplin Mengikuti Tahapan Desain Menghemat Biaya?</h2>
      <p>Banyak pemilik rumah yang tergoda ingin langsung melihat wujud 3D fasad tanpa mematangkan denah terlebih dahulu. Pendekatan ini sering kali berujung pada kekecewaan karena fasad yang indah belum tentu menaungi fungsi ruang yang nyaman di dalamnya. Dengan mengunci denah ruang terlebih dahulu di Fase 2, arsitek dapat merancang fasad yang fungsional sekaligus artistik.</p>
    `,
    faqs: [
      {
        question: "Apakah saya bisa mengajukan revisi pada setiap fase?",
        answer: "Ya, Bytecture menyediakan putaran revisi terarah pada fase denah 2D dan model 3D sehingga Anda benar-benar puas sebelum dokumen kerja konstruksi difinalisasi."
      },
      {
        question: "Apakah format file gambar kerja siap dicetak langsung oleh kontraktor?",
        answer: "Ya, berkas diserahkan dalam bentuk bundel dokumen PDF resolusi tinggi berskala terukur (standar ukuran kertas cetak A3) yang lazim dipakai mandor dan kontraktor proyek di seluruh Indonesia."
      }
    ]
  },
  {
    slug: "estimasi-biaya-bangun",
    title: "Panduan Menghitung Estimasi Biaya Jasa Arsitek dan Anggaran Bangun Rumah Baru",
    category: "ANGGARAN & FINANSIAL • PANDUAN 2026",
    publishDate: "2026-10-24",
    modifiedDate: "2026-10-30",
    author: "Arby Ardiansyah",
    authorRole: "LEAD ARCHITECT & FOUNDER • IAI",
    readingTime: "5 min baca",
    excerpt: "Pahami metode perhitungan biaya jasa arsitek (tarif per meter persegi vs persentase RAB) serta cara mempersiapkan cadangan dana konstruksi yang realistis dan bebas boncos.",
    image: "/images/blog/estimasi-biaya-bangun.webp",
    alt: "Kalkulator, sketsa gambar bangunan arsitek, dan dokumen anggaran biaya pembangunan rumah",
    heroCaption: "Perhitungan biaya yang cermat sejak fase perencanaan arsitektur menghindarkan proyek hunian Anda dari pembengkakan dana di tengah konstruksi.",
    summaryPoints: [
      "Metode Tarif Transparan: Memahami perbedaan skema tarif per meter persegi (m²) yang lebih pasti dibandingkan persentase estimasi anggaran.",
      "Nilai Tambah Investasi Desain: Mengalokasikan 2-5% anggaran untuk gambar teknis terbukti menghemat puluhan juta rupiah dari biaya bongkar-pasang tukang.",
      "Komposisi Alokasi Finansial 85-10-5: Pembagian pos modal konstruksi, dana darurat tak terduga (contingency), dan biaya perancangan arsitektur.",
      "Kiat Mencegah Pembengkakan Biaya: Kunci spesifikasi material baku di awal sebelum kontrak borongan dengan mandor ditandatangani."
    ],
    contentHtml: `
      <h2 id="skema-tarif-arsitek">1. Memahami Skema Tarif Jasa Arsitek di Indonesia</h2>
      
      <!-- ANSWER-FIRST CALLOUT BOX -->
      <div class="answer-first-box callout-card-gold">
        <p class="text-slate-lead">
          <strong>Di Indonesia, biaya jasa arsitek online</strong> umumnya dihitung dengan metode tarif per meter persegi (m²) luas lantai bangunan (mulai dari Rp 35.000 / m² hingga Rp 65.000 / m² untuk paket lengkap), menjadikannya sangat transparan dan dapat diprediksi tanpa kekhawatiran kenaikan tarif tak beralasan.
        </p>
      </div>

      <p>Salah satu keraguan terbesar calon pemilik rumah saat hendak berkonsultasi dengan arsitek adalah kekhawatiran bahwa biayanya sangat mahal dan tidak terjangkau. Melalui model studio arsitek online seperti Bytecture, sistem penentuan biaya dibuat sangat transparan berdasarkan luas lantai bangunan yang direncanakan.</p>

      <!-- CONTOH SIMULASI BOX -->
      <div class="step-card card-border-gold" style="margin: 24px 0;">
        <h3 style="margin-bottom: 8px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg> Simulasi Perhitungan Biaya Desain Lengkap</h3>
        <p style="margin-bottom: 10px; color: var(--color-text-secondary);">
          Misalkan Anda berencana membangun rumah tinggal 2 lantai dengan total luas lantai bangunan 160 m² menggunakan Paket Desain Lengkap & Gambar Kerja (Rp 65.000 / m²):
        </p>
        <div style="background: rgba(200, 155, 107, 0.12); border-left: 4px solid var(--color-accent); padding: 14px 18px; border-radius: 6px; font-weight: 700; color: var(--color-text-primary);">
          Total Biaya Desain = 160 m² &times; Rp 65.000 = Rp 10.400.000
        </div>
        <p style="margin-top: 10px; font-size: 0.88rem; color: var(--color-text-muted);">
          Dengan investasi sekitar Rp 10,4 juta, Anda telah memegang bundel dokumen gambar arsitektur lengkap, visualisasi 3D, rencana MEP, dan panduan material siap tender.
        </p>
      </div>

      <h2 id="alokasi-anggaran-aman">2. Rumus Alokasi Anggaran Pembangunan yang Aman (Aturan 85-10-5)</h2>
      <p>Banyak proyek rumah mandek di tengah jalan karena seluruh tabungan dihabiskan untuk struktur tanpa menyiapkan dana cadangan. Terapkan prinsip alokasi dana berikut:</p>

      <ul>
        <li><strong>85% — Biaya Konstruksi Utama:</strong> Pengadaan material pondasi, dinding, lantai, atap, serta pembayaran upah borongan atau harian tukang.</li>
        <li><strong>10% — Dana Cadangan (Contingency Fund):</strong> Disimpan khusus untuk mengantisipasi kenaikan harga material di pasaran atau kondisi tanah yang membutuhkan perkuatan khusus saat digali.</li>
        <li><strong>5% — Biaya Perencanaan & Dokumen Arsitektur:</strong> Investasi gambar kerja teknis, visualisasi 3D, dan pengurusan perizinan persetujuan bangunan (PBG).</li>
      </ul>

      <h2 id="kesimpulan-anggaran">3. Kesimpulan: Perencanaan Awal adalah Penghematan Terbesar</h2>
      <p>Mengeluarkan biaya beberapa persen di awal untuk jasa arsitek adalah langkah paling bijak untuk melindungi ratusan juta rupiah modal konstruksi Anda. Dengan gambar kerja yang presisi, Anda dapat membandingkan penawaran dari beberapa kontraktor secara objektif (*apple-to-apple*) dan terbebas dari jebakan pembengkakan biaya di kemudian hari.</p>
    `,
    faqs: [
      {
        question: "Apakah konsultasi dan estimasi biaya awal dikenakan biaya?",
        answer: "Tidak, konsultasi awal mengenai kebutuhan ruang dan estimasi perhitungan biaya desain di Bytecture adalah 100% gratis melalui chat WhatsApp resmi kami."
      },
      {
        question: "Kapan waktu terbaik untuk mulai menghubungi jasa arsitek?",
        answer: "Waktu terbaik adalah 1 hingga 3 bulan sebelum rencana peletakan batu pertama, agar proses diskusi denah, revisi fasad, dan penyusunan gambar kerja tidak terburu-buru."
      }
    ]
  }
];
