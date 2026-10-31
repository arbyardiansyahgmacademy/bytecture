export interface GalleryItem {
  id: string;
  title: string;
  category: "Rumah Tinggal" | "Interior" | "Komersial" | "Konsep Desain";
  locationNote: string;
  description: string;
  specs: {
    area: string;
    floors: string;
    style: string;
  };
  image: string;
  alt: string;
  badge: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "villa-cliff",
    title: "Seacliff Minimalist Villa",
    category: "Rumah Tinggal",
    locationNote: "Inspirasi Hunian Tropis Kontemporer — Tepi Tebing",
    description: "Eksplorasi arsitektur hunian dengan bukaan kaca masif tanpa sekat, kolam infinity, dan integrasi elemen batu alam serta vegetasi lokal.",
    specs: {
      area: "Luas 480 m²",
      floors: "2 Lantai",
      style: "Tropis Modern Minimalis",
    },
    image: "/images/gallery/villa-cliff.webp",
    alt: "Desain villa arsitektur modern minimalis dengan kolam renang infinity dan jendela kaca besar saat senja",
    badge: "Konsep Desain",
  },
  {
    id: "modern-minimalist",
    title: "The Pavilion Residence",
    category: "Rumah Tinggal",
    locationNote: "Hunian Urban Ramah Cahaya Alami",
    description: "Desain rumah tinggal dengan inner courtyard di tengah bangunan untuk sirkulasi silang dan pencahayaan optimal di lahan perkotaan.",
    specs: {
      area: "Luas 280 m²",
      floors: "2 Lantai",
      style: "Kontemporer Sehat",
    },
    image: "/images/gallery/modern-minimalist.webp",
    alt: "Rumah tinggal modern kontemporer dengan taman tengah dan fasad geometris bersih",
    badge: "Konsep Desain",
  },
  {
    id: "tropical-courtyard",
    title: "Rumah Sudut Tropis Asri",
    category: "Rumah Tinggal",
    locationNote: "Pemanfaatan Lahan Hook Dua Muka",
    description: "Perancangan rumah sudut yang memaksimalkan dua fasad dengan kisi-kisi kayu pelindung panas sore dan kanopi cantilever elegan.",
    specs: {
      area: "Luas 220 m²",
      floors: "2 Lantai",
      style: "Tropis Modern",
    },
    image: "/images/gallery/tropical-courtyard.webp",
    alt: "Rumah modern tropis lahan hook dengan bukaan kisi-kisi kayu dan taman samping",
    badge: "Konsep Desain",
  },
  {
    id: "living-room",
    title: "Sanctuary Living & Dining Room",
    category: "Interior",
    locationNote: "Konsep Open-Plan Ruang Keluarga & Dapur Bersih",
    description: "Penataan ruang dalam dengan aksen kayu jati natural, pencahayaan tersembunyi warm-white, serta perpaduan marmer lembut yang menenangkan.",
    specs: {
      area: "Luas 85 m²",
      floors: "Lantai 1",
      style: "Warm Minimalist Luxury",
    },
    image: "/images/gallery/living-room.webp",
    alt: "Desain interior ruang keluarga terbuka dengan aksen kayu hangat dan pencahayaan dramatis",
    badge: "Konsep Desain",
  },
  {
    id: "facade-geometry",
    title: "Geometric Linear House",
    category: "Konsep Desain",
    locationNote: "Eksplorasi Bentuk Arsitektur Futuristik",
    description: "Gubahan massa geometris dengan permainan bayangan dinamis dari secondary skin pelat baja perforasi yang ramah iklim tropis.",
    specs: {
      area: "Luas 350 m²",
      floors: "3 Lantai",
      style: "Arsitektur Geometris Modern",
    },
    image: "/images/gallery/facade-geometry.webp",
    alt: "Fasad arsitektur rumah bertingkat dengan aksen kisi-kisi modern dan bentuk geometris tegas",
    badge: "Konsep Desain",
  },
  {
    id: "commercial-cafe",
    title: "Terrace Garden Cafe & Eatery",
    category: "Komersial",
    locationNote: "Ruang Usaha F&B Berkonsep Terbuka",
    description: "Tata ruang kafe yang mengoptimalkan area semi-outdoor dengan sirkulasi udara bebas, titik foto ikonik, dan alur pemesanan yang efisien.",
    specs: {
      area: "Luas 310 m²",
      floors: "1 Lantai + Mezanin",
      style: "Modern Industrial Warmth",
    },
    image: "/images/gallery/commercial-cafe.webp",
    alt: "Desain kafe modern dengan taman terbuka, pencahayaan senja hangat, dan tempat duduk yang nyaman",
    badge: "Konsep Desain",
  },
];

