# BYTECTURE — Website Jasa Arsitek Online Indonesia

Website company profile dan katalog jasa arsitektur online profesional untuk seluruh Indonesia. Dibangun menggunakan framework **Astro** dan styling **CSS murni (Vanilla CSS)**, tanpa backend, tanpa database, dan tanpa dependensi framework CSS pihak ketiga.

Implementasi visual mengadopsi bahasa desain **Luxury Modern Architectural Concept** sesuai referensi desain:
- Container sudut membulat halus (*border-radius* 24px - 40px)
- Panel kaca buram (*frosted glassmorphism* & *backdrop-filter blur*)
- Floating pill/capsule dock navigasi & pill filters
- Tipografi editorial anggun *"A Brighter Way of Living"*
- Kartu properti interaktif dengan spesifikasi detail & tombol aksi sirkular

---

## 📁 Struktur Direktori Halaman (`src/pages/`) — Kepatuhan PRD Bagian 5.4

Sesuai aturan ketat PRD Bagian 5.4, penamaan file halaman wajib mengikuti kaidah berikut:
- **Hanya Beranda yang menggunakan nama `index.astro`** (`src/pages/index.astro` -> `/`).
- Seluruh halaman lain memakai file dengan nama halamannya masing-masing. Tidak ada folder-per-halaman yang berisi `index.astro`.
- Halaman detail menggunakan parameter dinamis `[slug].astro` di dalam folder induk terkait (`layanan/`, `paket/`, `blog/`).
- File `sitemap.xml` digenerate otomatis saat build melalui `src/pages/sitemap.xml.ts`.

| Halaman | File Sumber | URL Publik | Status Sitemap |
|---|---|---|---|
| **Beranda** | `src/pages/index.astro` | `/` | Ya |
| **Tentang Kami** | `src/pages/tentang-kami.astro` | `/tentang-kami/` | Ya |
| **Katalog Layanan** | `src/pages/layanan.astro` | `/layanan/` | Ya |
| **Detail Layanan** | `src/pages/layanan/[slug].astro` | `/layanan/{slug}/` | Ya |
| **Pilihan Paket** | `src/pages/paket.astro` | `/paket/` | Ya |
| **Detail Paket** | `src/pages/paket/[slug].astro` | `/paket/{slug}/` | Ya |
| **Galeri Desain** | `src/pages/galeri.astro` | `/galeri/` | Ya |
| **Blog Edukasi** | `src/pages/blog.astro` | `/blog/` | Ya |
| **Detail Artikel** | `src/pages/blog/[slug].astro` | `/blog/{slug}/` | Ya |
| **Kontak & Konsultasi** | `src/pages/kontak.astro` | `/kontak/` | Ya |
| **Kebijakan Privasi** | `src/pages/kebijakan-privasi.astro` | `/kebijakan-privasi/` | Ya |
| **Halaman 404** | `src/pages/404.astro` | `/404` | Tidak (`noindex`) |
| **Sitemap XML** | `src/pages/sitemap.xml.ts` | `/sitemap.xml` | - |

---

## 🛠️ Fitur & Keunggulan Teknis

1. **Navigasi Multi-Platform Responsif**:
   - **Desktop**: Sidebar kiri bergaya floating pill dock dengan logo, SVG icon, indikator active state, dan tombol WhatsApp.
   - **Mobile**: Bottom dock bar ala aplikasi modern (Beranda, Layanan, Paket, Galeri, Kontak) + Header top drawer untuk akses 7 menu lengkap.
2. **Breadcrumb**: Wajib hadir di semua halaman dengan schema structured data `BreadcrumbList`.
3. **Floating Action Buttons**:
   - Floating WhatsApp di pojok kanan bawah mengarah ke nomor resmi `083115542771`.
   - Back to Top smooth scroll tepat di atas tombol WhatsApp.
4. **Galeri dengan Lightbox**:
   - Filter kategori (Semua, Rumah Tinggal, Interior, Komersial, Konsep Desain).
   - Popup lightbox dengan tombol navigasi Prev/Next, tombol tutup, backdrop click, dan tombol keyboard `Escape`.
5. **Formulir Kontak Terintegrasi WhatsApp**:
   - Validasi sisi klien.
   - Menyusun teks terformat otomatis dan membuka aplikasi WhatsApp tanpa menyimpan data ke server.
6. **Standar Gambar WebP (< 100 KB)**:
   - Seluruh gambar konten berformat `.webp` dengan ukuran file di bawah 100 KB (rentang 25 KB - 94 KB).
7. **SEO, AEO, & GEO 2026**:
   - Canonical URL absolut dengan trailing slash konsisten.
   - Schema JSON-LD: `ProfessionalService`, `WebSite`, `BreadcrumbList`, `Service`, `BlogPosting`, `FAQPage`.
   - `robots.txt` dengan deklarasi `Sitemap: https://bytecture.web.id/sitemap.xml`.

---

## 🚀 Menjalankan Project

### Development Server:
```bash
npm run dev
```

### Build Production:
```bash
npm run build
```

### Preview Hasil Build:
```bash
npm run preview
```

---

## 📝 Catatan Data Placeholder untuk Konfirmasi Pemilik Brand
Sesuai PRD Bagian 17, item berikut telah diberi penanda internal `TODO: KONFIRMASI PEMILIK BYTECTURE` pada `src/data/`:
1. Alamat kantor fisik (jika ingin ditampilkan) & email resmi.
2. Akun resmi media sosial Bytecture (Instagram, TikTok, Facebook, X, YouTube).
3. Data sertifikasi arsitek (IAI/SKA) atau tahun pendirian resmi.
4. Rincian tarif final per m² atau paket dan testimoni terverifikasi klien.

