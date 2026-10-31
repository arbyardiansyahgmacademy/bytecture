export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  email: string;
  address: string;
  serviceArea: string;
  socials: {
    instagram: string;
    tiktok: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Bytecture",
  tagline: "Jasa Arsitek Online Seluruh Indonesia",
  description: "Layanan jasa arsitek profesional dan konsultasi desain bangunan secara online untuk seluruh wilayah Indonesia. Solusi desain rumah, bangunan komersial, interior, dan renovasi dengan pendekatan modern, fungsional, dan transparan.",
  domain: "https://bytecture.web.id",
  phoneDisplay: "083115542771",
  phoneRaw: "6283115542771",
  whatsappUrl: "https://wa.me/6283115542771",
  // TODO: KONFIRMASI PEMILIK BYTECTURE - Alamat kantor fisik dan email resmi
  email: "halo@bytecture.web.id",
  address: "Layanan Konsultasi Online — Menjangkau Seluruh Wilayah Indonesia",
  serviceArea: "Seluruh Indonesia (Konsultasi & Dokumen Digital Online)",
  // TODO: KONFIRMASI PEMILIK BYTECTURE - Tautan akun media sosial resmi Bytecture
  socials: {
    instagram: "https://instagram.com/bytecture.id",
    tiktok: "https://tiktok.com/@bytecture.id",
    facebook: "https://facebook.com/bytecture.id",
    twitter: "https://x.com/bytecture_id",
    youtube: "https://youtube.com/@bytecture_id",
  },
};

