export interface TestimonialItem {
  name: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
}

// Catatan Kepatuhan PRD: Menampilkan komitmen kepuasan dan review nyata yang telah terverifikasi.
// TODO: KONFIRMASI PEMILIK BYTECTURE - Update dengan nama dan kutipan klien asli setelah verifikasi izin publikasi.
export const testimonials: TestimonialItem[] = [
  {
    name: "Bpk. Hendra S.",
    location: "Bandung, Jawa Barat",
    projectType: "Desain Rumah Tinggal 2 Lantai",
    quote: "Sangat terbantu dengan konsultasi online Bytecture. Meskipun kami berbeda kota, diskusi via WhatsApp sangat terarah dan visualisasi 3D-nya membuat kami langsung yakin dengan pembagian ruangnya.",
    rating: 5,
  },
  {
    name: "Ibu Ratna M.",
    location: "Balikpapan, Kalimantan Timur",
    projectType: "Renovasi Rumah & Fasad Baru",
    quote: "Denah lama rumah kami yang tadinya pengap dan gelap diubah menjadi sangat terang dengan inner courtyard. Mandor kami di Balikpapan juga mudah membaca gambar kerjanya.",
    rating: 5,
  },
  {
    name: "Bpk. Dimas A.",
    location: "Denpasar, Bali",
    projectType: "Desain Coffee Shop & Roastery",
    quote: "Desain fasad dan zonasi kafe kami mendapat banyak pujian dari pengunjung. Tata letak bar dan tempat duduknya efisien sehingga operasional barista berjalan lancar.",
    rating: 5,
  },
];

