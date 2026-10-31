export interface PackageItem {
  slug: string;
  title: string;
  badge?: string;
  isRecommended: boolean;
  shortDescription: string;
  fullDescription: string;
  priceDisplay: string;
  priceNote: string;
  estimatedDuration: string;
  revisionPolicy: string;
  suitableFor: string[];
  included: string[];
  notIncluded: string[];
  deliverables: string[];
  paymentStages: string[];
  processStages: string[];
  image: string;
}

export const packages: PackageItem[] = [
  {
    slug: "paket-konsultasi",
    title: "Paket Konsultasi & Konsep Dasar",
    badge: "Praktis & Terjangkau",
    isRecommended: true,
    shortDescription: "Cocok bagi Anda yang baru memiliki kavling lahan dan membutuhkan panduan tata ruang, zonasi fungsi, serta inspirasi gaya desain sebelum melangkah ke tahap konstruksi.",
    fullDescription: "Paket ini dirancang khusus bagi calon pemilik rumah yang ingin memvalidasi ide desain dan mengoptimalkan potensi lahannya sebelum menginvestasikan dana besar ke tahap teknis. Arsitek Bytecture akan membantu Anda membedah potensi lahan, menentukan arah sirkulasi udara dan cahaya terbaik, serta menghadirkan sketsa denah 2D yang fungsional dan nyaman untuk keluarga.",
    priceDisplay: "Mulai Rp 1.500.000*",
    priceNote: "*Tarif paket konsep dasar terpadu. Estimasi final disesuaikan dengan luas kavling dan kompleksitas kebutuhan ruang.",
    estimatedDuration: "5 - 8 Hari Kerja",
    revisionPolicy: "1x Putaran Revisi Konsep Denah Menyeluruh",
    suitableFor: [
      "Calon pemilik rumah yang masih dalam tahap awal eksplorasi ide dan penataan ruang",
      "Klien yang ingin mengecek kelayakan tata ruang pada lahan dengan bentuk unik, serong, atau memanjang",
      "Pemilik properti yang membutuhkan pandangan kedua (second opinion) sebelum mengeksekusi renovasi",
      "Keluarga muda yang ingin memiliki gambaran denah rumah masa depan yang dapat dibangun bertahap",
    ],
    included: [
      "Sesi konsultasi mendalam via WhatsApp & Video Call langsung bersama arsitek",
      "Analisis tapak lahan (orientasi matahari, arah angin dominan, dan privasi sekitar)",
      "Pengembangan alternatif konsep layout denah tata ruang 2D lengkap ukuran",
      "Konsep zonasi ruang (area publik, privat keluarga, servis, dan ruang terbuka hijau)",
      "Moodboard gaya desain arsitektur dan arahan palet material referensi",
      "1x putaran revisi konsep denah berdasarkan feedback klien",
      "File digital PDF beresolusi tinggi yang siap dibaca di smartphone maupun laptop",
    ],
    notIncluded: [
      "Render visualisasi 3D fasad eksterior fotorealistik beresolusi tinggi",
      "Gambar detail kerja teknis arsitektur, pondasi struktur beton bertulang, dan MEP",
      "Penyusunan Rencana Anggaran Biaya (RAB) detail proyek",
      "Pengawasan pelaksanaan konstruksi fisik di lapangan",
    ],
    deliverables: [
      "Dokumen PDF Konsep Denah Tata Ruang Berdimensi Lengkap (Skala 1:100)",
      "Denah Rencana Perletakan Furniture Dasar",
      "Moodboard Visual Arah Gaya Desain Fasad & Karakter Ruang",
      "Ringkasan Catatan Rekomendasi Arsitektur untuk Tahap Selanjutnya",
    ],
    paymentStages: [
      "Termin 1 (DP 50%): Dibayarkan saat kesepakatan awal dan pengiriman data ukuran lahan",
      "Termin 2 (Pelunasan 50%): Dibayarkan setelah presentasi draft denah dan penyerahan final PDF konsep",
    ],
    processStages: [
      "Pengisian kuesioner kebutuhan ruang dan pengiriman foto/sketsa ukuran lahan via WhatsApp",
      "Diskusi awal penentuan arah gaya arsitektur dan kebutuhan ruangan keluarga",
      "Penyusunan draft denah 2D dan sesi presentasi digital bersama arsitek",
      "Revisi dan finalisasi berkas dokumen PDF konsep tata ruang",
    ],
    image: "/images/packages/paket-konsultasi.webp",
  },
  {
    slug: "paket-basic",
    title: "Paket Desain Arsitektur Basic",
    badge: "Pilihan Favorit",
    isRecommended: true,
    shortDescription: "Paket komprehensif mencakup denah tata letak ruang presisi dan visualisasi 3D eksterior fasad fotorealistik untuk melihat wujud nyata rumah sebelum dibangun.",
    fullDescription: "Pilihan paling tepat bagi Anda yang ingin melihat secara nyata bagaimana bentuk bangunan Anda berdiri dengan visualisasi 3D berkualitas tinggi. Paket ini memberikan kepastian estetika fasad dari berbagai sudut pandang sekaligus kenyamanan fungsi ruang dalam yang siap dijadikan pedoman bagi mandor bangunan terpercaya Anda.",
    priceDisplay: "Mulai Rp 35.000 / m²*",
    priceNote: "*Dihitung per m² luas lantai bangunan. Konsultasikan denah awal untuk penawaran resmi yang transparan.",
    estimatedDuration: "10 - 16 Hari Kerja",
    revisionPolicy: "2x Putaran Revisi Minor (Denah & Fasad 3D)",
    suitableFor: [
      "Pembangunan rumah tinggal baru 1 hingga 2 lantai dengan tim mandor lokal",
      "Pemilik rumah yang memprioritaskan tampilan fasad modern, proporsional, dan eye-catching",
      "Pembangunan mandiri dengan anggaran terukur tanpa perlu dokumen teknis rumit",
      "Klien yang ingin memastikan estetika rumah terlihat jelas sebelum membeli material",
    ],
    included: [
      "Semua fasilitas dalam Paket Konsultasi & Konsep Dasar",
      "Konsep denah tata ruang 2D presisi lengkap dengan ukuran dinding dan kusen",
      "Gambar denah perletakan furniture terperinci",
      "Visualisasi render 3D eksterior fasad (3-4 sudut pandang tajam suasana siang hari)",
      "Gambar 2D tampak bangunan (Tampak Depan, Samping Kanan, dan Samping Kiri)",
      "2x putaran revisi minor untuk penyempurnaan denah dan elemen fasad",
      "Konsultasi fleksibel via WhatsApp selama proses perancangan berlangsung",
    ],
    notIncluded: [
      "Gambar kerja teknis detail pembesian struktur beton bertulang dan pondasi",
      "Gambar instalasi MEP lengkap (rencana jalur listrik dan sanitasi perpipaan)",
      "Visualisasi 3D interior ruang dalam",
      "Penyusunan Rencana Anggaran Biaya (RAB) volume bahan",
    ],
    deliverables: [
      "Buku Portofolio Desain Rumah Digital (PDF High-Res Siap Cetak A3)",
      "Koleksi Gambar Render 3D Fasad Eksterior Fotorealistik (Format JPG/PNG 4K)",
      "Gambar Denah Tata Ruang 2D Berskala Lengkap dengan Keterangan Ukuran",
      "Gambar Tampak 2D Bangunan Eksterior Berwarna",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Dimulai saat kick-off proyek dan penyusunan konsep denah 2D",
      "Termin 2 (40%): Dibayarkan saat konsep denah disetujui dan tim melanjutkan pemodelan visual 3D",
      "Termin 3 (Pelunasan 30%): Dibayarkan saat serah terima seluruh file master PDF & visual 3D final",
    ],
    processStages: [
      "Konsultasi awal via WhatsApp dan pengumpulan data lahan serta kebutuhan ruang",
      "Penyusunan dan asistensi konsep denah tata ruang 2D",
      "Pembuatan visualisasi render 3D fasad eksterior fotorealistik",
      "Sesi revisi minor dan finalisasi serah terima bundel dokumen PDF",
    ],
    image: "/images/packages/paket-basic.webp",
  },
  {
    slug: "paket-lengkap",
    title: "Paket Desain Lengkap & Gambar Kerja DED",
    badge: "Paling Direkomendasikan",
    isRecommended: true,
    shortDescription: "Solusi total siap bangun: visualisasi 3D eksterior & interior, gambar kerja arsitektur lengkap DED, rencana MEP, dan spesifikasi material siap tender kontraktor.",
    fullDescription: "Paket paling komprehensif yang menjamin proyek pembangunan Anda berjalan mulus tanpa risiko salah tafsir di lapangan. Dilengkapi dokumen gambar kerja teknis (Detail Engineering Design / DED) berstandar konstruksi nasional yang meminimalkan risiko bongkar-pasang akibat kekeliruan tukang, menghemat waktu serta belasan hingga puluhan juta rupiah biaya Anda.",
    priceDisplay: "Mulai Rp 65.000 / m²*",
    priceNote: "*Tarif disesuaikan dengan luas lantai dan tingkat kompleksitas detail. Penawaran bertahap dan transparan.",
    estimatedDuration: "20 - 30 Hari Kerja",
    revisionPolicy: "3x Putaran Revisi Menyeluruh (Denah, Fasad 3D, & Interior)",
    suitableFor: [
      "Rumah tinggal 2 lantai atau lebih, villa pribadi, dan bangunan komersial representatif",
      "Pemilik proyek yang ingin pembangunan terencana matang tanpa pembengkakan biaya tak terduga",
      "Pembangunan melalui proses tender kontraktor profesional atau pengajuan perizinan gedung (PBG)",
      "Klien yang menghendaki panduan konstruksi lengkap dari struktur, kelistrikan, hingga sanitasi",
    ],
    included: [
      "Semua fasilitas dalam Paket Basic",
      "Visualisasi render 3D fasad eksterior (siang & senja dari 4 sudut pandang utama)",
      "Visualisasi render 3D interior ruang utama (Living room, Dining, Master bedroom)",
      "Gambar kerja arsitektur lengkap (denah berdimensi, tampak 4 sisi, potongan melintang/membujur)",
      "Gambar denah pola lantai dan denah pola plafon / drop ceiling",
      "Gambar rencana detail kusen, pintu, jendela, dan ventilasi",
      "Rencana instalasi listrik (titik lampu, stop kontak, saklar, dan jalur MCB)",
      "Rencana instalasi pipa air bersih, air kotor, pipa buangan AC, dan septic tank biofill",
      "Daftar rekomendasi spesifikasi material finishing (Spektek Material)",
      "3x putaran revisi terarah bersama arsitek perancang",
      "Pendampingan tanya jawab online via WhatsApp selama masa konstruksi fisik berlangsung",
    ],
    notIncluded: [
      "Jasa pengawasan fisik harian sebagai mandor pengawas di lokasi proyek",
      "Biaya uji tanah / sondir laboratorium (jika kondisi tanah memerlukan)",
    ],
    deliverables: [
      "Bundel Dokumen Gambar Kerja Arsitektur & MEP Lengkap (PDF Siap Cetak A3)",
      "Koleksi Render 3D Eksterior & Interior Utama Fotorealistik Resolusi Tinggi 4K",
      "Gambar Detail Rencana Pola Plafon & Pola Lantai Keramik/Granit",
      "Dokumen Rincian Spesifikasi Material Bahan Bangunan (Spektek Material)",
      "Master File Digital Siap Digunakan untuk Tender Kontraktor Maupun Tukang",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Kick-off proyek, analisa lahan, dan penyusunan denah tata ruang 2D",
      "Termin 2 (40%): Setelah approval denah, dilanjutkan pembuatan render 3D eksterior & interior",
      "Termin 3 (Pelunasan 30%): Setelah approval visual 3D, tim menyusun bundel gambar kerja DED & MEP final",
    ],
    processStages: [
      "Diskusi intensif via WhatsApp/Meet mengenai kebutuhan ruang, gaya, dan estimasi bujet proyek",
      "Penyusunan konsep denah arsitektur 2D dan sesi revisi hingga disetujui",
      "Pemodelan 3D dan rendering visual eksterior serta interior ruang utama",
      "Penyusunan gambar kerja teknis DED arsitektur, kelistrikan, dan sanitasi perpipaan",
      "Quality control kelengkapan dokumen dan serah terima master bundel PDF A3 siap bangun",
    ],
    image: "/images/packages/paket-lengkap.webp",
  },
  {
    slug: "paket-custom",
    title: "Paket Custom & Bangunan Komersial",
    badge: "Solusi Khusus & Komersial",
    isRecommended: false,
    shortDescription: "Paket fleksibel untuk villa eksklusif, kafe kekinian, resort mini, kantor modern, ruko usaha, atau kebutuhan proyek berskala khusus dengan spesifikasi tailor-made.",
    fullDescription: "Setiap properti komersial dan ruang usaha memiliki identitas, tantangan sirkulasi, dan target pendapatan yang sangat spesifik. Paket custom Bytecture disusun secara tailor-made berdasarkan model bisnis, kapasitas pengunjung, karakteristik tapak tanah, serta target timeline peluncuran bisnis Anda.",
    priceDisplay: "Penawaran Khusus*",
    priceNote: "*Dihitung berdasarkan luasan, fungsi komersial, dan lingkup deliverables yang disepakati bersama.",
    estimatedDuration: "3 - 5 Minggu Kerja",
    revisionPolicy: "Revisi Fleksibel Terarah Sesuai Dinamika Proyek",
    suitableFor: [
      "Kafe, coffee shop, restoran, dan butik komersial kekinian",
      "Kompleks villa sewa harian, glamping resort, dan guest house boutique",
      "Kantor representatif, co-working space, dan ruko modern multi-fungsi",
      "Renovasi besar atau perubahan alih fungsi bangunan lama menjadi tempat usaha",
    ],
    included: [
      "Pendalaman brand identity, alur operasional staf, dan kenyamanan sirkulasi pelanggan",
      "Master layout zonasi ruang komersial dan penataan kapasitas tempat duduk optimal",
      "Visualisasi render 3D fasad eksterior komersial suasana siang dan malam hari (night ambiance lighting)",
      "Visualisasi render 3D interior area publik dan focal point branding",
      "Set gambar kerja arsitektur lengkap disesuaikan kebutuhan izin usaha",
      "Rencana MEP untuk fasilitas intensitas tinggi (grease trap dapur resto, toilet umum, daya listrik besar)",
      "Dukungan konsultasi intensif langsung bersama Lead Architect Bytecture via WhatsApp",
    ],
    notIncluded: [
      "Biaya pengujian tanah / sondir mekanika tanah (jika gedung > 3 lantai)",
      "Pelaksanaan fisik konstruksi bangunan",
    ],
    deliverables: [
      "Master Digital Design Booklet Proyek Komersial Terpadu",
      "Visualisasi 3D Fasad & Suasana Komersial Siang/Malam Resolusi Tinggi",
      "Set Gambar Kerja Lengkap Siap Pembangunan & Tender Kontraktor",
      "Denah Layout Operasional dan Penataan Kapasitas Ruang Usaha",
      "Dokumen Spek Material Komersial Tahan Lama & Efisien",
    ],
    paymentStages: [
      "Termin 1 (DP 30%): Briefing konsep bisnis, riset tapak, dan penyusunan master zoning layout",
      "Termin 2 (40%): Pengembangan fasad komersial ikonik dan visualisasi render 3D siang & malam",
      "Termin 3 (Pelunasan 30%): Serah terima set gambar kerja teknis komersial lengkap siap tender",
    ],
    processStages: [
      "Briefing konsep bisnis, target konsumen, dan alur pergerakan operasional utama",
      "Penyusunan zonasi fungsi ruang, alur sirkulasi tamu, dan kapasitas optimal",
      "Pengembangan arsitektur fasad landmark dan visualisasi render 3D realistis",
      "Penyusunan dokumen teknis gambar kerja, kelistrikan komersial, dan sanitasi khusus",
      "Review menyeluruh dan serah terima master berkas PDF A3 siap eksekusi proyek",
    ],
    image: "/images/packages/paket-custom.webp",
  },
];
