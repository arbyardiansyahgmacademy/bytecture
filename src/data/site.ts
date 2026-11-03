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
  name: "Jasa Arsitek",
  tagline: "Jasa Arsitek Online Seluruh Indonesia",
  description: "Layanan jasa arsitek profesional dan konsultasi desain bangunan secara online untuk seluruh wilayah Indonesia. Solusi desain rumah, bangunan komersial, interior, dan renovasi dengan pendekatan modern, fungsional, dan transparan.",
  domain: "https://jasaarsitek.biz.id",
  phoneDisplay: "083115542771",
  phoneRaw: "6283115542771",
  whatsappUrl: "https://wa.me/6283115542771",
  // TODO: KONFIRMASI PEMILIK JASA ARSITEK - Alamat kantor fisik dan email resmi
  email: "halo@jasaarsitek.biz.id",
  address: "Layanan Konsultasi Online — Menjangkau Seluruh Wilayah Indonesia",
  serviceArea: "Seluruh Indonesia (Konsultasi & Dokumen Digital Online)",
  // TODO: KONFIRMASI PEMILIK JASA ARSITEK - Tautan akun media sosial resmi Jasa Arsitek
  socials: {
    instagram: "https://instagram.com/jasaarsitek.biz.id",
    tiktok: "https://tiktok.com/@jasaarsitek.biz.id",
    facebook: "https://facebook.com/jasaarsitek.biz.id",
    twitter: "https://x.com/jasaarsitek_id",
    youtube: "https://youtube.com/@jasaarsitek_id",
  },
};

