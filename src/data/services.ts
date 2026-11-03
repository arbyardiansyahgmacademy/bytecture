export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceWorkflowStage {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge: string;
  estimatedTime: string;
  priceRange: string;
  benefits: string[];
  scope: string[];
  deliverables: string[];
  workflow: ServiceWorkflowStage[];
  clientPreparation: string[];
  paymentStages: string[];
  faqs: ServiceFAQ[];
}

export const services: ServiceItem[] = [
  {
    slug: "desain-rumah",
    title: "Desain Rumah Tinggal Modern Tropis",
    subtitle: "Hunian Sehat, Estetis, dan Dirancang Presisi Sesuai Kebutuhan Keluarga",
    shortDescription: "Perencanaan arsitektur rumah tinggal baru mulai dari denah tata ruang optimal, visualisasi 3D fasad fotorealistik, hingga gambar kerja teknis pembangunan berstandar nasional.",
    fullDescription: "Layanan desain rumah tinggal Jasa Arsitek menghadirkan pendekatan arsitektur holistik yang memadukan kenyamanan iklim tropis Indonesia—seperti sirkulasi udara silang (cross-ventilation), bukaan cahaya alami melimpah, dan tritisan atap teduh—dengan kepribadian unik pemilik hunian. Setiap meter persegi dirancang efisien tanpa ruang mati, siap dieksekusi oleh kontraktor lokal di kota mana pun Anda berada.",
    image: "/images/services/desain-rumah.webp",
    badge: "Layanan Paling Populer",
    estimatedTime: "2 - 4 Minggu Kerja",
    priceRange: "Mulai Rp 35.000 - Rp 65.000 / m²",
    benefits: [
      "Optimalisasi ventilasi silang & pencahayaan alami untuk penghematan listrik jangka panjang",
      "Tata letak ruangan yang efisien tanpa sudut ruang terbuang (zero wasted space)",
      "Visualisasi render 3D eksterior & interior beresolusi tinggi 4K dari berbagai sudut pandang",
      "Dokumen gambar kerja DED lengkap yang mudah dipahami oleh mandor dan kontraktor lokal",
      "Perhitungan zonasi privasi keluarga dan sirkulasi tamu yang tertata nyaman",
      "Konsultasi daring intensif via WhatsApp langsung bersama arsitek perancang",
    ],
    scope: [
      "Konsultasi awal via WhatsApp & Video Call untuk identifikasi kebutuhan ruang dan estimasi bujet pembangunan",
      "Analisis data lahan (orientasi arah hadap matahari, arah angin dominan, kontur tanah, dan lingkungan sekitar)",
      "Penyusunan alternatif konsep denah tata ruang 2D beserta sirkulasi dan perletakan furniture",
      "Pemodelan visual 3D fasad eksterior dan pemilihan material finishing (kayu, batu alam, kaca, cat)",
      "Penyusunan gambar kerja arsitektur lengkap (denah berdimensi, tampak 4 sisi, dan potongan melintang/membujur)",
      "Rencana denah instalasi listrik (titik lampu, stop kontak, saklar) dan mekanikal elektrikal plumbing (MEP)",
    ],
    deliverables: [
      "Denah Tata Ruang 2D Lengkap Ukuran & Penataan Furniture (Skala 1:100)",
      "Gambar Tampak Bangunan 4 Arah (Tampak Depan, Belakang, Samping Kanan & Kiri)",
      "Gambar Potongan Arsitektur Melintang & Membujur (Elevasi Lantai & Struktur Plafon)",
      "Visualisasi 3D Fasad Eksterior Fotorealistik High-Res (Suasana Siang & Senja)",
      "Visualisasi 3D Ruang Utama Interior (Living Room, Dining, Master Bedroom)",
      "Rencana Denah Titik Lampu, Stop Kontak, Saklar, & Jalur Distribusi Listrik",
      "Rencana Instalasi Pipa Air Bersih, Air Kotor, Pipa Buangan AC & Septic Tank",
      "Daftar Rekomendasi Spesifikasi Material Acuan Pembangunan (Spektek Material)",
      "Bundel Master File Digital PDF A3 Beresolusi Tinggi Siap Cetak Mandor",
    ],
    workflow: [
      {
        step: "01",
        title: "Pengumpulan Data & Studi Lahan",
        duration: "Hari ke-1 s/d 3",
        description: "Pengisian formulir kuesioner kebutuhan ruang, pengiriman foto/sketsa ukuran lahan, dan diskusi awal via WhatsApp.",
      },
      {
        step: "02",
        title: "Eksplorasi Konsep & Layout Denah 2D",
        duration: "Hari ke-4 s/d 9",
        description: "Penyusunan alternatif denah tata ruang berdimensi, penentuan zonasi ruang privat/publik, dan sesi revisi denah.",
      },
      {
        step: "03",
        title: "Pemodelan 3D & Visualisasi Fasad",
        duration: "Hari ke-10 s/d 16",
        description: "Pembuatan model 3D fasad eksterior realistis, pemilihan warna cat, tekstur material, dan pencahayaan arsitektural.",
      },
      {
        step: "04",
        title: "Penyusunan Gambar Kerja DED & MEP",
        duration: "Hari ke-17 s/d 24",
        description: "Pembuatan detail gambar kerja teknis konstruksi, rencana instalasi listrik dan sanitasi perpipaan siap tender.",
      },
      {
        step: "05",
        title: "Quality Check & Serah Terima Final",
        duration: "Hari ke-25 s/d 28",
        description: "Pemeriksaan kelengkapan dokumen teknis dan penyerahan bundel master PDF resolusi tinggi siap cetak A3.",
      },
    ],
    clientPreparation: [
      "Ukuran dan bentuk lahan (sketsa ukuran kasar, sertifikat tanah, atau peta kavling)",
      "Foto atau video kondisi fisik lahan saat ini beserta jalan di depan dan tetangga sekitar",
      "Daftar kebutuhan ruang (jumlah kamar tidur, kamar mandi, musholla, garasi/carport, taman)",
      "Referensi gaya desain yang disukai (minimalis tropis, modern kontemporer, scandinavian, dll.)",
      "Estimasi alokasi anggaran pembangunan agar rancangan arsitektur tetap realistis dieksekusi",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Dimulai saat kick-off proyek dan pengolahan alternatif layout denah 2D",
      "Termin 2 (40%): Dibayarkan setelah denah 2D disetujui dan tim melanjutkan pemodelan visual render 3D",
      "Termin 3 (Pelunasan 30%): Dibayarkan saat seluruh bundel gambar kerja teknis DED & MEP siap diserahkan",
    ],
    faqs: [
      {
        question: "Apakah proses desain rumah bisa dilakukan 100% online tanpa tatap muka fisik?",
        answer: "Sangat bisa! Lebih dari 85% proyek Jasa Arsitek ditangani secara digital untuk klien di seluruh Indonesia (Sumatera, Kalimantan, Sulawesi, Bali, hingga Papua). Komunikasi intensif via WhatsApp dan Google Meet terbukti lebih fleksibel, cepat, dan menghemat biaya akomodasi survei.",
      },
      {
        question: "Bagaimana jika bentuk tanah saya tidak simetris, serong, atau berkontur miring?",
        answer: "Justru bentuk tanah yang unik menjadi peluang melahirkan arsitektur berkarakter. Tim arsitek kami berpengalaman merancang kavling 'kantong', bentuk trapesium, memanjang, maupun lahan berkontur dengan solusi split-level yang estetis dan efisien.",
      },
      {
        question: "Berapa kali saya berhak mengajukan revisi selama proses desain?",
        answer: "Kami memberikan garansi revisi tata letak denah pada fase konsep hingga Anda merasa nyaman dengan fungsinya, dilanjutkan dengan 2-3 putaran penyesuaian detail fasad pada tahap visual 3D.",
      },
      {
        question: "Apakah tukang atau mandor lokal di daerah saya bisa membaca gambar kerja dari Jasa Arsitek?",
        answer: "Pasti bisa. Seluruh gambar kerja kami disusun menggunakan notasi teknis standar arsitektur nasional Indonesia, lengkap dengan dimensi ukuran, elevasi tinggi lantai, keterangan material, dan skala yang jelas.",
      },
      {
        question: "Apakah Jasa Arsitek juga menyediakan layanan perhitungan Rencana Anggaran Biaya (RAB)?",
        answer: "Ya, perhitungan RAB detail berbasis estimasi volume material dan upah kerja setempat dapat ditambahkan dalam paket perancangan lengkap.",
      },
    ],
  },
  {
    slug: "bangunan-komersial",
    title: "Desain Bangunan Komersial & Villa",
    subtitle: "Arsitektur Bernilai Jual Tinggi untuk Bisnis, Hospitality, dan Sewa",
    shortDescription: "Perencanaan arsitektur kafe kekinian, ruko modern, villa sewa eksklusif, kantor representatif, dan ruang komersial yang mengutamakan daya tarik visual serta efisiensi sirkulasi bisnis.",
    fullDescription: "Bangunan komersial menuntut perpaduan tajam antara estetika fasad yang magnetik (Instagrammable, Iconic, & Memorable) dengan kelancaran sirkulasi operasional staf dan tamu. Jasa Arsitek merancang properti komersial Anda agar memiliki diferensiasi kuat dari kompetitor, memaksimalkan kapasitas sewa atau meja tanpa terasa padat, dan mempercepat tingkat pengembalian investasi (ROI).",
    image: "/images/services/bangunan-komersial.webp",
    badge: "Solusi Investasi & Bisnis",
    estimatedTime: "3 - 5 Minggu Kerja",
    priceRange: "Mulai Rp 45.000 - Rp 75.000 / m²",
    benefits: [
      "Desain fasad ikonik yang menjadi daya tarik magnetik dan spot foto bernilai promosi organik",
      "Pemisahan sirkulasi pengunjung dan servis staf yang tertata rapi tanpa saling mengganggu",
      "Optimalisasi kapasitas seating atau layout ruang usaha untuk memaksimalkan pendapatan harian",
      "Konsep fleksibel dan adaptif terhadap rencana ekspansi bisnis di masa depan",
      "Visualisasi render 3D suasana malam (night ambiance lighting) yang memukau calon investor",
      "Efisiensi pemilihan material komersial yang awet, tahan banting, dan rendah biaya perawatan",
    ],
    scope: [
      "Pembedahan identitas brand, karakter target konsumen, dan model bisnis yang Anda jalankan",
      "Perencanaan zonasi area publik, semi-privat, servis, kasir/resepsionis, dan gudang operasional",
      "Desain tata letak fasad komersial terpadu dengan signage branding dan titik landmark",
      "Visualisasi 3D fasad eksterior suasana siang dan malam hari dengan tata pencahayaan dramatis",
      "Penyusunan gambar denah layout tempat duduk, sirkulasi pelanggan, dan fasilitas pendukung",
      "Gambar teknis sanitasi untuk kebutuhan intensitas tinggi (toilet komersial, grease trap dapur)",
    ],
    deliverables: [
      "Digital Commercial Design Booklet Lengkap (Konsep Filosofi & Identitas Desain)",
      "Master Layout Zonasi Operasional & Seating Layout Berdimensi",
      "Visualisasi 3D Eksterior Fasad Komersial Siang & Malam Hari (Night Lighting)",
      "Visualisasi 3D Interior Area Publik & Titik Focal Point Brand",
      "Gambar Detail Arsitektur Fasad, Signage, & Kanopi Bangunan",
      "Rencana Titik Lampu Komersial (Ambient, Task, Accent/Spotlight)",
      "Rencana Jalur Pipa Sanitasi, Grease Trap Limbah Lemak, & Saluran Pembuangan",
      "Bundel Dokumen Teknis PDF A3 Siap Tender Kontraktor",
    ],
    workflow: [
      {
        step: "01",
        title: "Briefing Bisnis & Riset Pasar",
        duration: "Hari ke-1 s/d 4",
        description: "Diskusi mendalam mengenai target konsumen, kapasitas pengunjung harian, dan karakter brand yang ingin dibangun.",
      },
      {
        step: "02",
        title: "Zoning Operasional & Denah Alur Tamu",
        duration: "Hari ke-5 s/d 11",
        description: "Pemetaan alur pergerakan pengunjung, kasir, dapur servis, toilet, dan penataan kapasitas tempat duduk terbaik.",
      },
      {
        step: "03",
        title: "Fasad Ikonik & Visual 3D Komersial",
        duration: "Hari ke-12 s/d 20",
        description: "Pengembangan tampilan fasad yang menarik perhatian dari jalan raya, visualisasi 3D siang dan malam hari.",
      },
      {
        step: "04",
        title: "Detail Gambar Teknis & Sanitasi Bisnis",
        duration: "Hari ke-21 s/d 29",
        description: "Penyusunan gambar teknis instalasi listrik berdaya besar, pemipaan komersial, dan spesifikasi material tahan lama.",
      },
      {
        step: "05",
        title: "Finalisasi Master Dokumen Siap Bangun",
        duration: "Hari ke-30 s/d 35",
        description: "Review menyeluruh dokumen gambar kerja dan serah terima master file digital PDF A3 siap eksekusi proyek.",
      },
    ],
    clientPreparation: [
      "Konsep bisnis utama, target segmen pasar, dan rata-rata target kapasitas pengunjung harian",
      "Ukuran lahan atau denah bangunan eksisting (untuk proyek sewa ruko / peremajaan gedung)",
      "Kebutuhan fasilitas khusus (dapur basah, ruang bar kopi, ruang VIP, area smoking/outdoor, gudang)",
      "Moodboard atau referensi estetika kafe/villa/kantor yang menjadi benchmark impian Anda",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Kick-off proyek, bedah konsep bisnis & penyusunan zoning denah alur kerja",
      "Termin 2 (40%): Pengembangan fasad ikonik dan render visualisasi 3D komersial siang & malam",
      "Termin 3 (Pelunasan 30%): Serah terima bundel dokumen gambar kerja komersial lengkap siap tender",
    ],
    faqs: [
      {
        question: "Apakah Jasa Arsitek bisa mendesain renovasi ruko sewa standar menjadi kafe atau resto?",
        answer: "Tentu! Banyak klien kami menyewa ruko standar 2-3 lantai dan mempercayakan perubahan fasad serta interior kepada kami agar bertransformasi menjadi kafe atau resto modern tanpa harus membongkar struktur kolom beton utama.",
      },
      {
        question: "Apakah rancangan villa sewa memperhitungkan kemudahan operasional dan perawatan?",
        answer: "Sangat kami prioritaskan. Desain villa Jasa Arsitek selalu mengedepankan material lokal tropis yang tahan cuaca lembap, ventilasi alami untuk menekan konsumsi AC, dan kemudahan akses staf saat proses room cleaning.",
      },
      {
        question: "Apakah desain komersial sudah memperhitungkan sistem pembuangan limbah resto/kafe?",
        answer: "Ya, kami melengkapi rencana MEP dengan jalur pipa air kotor dan penempatan grease trap (penjebak lemak) standar hygiene restoran.",
      },
    ],
  },
  {
    slug: "desain-interior",
    title: "Desain Interior & Tata Ruang",
    subtitle: "Harmoni Ruang Dalam yang Ergonomis, Hangat, dan Tertata Rapi",
    shortDescription: "Perancangan tata letak interior, skema pencahayaan hangat, material finishes, dan furniture built-in untuk ruang keluarga, kamar tidur utama, dapur bersih, dan area kerja.",
    fullDescription: "Interior yang baik bukan sekadar dekorasi kosmetik, melainkan bagaimana ruang berinteraksi dengan ritme kenyamanan hidup penghuninya. Layanan desain interior Jasa Arsitek berfokus pada keseimbangan pencahayaan multi-layer (ambient, task, accent), pemilihan tekstur material hangat (kayu, linen, batu alam), serta built-in storage cerdas yang membuat rumah selalu terlihat lega, rapi, dan mudah dibersihkan.",
    image: "/images/services/desain-interior.webp",
    badge: "Ergonomis & Menenangkan",
    estimatedTime: "2 - 3 Minggu Kerja",
    priceRange: "Mulai Rp 30.000 - Rp 50.000 / m²",
    benefits: [
      "Palet warna dan tekstur material yang harmonis, menenangkan pikiran setelah seharian beraktivitas",
      "Skema pencahayaan multi-layer dengan warm lighting yang menciptakan atmosfer hotel bintang lima",
      "Solusi lemari built-in storage tersembunyi untuk memaksimalkan daya tampung barang keluarga",
      "Desain ergonomis pada dapur dan area kerja yang menyesuaikan antropometri tubuh pemakai",
      "Visualisasi render 3D interior sudut pandang mata manusia (human eye-level) beresolusi tinggi",
      "Rekomendasi kode warna cat resmi dan merk material yang mudah dibeli di toko bangunan terdekat",
    ],
    scope: [
      "Konsultasi mendalam mengenai gaya hidup keluarga, hobi, dan suasana interior yang diharapkan",
      "Penyusunan moodboard konsep material, tone warna, dan pencahayaan",
      "Rancangan denah tata letak perabot (furniture layout plan) lengkap dengan alur sirkulasi",
      "Visualisasi render 3D interior photorealistic dari beberapa sudut pandang utama",
      "Gambar detail rencana perletakan furniture custom (kitchen set, backdrop TV, wardrobe)",
      "Daftar spesifikasi material finishes (merk HPL, marmer/granit, jenis kain, dan kode cat dinding)",
    ],
    deliverables: [
      "Moodboard Konsep Desain Interior & Tone Warna",
      "Denah Layout Penataan Furniture 2D Berskala Lengkap",
      "Visualisasi 3D Interior High-Res dari Berbagai Sudut Ruang Utama",
      "Gambar Rencana Titik Lampu & Saklar Interior (Lighting Plan)",
      "Gambar Rencana Pola Plafon & Drop Ceiling dengan Indirect Light (Warm White)",
      "Gambar Detail Sketsa Furniture Custom (Kitchen Set, Backdrop TV, Lemari)",
      "Daftar Rekomendasi Kode Warna Cat & Material Finishes Resmi",
      "Dokumen Digital PDF A3 Panduan Eksekusi Interior",
    ],
    workflow: [
      {
        step: "01",
        title: "Eksplorasi Karakter & Kebutuhan Ruang",
        duration: "Hari ke-1 s/d 3",
        description: "Diskusi kebutuhan storage, aktivitas harian keluarga, dan penentuan preferensi gaya interior (Japandi, Modern Luxury, Minimalis).",
      },
      {
        step: "02",
        title: "Moodboard Konsep & Denah Furniture 2D",
        duration: "Hari ke-4 s/d 8",
        description: "Penyusunan tata letak furniture dan pemilihan palet warna serta tekstur material acuan.",
      },
      {
        step: "03",
        title: "Pemodelan Visual 3D Interior",
        duration: "Hari ke-9 s/d 14",
        description: "Rendering 3D visual ruang dalam dengan pencahayaan realistis, tekstur kain, kayu, dan elemen dekoratif pendukung.",
      },
      {
        step: "04",
        title: "Detail Gambar Kerja Custom & Spesifikasi",
        duration: "Hari ke-15 s/d 18",
        description: "Pembuatan ukuran teknis kitchen set, lemari, serta daftar kode cat dan merk material.",
      },
      {
        step: "05",
        title: "Serah Terima Berkas Interior Siap Produksi",
        duration: "Hari ke-19 s/d 21",
        description: "Pengecekan akhir dan penyerahan bundel master PDF interior untuk diserahkan ke workshop mebel lokal.",
      },
    ],
    clientPreparation: [
      "Foto ruangan saat ini dari beberapa sudut pandang dan ukuran dimensi dinding dasar (panjang, lebar, tinggi plafon)",
      "Catatan perabot yang ingin dipertahankan atau perabot baru yang ingin diadakan",
      "Gaya interior yang diinginkan (Modern Tropis, Minimalis, Japandi, Warm Contemporary)",
      "Foto inspirasi interior yang paling Anda sukai untuk menyamakan frekuensi estetika",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Briefing kebutuhan, moodboard konsep & layout denah perabot 2D",
      "Termin 2 (40%): Pemodelan visual 3D render interior ruang utama beresolusi tinggi",
      "Termin 3 (Pelunasan 30%): Serah terima gambar detail furniture custom & daftar spek material",
    ],
    faqs: [
      {
        question: "Apakah Jasa Arsitek juga melayani pengerjaan fisik furniture?",
        answer: "Fokus utama kami adalah jasa perancangan desain arsitektur dan interior digital berlisensi. Kami membekali Anda dengan gambar kerja berdimensi presisi dan daftar merk material, sehingga Anda bebas memilih workshop mebel / vendor interior lokal dengan harga yang jauh lebih hemat dan transparan.",
      },
      {
        question: "Apakah bisa memesan desain interior untuk 1 atau 2 ruangan saja (misal hanya Living Room & Kitchen)?",
        answer: "Bisa sekali! Kami sangat fleksibel melayani perancangan interior per ruangan (parsial) maupun menyeluruh untuk satu rumah.",
      },
      {
        question: "Bagaimana cara arsitek mengetahui ukuran ruangan jika konsultasi dilakukan online?",
        answer: "Tim kami akan memandu Anda melalui video panduan sederhana cara mengukur dinding dan kusen menggunakan meteran gulung biasa, kemudian mengirimkan foto hasil ukuran via WhatsApp.",
      },
    ],
  },
  {
    slug: "renovasi-bangunan",
    title: "Renovasi & Pengembangan Bangunan",
    subtitle: "Transformasi Bangunan Lama Menjadi Segar, Modern, dan Bernilai Tinggi",
    shortDescription: "Perencanaan renovasi rumah tinggal, penambahan lantai bertingkat, perubahan fungsi ruang, serta pembaruan tampilan fasad bangunan lama dengan strategi struktur yang aman dan hemat biaya.",
    fullDescription: "Renovasi bangunan menuntut kehati-hatian teknis tingkat tinggi dalam membaca kondisi struktur eksisting (pondasi, kolom, dan balok) agar biaya konstruksi tidak membengkak akibat pembongkaran yang keliru. Jasa Arsitek membantu Anda merancang renovasi cerdas yang mempertahankan bagian bangunan yang masih kokoh, menyelesaikan masalah ventilasi pengap atau atap bocor, dan menghadirkan wajah baru yang segar dan berkelas.",
    image: "/images/services/renovasi.webp",
    badge: "Solusi Efisien & Terukur",
    estimatedTime: "2 - 4 Minggu Kerja",
    priceRange: "Mulai Rp 35.000 - Rp 60.000 / m²",
    benefits: [
      "Mempertahankan struktur yang masih kokoh guna menghemat anggaran biaya bongkar-pasang",
      "Menyelesaikan masalah kronis rumah lama: ventilasi pengap, lembap, minim cahaya alami, atau kebocoran atap",
      "Pembaruan tampilan fasad eksterior menjadi modern tropis tanpa perlu merombak denah dasar secara total",
      "Rencana tahapan pembangunan bertahap (phasing plan) yang dapat disesuaikan dengan kesiapan anggaran Anda",
      "Perhitungan perkuatan struktur jika merencanakan penambahan lantai dua (dak cor bertingkat)",
      "Konsultasi mitigasi risiko konstruksi bersama tim arsitek berpengalaman",
    ],
    scope: [
      "Pemeriksaan foto, video, dan denah bangunan eksisting untuk mengidentifikasi potensi serta kendala fisik",
      "Diskusi target renovasi: penambahan ruang baru, alih fungsi area, atau modernisasi fasad eksterior",
      "Penyusunan gambar perbandingan: Denah Eksisting Lama vs Denah Rencana Renovasi Baru",
      "Pengembangan konsep integrasi struktur bangunan lama dengan elemen arsitektur baru secara harmonis",
      "Visualisasi render 3D hasil renovasi akhir untuk kepastian wujud nyata sebelum tukang mulai bekerja",
      "Penyusunan petunjuk teknis pembongkaran dinding non-struktural yang aman",
    ],
    deliverables: [
      "Gambar Perbandingan: Denah Eksisting Lama vs Denah Rencana Baru",
      "Gambar Rencana Pembongkaran (Dinding/Atap yang Dipertahankan vs yang Dibongkar)",
      "Denah Tata Ruang Baru Lengkap Ukuran & Penataan Perabot",
      "Gambar Tampak Fasad Baru Hasil Renovasi",
      "Visualisasi Render 3D Fasad Eksterior & Ruang Utama Hasil Renovasi",
      "Rencana Detail Sambungan Atap Baru & Talang Air Pencegah Bocor",
      "Rencana Jalur Listrik & Pipa Air Penyesuaian Ruang Baru",
      "Bundel Gambar Kerja Renovasi PDF A3 Siap Dipegang Mandor",
    ],
    workflow: [
      {
        step: "01",
        title: "Audit Visual Bangunan Eksisting",
        duration: "Hari ke-1 s/d 4",
        description: "Pengumpulan foto detail kondisi rumah lama, sketsa denah saat ini, dan inventarisasi masalah fisik bangunan.",
      },
      {
        step: "02",
        title: "Solusi Denah Baru & Strategi Bongkar",
        duration: "Hari ke-5 s/d 11",
        description: "Merancang tata ruang baru yang mengoptimalkan struktur lama, serta menentukan dinding yang aman dibongkar.",
      },
      {
        step: "03",
        title: "Transformasi Fasad & Visualisasi 3D",
        duration: "Hari ke-12 s/d 19",
        description: "Meremajakan tampilan luar rumah dengan gaya modern tropis dan visualisasi 3D fotorealistik.",
      },
      {
        step: "04",
        title: "Penyusunan Gambar Teknis Renovasi",
        duration: "Hari ke-20 s/d 25",
        description: "Pembuatan detail gambar kerja sambungan atap, perpipaan baru, dan kelistrikan terpadu.",
      },
      {
        step: "05",
        title: "Quality Check & Serah Terima Final",
        duration: "Hari ke-26 s/d 28",
        description: "Penyerahan bundel master PDF A3 panduan renovasi terukur yang siap diaplikasikan di lapangan.",
      },
    ],
    clientPreparation: [
      "Foto detail kondisi bangunan saat ini dari tampak depan, samping, ruangan dalam, hingga atap",
      "Sketsa kasar denah letak ruangan yang ada saat ini beserta ukuran perkiraan",
      "Daftar keluhan utama pada rumah lama (misal: ruang tengah gelap, kamar anak kurang, atap bocor)",
      "Prioritas bagian bangunan yang ingin diubah dan rencana jangka panjang penambahan lantai jika ada",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Audit kondisi eksisting, perumusan solusi tata letak denah & strategi bongkar",
      "Termin 2 (40%): Pemodelan visualisasi 3D tampak fasad dan ruang baru hasil renovasi",
      "Termin 3 (Pelunasan 30%): Serah terima bundel dokumen gambar kerja renovasi siap bangun",
    ],
    faqs: [
      {
        question: "Apakah bisa konsultasi renovasi skala terfokus, misalnya renovasi fasad depan saja?",
        answer: "Tentu bisa! Kami menyediakan layanan facelift fasad eksterior bagi Anda yang ingin mempercantik tampak luar rumah agar terlihat modern tanpa harus mengubah denah ruangan dalam.",
      },
      {
        question: "Bagaimana cara memastikan rumah lama saya kuat ditingkat menjadi 2 lantai?",
        answer: "Tim arsitek kami akan memeriksa posisi kolom dan ketebalan dinding bata eksisting, serta merancang opsi struktur tambahan seperti kolom praktis bertulang, balok gantung, atau struktur baja ringan khusus yang tidak membebani struktur lama secara berlebihan.",
      },
      {
        question: "Apakah renovasi bersama arsitek benar-benar bisa menekan pemborosan biaya?",
        answer: "Sangat terbukti. Lebih dari 60% pemborosan renovasi terjadi karena 'trial and error' tukang yang coba-coba membongkar tanpa gambar kerja. Dengan perencanaan arsitek di depan, material yang dibeli tepat volume dan tidak ada pekerjaan yang diulang.",
      },
    ],
  },
];
