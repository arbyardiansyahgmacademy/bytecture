# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# BYTECTURE — Website Jasa Arsitek Online Indonesia

| Informasi | Detail |
|---|---|
| Nama proyek | Bytecture |
| Domain | https://bytecture.web.id |
| Jenis website | Website company profile dan katalog jasa arsitektur |
| Bidang usaha | Jasa arsitek dan konsultasi desain bangunan secara online |
| Cakupan layanan | Seluruh wilayah Indonesia |
| Framework | Astro |
| Styling | CSS murni (vanilla CSS) |
| Backend / database | Tidak menggunakan backend atau database |
| Target implementasi | Antigravity |
| Bahasa utama | Bahasa Indonesia |
| Fokus utama | Kredibilitas brand, presentasi portofolio, edukasi calon klien, dan konversi prospek melalui WhatsApp |
| Dokumen | Product Requirements Document (PRD) |
| Versi dokumen | 1.1 — disempurnakan 30 Oktober 2026 (ringkasan perubahan di Bagian 21) |

---

## Daftar Isi

1. Ringkasan Proyek
2. Tujuan Produk
3. Target Pengguna
4. Ruang Lingkup dan Batasan
5. Teknologi dan Arsitektur (termasuk **5.4 Penamaan File Halaman dan Sitemap**)
6. Ketentuan Desain UI/UX
7. Navigasi, URL, dan Breadcrumb
8. Detail Kebutuhan Halaman
9. Floating Action Buttons
10. Konten, Data, dan Pengelolaan Statis
11. Standar Gambar dan Media
12. SEO, AEO, dan GEO
13. Performa dan Core Web Vitals
14. Accessibility dan Usability
15. Keamanan dan Privasi
16. Integrasi WhatsApp
17. Konten yang Masih Harus Dikonfirmasi Pemilik Brand
18. Acceptance Criteria
19. Tahapan Pengerjaan yang Disarankan
20. Instruksi Khusus untuk Agen AI Antigravity
21. Catatan Revisi

---

## 1. Ringkasan Proyek

Bytecture adalah website jasa arsitek profesional yang melayani kebutuhan konsultasi dan perencanaan desain bangunan secara online untuk calon klien dari seluruh Indonesia. Website berfungsi sebagai company profile digital, katalog layanan dan paket, galeri portofolio, pusat artikel edukasi, serta kanal komunikasi calon klien.

Website dibuat menggunakan **Astro dan CSS murni**, tanpa backend, database, CMS, maupun sistem autentikasi. Seluruh konten awal seperti layanan, paket, galeri, artikel, FAQ, testimoni, dan informasi perusahaan disimpan sebagai data statis di dalam project. Formulir kontak menggunakan validasi sisi klien dan meneruskan pesan ke WhatsApp admin; website tidak menyimpan data formulir ke server.

Implementasi visual wajib menjadikan **gambar referensi desain yang diberikan pengguna di Antigravity** sebagai acuan utama. Agen AI harus memeriksa gambar referensi yang tersedia sebelum membangun antarmuka. Jangan mengganti arah visual dengan template generik atau membuat desain yang tidak berkaitan dengan referensi. Jika gambar referensi tidak tersedia di workspace, minta pengguna memasukkannya terlebih dahulu atau konfirmasi sebelum menetapkan arah visual baru.

## 2. Tujuan Produk

1. Membangun citra Bytecture sebagai penyedia jasa arsitek online dengan informasi yang jelas dan profesional.
2. Menjangkau calon klien dari berbagai kota dan provinsi di Indonesia.
3. Menampilkan layanan, paket, dan hasil pekerjaan secara terstruktur.
4. Membantu calon klien memahami proses kerja dan pilihan layanan sebelum menghubungi admin.
5. Menghasilkan prospek melalui tombol WhatsApp dan formulir kontak.
6. Meningkatkan visibilitas organik melalui penerapan SEO teknis, SEO on-page, AEO, dan GEO.
7. Menyediakan pengalaman yang konsisten pada desktop, tablet, dan perangkat mobile.

## 3. Target Pengguna

- Pemilik rumah yang ingin membangun rumah baru.
- Pemilik properti yang ingin renovasi atau mengembangkan bangunan.
- Calon pemilik usaha yang membutuhkan desain ruko, kafe, kantor, atau ruang komersial.
- Pengembang properti skala kecil dan menengah.
- Individu atau perusahaan yang membutuhkan konsultasi desain arsitektur jarak jauh.
- Calon klien yang sedang mencari referensi desain, estimasi ruang lingkup pekerjaan, dan arsitek secara online.

## 4. Ruang Lingkup dan Batasan

### 4.1 Termasuk dalam ruang lingkup

- Tujuh halaman utama: Beranda, Tentang Kami, Layanan, Paket, Galeri, Blog, dan Kontak.
- Halaman detail untuk setiap layanan.
- Halaman detail untuk setiap paket.
- Halaman detail artikel blog.
- Navigasi sidebar di desktop.
- Navigasi bawah bergaya aplikasi di mobile.
- Breadcrumb pada seluruh halaman.
- Floating WhatsApp dan tombol Back to Top pada seluruh halaman.
- Galeri dengan preview/lightbox.
- Formulir kontak statis yang mengarahkan pesan ke WhatsApp.
- Konten statis yang mudah diperbarui melalui file data project.
- SEO, AEO, GEO, schema markup, file `sitemap.xml`, dan `robots.txt`.
- Halaman 404 khusus (tidak diindeks dan tidak dimasukkan ke sitemap).

### 4.2 Di luar ruang lingkup

- Backend, database, API buatan sendiri, dan dashboard admin.
- Login, registrasi, serta manajemen akun.
- Penyimpanan pesan formulir di server.
- Pembayaran online, checkout, dan sistem invoice.
- Booking konsultasi dengan kalender real-time.
- CMS dinamis. Artikel dan konten diperbarui melalui source code.
- Klaim otomatis mengenai harga, ketersediaan, sertifikasi, pengalaman, jumlah proyek, atau cakupan tim yang belum diberikan dan diverifikasi oleh pemilik brand.

## 5. Teknologi dan Arsitektur

### 5.1 Teknologi wajib

| Bagian | Ketentuan |
|---|---|
| Framework | Astro versi stabil yang kompatibel dengan project |
| Bahasa | JavaScript/TypeScript sesuai kebutuhan Astro |
| Styling | CSS murni; dilarang menggunakan Tailwind, Bootstrap, atau framework CSS lain |
| Markup | Astro components dan semantic HTML |
| Interaksi | JavaScript seperlunya, tanpa library UI besar |
| Konten | File data statis seperti `.js`, `.ts`, atau `.json` |
| Gambar | WebP |
| Ikon | SVG inline atau icon set ringan yang digunakan secara konsisten |
| Routing | File-based routing Astro dengan penamaan file halaman sesuai Bagian 5.4 |
| Sitemap | File `sitemap.xml` yang dihasilkan otomatis saat build (Bagian 5.4) |
| Deployment | Hosting statis yang mendukung hasil build Astro |

### 5.2 Prinsip arsitektur

- Gunakan pendekatan **static-first**. Halaman harus dapat dihasilkan sebagai file statis saat build.
- Gunakan Astro untuk routing, layout, komponen, dan rendering halaman.
- Hindari hydration JavaScript yang tidak diperlukan.
- Pisahkan komponen layout, komponen UI, data, dan halaman.
- Buat komponen reusable untuk navbar, sidebar, mobile navigation, breadcrumb, footer, FAQ, CTA, card, dan floating action buttons.
- Jangan menambahkan dependency hanya untuk fitur sederhana yang dapat dibuat dengan CSS atau JavaScript native.
- Pastikan seluruh route dapat diakses langsung melalui URL dan tetap bekerja ketika halaman di-refresh.
- Gunakan konfigurasi Astro untuk menghasilkan URL bersih tanpa ekstensi `.html` dengan trailing slash yang konsisten (lihat konfigurasi pada Bagian 5.4).
- Penamaan file halaman dan keberadaan `sitemap.xml` mengikuti ketentuan wajib pada Bagian 5.4.

### 5.3 Rekomendasi struktur direktori

```text
bytecture/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── packages/
│   │   ├── gallery/
│   │   └── blog/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.astro
│   │   │   ├── MobileBottomNav.astro
│   │   │   ├── Header.astro
│   │   │   ├── Breadcrumb.astro
│   │   │   └── Footer.astro
│   │   ├── common/
│   │   │   ├── WhatsAppFloat.astro
│   │   │   ├── BackToTop.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── CTASection.astro
│   │   │   └── FAQ.astro
│   │   ├── cards/
│   │   │   ├── ServiceCard.astro
│   │   │   ├── PackageCard.astro
│   │   │   ├── GalleryCard.astro
│   │   │   ├── BlogCard.astro
│   │   │   └── TestimonialCard.astro
│   │   └── forms/
│   │       └── ContactForm.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── data/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── packages.ts
│   │   ├── gallery.ts
│   │   ├── articles.ts
│   │   ├── testimonials.ts
│   │   └── faqs.ts
│   ├── pages/
│   │   ├── index.astro                # Beranda      → /
│   │   ├── tentang-kami.astro         # Tentang Kami → /tentang-kami/
│   │   ├── layanan.astro              # Layanan      → /layanan/
│   │   ├── layanan/
│   │   │   └── [slug].astro           # Detail layanan → /layanan/{slug}/
│   │   ├── paket.astro                # Paket        → /paket/
│   │   ├── paket/
│   │   │   └── [slug].astro           # Detail paket → /paket/{slug}/
│   │   ├── galeri.astro               # Galeri       → /galeri/
│   │   ├── blog.astro                 # Blog         → /blog/
│   │   ├── blog/
│   │   │   └── [slug].astro           # Detail artikel → /blog/{slug}/
│   │   ├── kontak.astro               # Kontak       → /kontak/
│   │   ├── 404.astro                  # Halaman 404 (noindex)
│   │   └── sitemap.xml.ts             # Menghasilkan /sitemap.xml saat build
│   └── styles/
│       ├── global.css
│       ├── variables.css
│       ├── layout.css
│       └── components.css
├── astro.config.mjs
├── package.json
└── README.md
```

Struktur folder lain (komponen, data, style) dapat disesuaikan selama pemisahan tanggung jawab, route, dan kemudahan pemeliharaan tetap terjaga. **Khusus folder `src/pages/`, ketentuan pada Bagian 5.4 bersifat wajib dan tidak boleh diubah.**

### 5.4 Ketentuan Penamaan File Halaman dan Sitemap (WAJIB)

#### 5.4.1 Penamaan file halaman

1. Nama file setiap halaman di `src/pages/` **harus sesuai dengan nama halamannya masing-masing**, misalnya `tentang-kami.astro`, `layanan.astro`, `paket.astro`, `galeri.astro`, `blog.astro`, dan `kontak.astro`.
2. **Hanya halaman Beranda yang menggunakan nama `index.astro`**, yaitu `src/pages/index.astro`.
3. Dilarang membuat pola folder-per-halaman dengan `index.astro` di dalamnya, misalnya `src/pages/tentang-kami/index.astro` atau `src/pages/kontak/index.astro`.
4. Halaman detail menggunakan file dinamis `[slug].astro` di dalam folder induk yang sesuai (`layanan/`, `paket/`, `blog/`). Folder tersebut tidak boleh berisi `index.astro`; halaman daftarnya berada di file terpisah di luar folder (`layanan.astro`, `paket.astro`, `blog.astro`).
5. Nama file halaman memakai huruf kecil dengan tanda hubung (kebab-case) dan harus sama dengan segmen URL yang dihasilkan. Komponen Astro memakai PascalCase.
6. Jangan membuat dua file yang menghasilkan URL yang sama.

Pemetaan route wajib:

| Halaman | File sumber | URL yang dihasilkan | Masuk sitemap |
|---|---|---|---|
| Beranda | `src/pages/index.astro` | `/` | Ya |
| Tentang Kami | `src/pages/tentang-kami.astro` | `/tentang-kami/` | Ya |
| Layanan (daftar) | `src/pages/layanan.astro` | `/layanan/` | Ya |
| Detail layanan | `src/pages/layanan/[slug].astro` | `/layanan/{slug}/` | Ya |
| Paket (daftar) | `src/pages/paket.astro` | `/paket/` | Ya |
| Detail paket | `src/pages/paket/[slug].astro` | `/paket/{slug}/` | Ya |
| Galeri | `src/pages/galeri.astro` | `/galeri/` | Ya |
| Blog (daftar) | `src/pages/blog.astro` | `/blog/` | Ya |
| Detail artikel | `src/pages/blog/[slug].astro` | `/blog/{slug}/` | Ya |
| Kontak | `src/pages/kontak.astro` | `/kontak/` | Ya |
| Kebijakan privasi (jika dibuat) | `src/pages/kebijakan-privasi.astro` | `/kebijakan-privasi/` | Ya |
| Halaman 404 | `src/pages/404.astro` | `/404` | Tidak (noindex) |
| Sitemap | `src/pages/sitemap.xml.ts` | `/sitemap.xml` | Tidak (bukan halaman) |

Catatan: Astro secara otomatis menghasilkan `dist/tentang-kami/index.html` pada hasil build (format `directory`). Itu adalah **output build**, bukan file sumber, sehingga tidak melanggar aturan di atas. Jangan mengubah output menjadi URL berekstensi `.html`.

Konfigurasi minimal `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bytecture.web.id',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
```

#### 5.4.2 File sitemap.xml

1. File **`sitemap.xml` wajib ada** dan dapat diakses di `https://bytecture.web.id/sitemap.xml` setelah build dan deploy.
2. Sitemap dihasilkan otomatis saat build melalui endpoint statis `src/pages/sitemap.xml.ts`, dengan sumber data yang sama dengan route (`services.ts`, `packages.ts`, `articles.ts`), sehingga setiap slug baru otomatis masuk tanpa edit manual.
3. Integrasi `@astrojs/sitemap` secara bawaan menghasilkan `sitemap-index.xml` dan `sitemap-0.xml`, bukan `sitemap.xml`. Karena itu gunakan endpoint di atas sebagai sumber utama dan jangan menjalankan dua mekanisme sitemap sekaligus agar tidak terjadi duplikasi.
4. Isi sitemap mencakup Beranda, seluruh halaman utama, seluruh halaman detail layanan, paket, dan artikel, serta kebijakan privasi jika dibuat.
5. Setiap `<loc>` berupa URL absolut `https://bytecture.web.id/...` dengan trailing slash, identik dengan canonical halaman tersebut.
6. `<lastmod>` diisi dari tanggal pembaruan pada data bila tersedia (format ISO 8601). Jangan mengisi tanggal rekaan atau tanggal build yang sama untuk semua URL.
7. Jangan memasukkan halaman 404, halaman `noindex`, URL redirect, atau URL berparameter.
8. Format XML valid (UTF-8, namespace `http://www.sitemaps.org/schemas/sitemap/0.9`) dengan maksimal 50.000 URL dan 50 MB per file.
9. `robots.txt` wajib memuat baris `Sitemap: https://bytecture.web.id/sitemap.xml`.
10. Setelah domain aktif, kirim `sitemap.xml` ke Google Search Console.

Contoh kerangka endpoint (sesuaikan nama ekspor data dengan file data project):

```ts
// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { packages } from '../data/packages';
import { articles } from '../data/articles';

export const GET: APIRoute = ({ site }) => {
  const base = site!.origin;
  const staticPaths = ['/', '/tentang-kami/', '/layanan/', '/paket/', '/galeri/', '/blog/', '/kontak/'];
  const dynamicPaths = [
    ...services.map((s) => `/layanan/${s.slug}/`),
    ...packages.map((p) => `/paket/${p.slug}/`),
    ...articles.map((a) => `/blog/${a.slug}/`),
  ];
  const urls = [...staticPaths, ...dynamicPaths]
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
```

## 6. Ketentuan Desain UI/UX

### 6.1 Acuan visual

- Gambar referensi yang diunggah pengguna adalah sumber utama untuk menentukan gaya visual.
- Amati komposisi, layout, proporsi sidebar, bentuk card, jarak antar elemen, tipografi, warna, radius, border, shadow, dan perilaku navigasi.
- Pertahankan karakter visual referensi secara konsisten di seluruh halaman.
- Jangan menyalin elemen yang tidak relevan dengan kebutuhan website arsitektur.
- Adaptasikan elemen visual agar cocok untuk brand jasa arsitek dan konten arsitektur.
- Hindari tampilan template generik, dekorasi berlebihan, gradient yang tidak diperlukan, dan elemen yang terasa seperti hasil desain otomatis.
- Buat desain yang rapi, matang, berkarakter, dan mengutamakan keterbacaan serta kejelasan CTA.

### 6.2 Desktop: sidebar kiri

- Navbar utama berada di sisi kiri layar dengan model sidebar/dashboard, bukan navbar horizontal standar di bagian atas.
- Sidebar menjadi navigasi utama dan memiliki posisi yang konsisten di seluruh halaman.
- Sediakan logo/wordmark Bytecture di bagian atas sidebar.
- Menu navigasi: Beranda, Tentang Kami, Layanan, Paket, Galeri, Blog, Kontak.
- Setiap item menu memiliki ikon dan teks.
- Tampilkan state aktif yang jelas pada halaman yang sedang dibuka.
- Sediakan tombol CTA kontak/WhatsApp pada area sidebar jika sesuai dengan referensi.
- Konten utama berada di sebelah kanan sidebar dan memiliki lebar yang nyaman dibaca.
- Pada layar desktop, sidebar dapat dibuat sticky atau fixed sesuai kecocokan dengan referensi.
- Pastikan konten tidak tertutup sidebar dan memiliki spacing yang konsisten.

### 6.3 Mobile: bottom navigation

- Pada perangkat mobile, sidebar desktop berubah menjadi navigasi bawah seperti aplikasi Instagram.
- Navigasi berada di bagian bawah viewport, dengan ikon dan label teks singkat.
- Gunakan menu utama yang paling penting: Beranda, Layanan, Paket, Galeri, dan Kontak.
- Ikon harus mudah dikenali, konsisten, dan memiliki ukuran area sentuh yang nyaman.
- Tampilkan indikator menu aktif.
- Navigasi harus memperhitungkan safe area perangkat dan tidak menutupi konten.
- Berikan padding bawah pada konten agar elemen terakhir tidak tertutup bottom navigation.
- Menu Tentang Kami dan Blog tetap harus dapat ditemukan. Sediakan minimal dua jalur akses: (a) ikon menu pada header mobile yang membuka daftar lengkap tujuh halaman, dan (b) link navigasi di footer. Tambahan link kontekstual di dalam halaman (misalnya tombol di section ringkasan Tentang Kami dan section Blog di Beranda) tetap dianjurkan. Jangan menghilangkan akses ke halaman tersebut.
- Jangan menampilkan sidebar desktop bersamaan dengan bottom navigation mobile.

### 6.4 Responsivitas

- Desktop besar, laptop, tablet, dan smartphone harus mendapatkan layout yang sesuai.
- Tidak boleh ada horizontal overflow.
- Card, grid, gambar, form, dan tipografi harus menyesuaikan lebar layar.
- Pastikan tombol dan link memiliki area sentuh yang memadai.
- Uji minimal pada lebar 360px, 390px, 768px, 1024px, 1280px, dan 1440px.

## 7. Navigasi, URL, dan Breadcrumb

### 7.1 Struktur navigasi utama

| Label | URL | File sumber |
|---|---|---|
| Beranda | `/` | `src/pages/index.astro` |
| Tentang Kami | `/tentang-kami/` | `src/pages/tentang-kami.astro` |
| Layanan | `/layanan/` | `src/pages/layanan.astro` |
| Paket | `/paket/` | `src/pages/paket.astro` |
| Galeri | `/galeri/` | `src/pages/galeri.astro` |
| Blog | `/blog/` | `src/pages/blog.astro` |
| Kontak | `/kontak/` | `src/pages/kontak.astro` |

Contoh URL detail:

- `/layanan/desain-rumah/`
- `/layanan/desain-interior/`
- `/paket/paket-desain-rumah/`
- `/blog/panduan-memilih-arsitek/`

### 7.2 Ketentuan URL clean

- URL tidak boleh menampilkan `.html`.
- Gunakan huruf kecil.
- Gunakan tanda hubung untuk pemisah kata.
- Hindari parameter yang tidak diperlukan.
- Hindari slug terlalu panjang, duplikat, atau tidak deskriptif.
- Gunakan trailing slash secara konsisten.
- Pastikan canonical URL sesuai dengan URL final.
- URL tidak boleh bergantung pada penamaan `index.astro`; nama file sumber mengikuti Bagian 5.4.

### 7.3 Breadcrumb

- Breadcrumb wajib muncul di seluruh halaman, tepat di bawah area navbar/header dan sebelum konten utama. Pada desktop (navigasi berupa sidebar), breadcrumb berada di bagian paling atas area konten di sebelah kanan sidebar; pada mobile, breadcrumb berada tepat di bawah header atas.
- Breadcrumb harus menunjukkan hierarki halaman.
- Halaman beranda dapat menggunakan breadcrumb `Beranda`.
- Halaman detail harus memiliki jalur yang benar, misalnya `Beranda > Layanan > Desain Rumah`.
- Item halaman saat ini ditampilkan sebagai teks aktif, bukan link.
- Breadcrumb harus mudah digunakan pada mobile dan tidak menyebabkan overflow.
- Tambahkan schema `BreadcrumbList` yang sesuai dengan breadcrumb yang terlihat.

## 8. Detail Kebutuhan Halaman

### 8.1 Halaman Beranda (`/`)

File sumber: `src/pages/index.astro`

Urutan section wajib:

1. **Hero**
   - Headline utama yang menjelaskan Bytecture sebagai jasa arsitek online untuk Indonesia.
   - Subheadline yang menjelaskan manfaat utama secara konkret.
   - CTA utama: Konsultasi via WhatsApp.
   - CTA sekunder: Lihat Portofolio atau Lihat Layanan.
   - Visual hero berupa gambar arsitektur berkualitas dan relevan.
   - Hindari klaim seperti “terbaik”, “nomor satu”, atau “paling murah” tanpa bukti.

2. **Ringkasan Tentang Kami**
   - Ringkasan singkat profil Bytecture.
   - Fokus pada pendekatan layanan, proses kolaborasi, dan kemudahan konsultasi online.
   - Tombol menuju halaman Tentang Kami.

3. **Mengapa Memilih Kami**
   - Tampilkan alasan yang benar-benar dapat dipenuhi oleh operasional Bytecture.
   - Contoh aspek: konsultasi online, proses komunikasi terarah, pilihan layanan yang jelas, dan dokumentasi pekerjaan.
   - Jangan mengarang sertifikasi, pengalaman, jumlah klien, atau jaminan.

4. **3 Layanan Terbaik**
   - Tampilkan tiga layanan unggulan.
   - Setiap card memiliki gambar WebP, nama layanan, deskripsi singkat, dan tombol Detail Layanan.
   - Card mengarah ke halaman detail layanan.

5. **Galeri Preview**
   - Tampilkan pilihan visual proyek atau konsep desain.
   - Setiap gambar dapat diklik untuk membuka preview/lightbox.
   - Sediakan tombol menuju halaman Galeri.
   - Beri label kategori atau tipe ruang bila datanya tersedia.
   - Jangan mengklaim gambar konsep sebagai proyek realisasi.

6. **3 Paket Rekomendasi**
   - Tampilkan tiga paket yang ditetapkan sebagai rekomendasi.
   - Setiap card berisi nama paket, ringkasan ruang lingkup, fitur/keluaran, dan tombol Detail Paket.
   - Harga hanya ditampilkan jika sudah ditentukan dan disetujui pemilik brand. Jika belum ada data harga, jangan mengarang harga; gunakan CTA untuk meminta penawaran.

7. **3 Card Blog**
   - Tampilkan tiga artikel terbaru/unggulan.
   - Card berisi thumbnail, kategori, tanggal publikasi, judul, ringkasan, dan tombol Baca Selengkapnya.
   - Semua card menuju halaman detail blog.

8. **3 Card Testimoni**
   - Tampilkan tiga testimoni dari klien yang benar-benar memberikan izin untuk dipublikasikan.
   - Isi minimal: kutipan, nama/inisial sesuai izin, dan konteks layanan jika tersedia.
   - Jika belum ada testimoni valid, jangan membuat testimoni fiktif. Gunakan section alternatif seperti “Komitmen Layanan” atau sembunyikan section sampai konten tersedia.

9. **FAQ (5 pertanyaan)**
   - Gunakan accordion yang aksesibel.
   - Jawaban singkat, jelas, dan faktual.
   - Pertanyaan dapat mencakup layanan online, tahapan konsultasi, cakupan wilayah, revisi, dan cara memperoleh penawaran. Jawaban final harus mengikuti kebijakan operasional Bytecture.

10. **CTA**
    - Ajakan konsultasi desain.
    - Tombol WhatsApp dengan pesan awal yang relevan.

11. **Footer**
    - Logo dan ringkasan brand.
    - Navigasi halaman.
    - Informasi kontak.
    - Link sosial media jika akun resmi tersedia.
    - Copyright dinamis berdasarkan tahun saat ini.
    - Link kebijakan privasi bila halaman tersebut dibuat; jangan membuat link kosong.

### 8.2 Halaman Tentang Kami (`/tentang-kami/`)

File sumber: `src/pages/tentang-kami.astro`

Urutan section:

1. Hero dengan judul dan deskripsi tentang Bytecture.
2. Profil perusahaan: siapa Bytecture, fokus layanan, pendekatan, dan cakupan online Indonesia.
3. Mengapa Memilih Kami: alasan berbasis proses dan manfaat yang dapat dibuktikan.
4. Keunggulan: tampilkan keunggulan proses, komunikasi, dokumentasi, dan pendekatan desain yang benar-benar tersedia.
5. FAQ sebanyak lima pertanyaan.
6. CTA konsultasi.
7. Footer.

Catatan: Jangan mengarang tahun berdiri, alamat kantor, struktur tim, nama arsitek, lisensi, sertifikasi, penghargaan, jumlah proyek, atau statistik. Gunakan placeholder yang jelas pada data yang belum diberikan dan tandai untuk dilengkapi pemilik brand sebelum publikasi.

### 8.3 Halaman Layanan (`/layanan/`)

File sumber: `src/pages/layanan.astro`

Urutan section:

1. Hero pengenalan jasa arsitektur.
2. Daftar card layanan.
3. FAQ lima pertanyaan.
4. CTA.
5. Footer.

Setiap card layanan memiliki:
- Gambar WebP.
- Nama layanan.
- Deskripsi ringkas.
- Ringkasan manfaat atau kebutuhan yang ditangani.
- Tombol Detail Layanan.
- Link menuju route detail layanan yang sesuai.

Contoh kategori layanan yang dapat disiapkan sebagai draft konten, untuk dikonfirmasi pemilik:
- Desain rumah tinggal.
- Desain arsitektur bangunan komersial.
- Desain interior.
- Renovasi dan pengembangan bangunan.
- Konsultasi dan perencanaan desain.
- Gambar kerja atau dokumen teknis, hanya jika layanan ini memang disediakan.

#### Halaman Detail Layanan

File sumber: `src/pages/layanan/[slug].astro` (bukan `index.astro`).

Setiap detail layanan minimal berisi:
- Breadcrumb.
- Hero spesifik layanan.
- Penjelasan kebutuhan yang dapat dibantu.
- Ruang lingkup pekerjaan.
- Tahapan/proses layanan.
- Hasil atau deliverables yang akan diterima klien, sesuai layanan sebenarnya.
- Informasi hal yang perlu disiapkan klien.
- FAQ terkait layanan.
- CTA WhatsApp.
- Link ke layanan terkait.

Jangan menjanjikan dokumen teknis, pengurusan izin, pengawasan konstruksi, atau layanan lain kecuali telah dikonfirmasi sebagai bagian dari penawaran Bytecture.

### 8.4 Halaman Paket (`/paket/`)

File sumber: `src/pages/paket.astro`

Urutan section:

1. Hero pengenalan paket jasa.
2. Daftar card paket.
3. FAQ lima pertanyaan.
4. CTA.
5. Footer.

Setiap card paket memiliki:
- Nama paket.
- Deskripsi singkat.
- Target kebutuhan/jenis proyek.
- Daftar ruang lingkup atau deliverables.
- Informasi batasan paket jika sudah ditentukan.
- Harga hanya jika sudah tersedia dan disetujui.
- Tombol Detail Paket.

Contoh struktur paket sebagai draft yang wajib dikonfirmasi:
- Paket Konsultasi.
- Paket Desain Basic.
- Paket Desain Lengkap.
- Paket Custom.

#### Halaman Detail Paket

File sumber: `src/pages/paket/[slug].astro` (bukan `index.astro`).

Setiap detail paket minimal memuat:
- Hero dan ringkasan paket.
- Cocok untuk siapa.
- Daftar pekerjaan yang termasuk.
- Daftar pekerjaan yang tidak termasuk, jika telah ditetapkan.
- Deliverables.
- Tahapan kerja.
- Ketentuan revisi dan waktu pengerjaan hanya jika sudah dikonfirmasi.
- Informasi harga atau CTA minta penawaran.
- FAQ terkait.
- CTA WhatsApp.

Jangan membuat harga, jumlah revisi, durasi pengerjaan, ukuran bangunan, atau batas layanan berdasarkan asumsi.

### 8.5 Halaman Galeri (`/galeri/`)

File sumber: `src/pages/galeri.astro`

Urutan section:

1. Hero pengenalan galeri.
2. Grid card gambar.
3. FAQ lima pertanyaan.
4. CTA.
5. Footer.

Ketentuan galeri:
- Gambar menggunakan WebP.
- Setiap card menampilkan gambar dan judul/kategori bila datanya tersedia.
- Klik gambar membuka modal/lightbox.
- Lightbox mendukung tombol tutup, navigasi gambar sebelumnya/berikutnya, dan tombol Escape.
- Klik area backdrop dapat menutup preview, tanpa membuat interaksi tidak sengaja pada gambar.
- Sediakan alt text deskriptif.
- Jika memungkinkan, sediakan filter kategori seperti Rumah Tinggal, Interior, Komersial, dan Konsep Desain. Filter hanya ditampilkan bila data kategori tersedia.
- Beri penanda “Konsep Desain” untuk gambar konseptual atau ilustrasi. Jangan menyebut visual ilustrasi sebagai proyek klien yang telah dibangun.
- Optimalkan ukuran gambar dan lazy loading untuk gambar di luar viewport.

### 8.6 Halaman Blog (`/blog/`)

File sumber: `src/pages/blog.astro`

Urutan section:

1. Hero blog.
2. Grid card artikel.
3. FAQ lima pertanyaan.
4. CTA.
5. Footer.

Setiap card artikel berisi:
- Thumbnail WebP.
- Kategori.
- Judul.
- Ringkasan.
- Penulis hanya jika nama penulis telah ditentukan.
- Tanggal publikasi dan tanggal pembaruan bila relevan.
- Tombol Baca Selengkapnya.

#### Halaman Detail Blog

File sumber: `src/pages/blog/[slug].astro` (bukan `index.astro`).

Setiap artikel minimal memiliki:
- Breadcrumb.
- Judul H1 yang unik.
- Kategori, penulis, tanggal publikasi, dan tanggal pembaruan yang valid.
- Gambar utama WebP dengan alt text.
- Daftar isi untuk artikel panjang bila membantu.
- Konten artikel terstruktur menggunakan H2 dan H3.
- Jawaban ringkas/answer-first pada bagian awal artikel untuk menjawab intent utama.
- Contoh, langkah, pertimbangan, atau informasi praktis yang relevan.
- FAQ artikel bila benar-benar menjawab pertanyaan pembaca.
- Artikel terkait.
- CTA konsultasi yang kontekstual.
- Schema Article atau BlogPosting yang sesuai.

Standar editorial:
- Tulis untuk membantu pembaca, bukan sekadar mengulang keyword.
- Hindari keyword stuffing, konten tipis, dan artikel yang dibuat massal tanpa nilai tambah.
- Klaim teknis harus akurat, dapat diverifikasi, dan tidak memberi kesan sebagai nasihat legal/struktural profesional jika bukan kewenangan penulis.
- Jangan menulis seolah Bytecture telah menyelesaikan proyek tertentu jika belum ada bukti.
- Cantumkan sumber rujukan untuk informasi teknis yang membutuhkan otoritas.
- Artikel harus orisinal dan memiliki tujuan pencarian yang jelas.

### 8.7 Halaman Kontak (`/kontak/`)

File sumber: `src/pages/kontak.astro`

Urutan section:

1. Hero kontak dengan ajakan konsultasi.
2. Formulir kontak.
3. Card sosial media: Instagram, TikTok, Facebook, X, dan YouTube.
4. Informasi kontak/WhatsApp.
5. Footer.

Nomor admin resmi:
**083115542771**

Format link WhatsApp:
`https://wa.me/6283115542771`

Formulir minimal:
- Nama lengkap.
- Nomor WhatsApp.
- Email (opsional jika tidak diperlukan).
- Kota/provinsi.
- Jenis kebutuhan/proyek.
- Pesan atau deskripsi kebutuhan.
- Checkbox persetujuan bahwa pengguna bersedia dihubungi.

Perilaku formulir:
- Validasi field wajib di sisi klien.
- Tampilkan pesan validasi yang mudah dipahami.
- Setelah lolos validasi, susun isi pesan dan arahkan pengguna ke WhatsApp admin menggunakan `wa.me` dengan pesan ter-encode.
- Jangan mengklaim formulir terkirim atau tersimpan di database.
- Beri keterangan bahwa pesan akan diteruskan melalui WhatsApp dan pengguna perlu menekan tombol kirim pada aplikasi WhatsApp.
- Lindungi privasi: jangan memasukkan data sensitif yang tidak diperlukan ke dalam pesan.
- Link sosial media harus menggunakan URL akun resmi yang telah diberikan pemilik. Jika belum ada, gunakan placeholder internal dan jangan tampilkan link palsu atau `#`.

### 8.8 Halaman 404 (`/404`)

File sumber: `src/pages/404.astro`

- Pesan jelas bahwa halaman tidak ditemukan, dengan bahasa yang ramah.
- Tombol kembali ke Beranda dan link ke Layanan atau Paket.
- CTA WhatsApp untuk bantuan.
- Gunakan `noindex`, jangan masukkan ke `sitemap.xml`.
- Tetap memakai layout utama (sidebar desktop, bottom navigation mobile, breadcrumb, floating buttons).

## 9. Floating Action Buttons

### 9.1 Floating WhatsApp

- Wajib tampil di seluruh halaman.
- Posisi di pojok kanan bawah viewport.
- Gunakan nomor admin resmi `083115542771`.
- Link tujuan: `https://wa.me/6283115542771`.
- Gunakan pesan awal yang relevan dengan halaman bila memungkinkan.
- Memiliki label aksesibel seperti “Chat WhatsApp Bytecture”.
- Tidak boleh menutupi tombol, konten penting, atau mobile bottom navigation.
- Pada mobile, atur posisi dan jarak dari bottom navigation serta safe area.

### 9.2 Back to Top

- Wajib tampil di seluruh halaman.
- Berada di atas tombol floating WhatsApp pada sisi kanan.
- Saat halaman berada di bagian paling atas, tombol dapat disembunyikan atau dibuat tidak dominan.
- Saat diklik, scroll kembali ke bagian atas dengan perilaku smooth.
- Hormati preferensi `prefers-reduced-motion`.
- Berikan `aria-label="Kembali ke atas"`.

## 10. Konten, Data, dan Pengelolaan Statis

- Semua konten statis harus dipisahkan dari template halaman.
- Gunakan file data untuk layanan, paket, galeri, artikel, FAQ, dan testimoni.
- Setiap data harus memiliki slug unik, judul, deskripsi, gambar, alt text, dan metadata yang relevan.
- Halaman detail dibuat menggunakan dynamic routes Astro dan `getStaticPaths()` atau pendekatan static routing yang sesuai.
- Pastikan slug yang dirujuk card sama dengan route detail.
- Jangan menampilkan data placeholder kepada pengunjung pada hasil akhir.
- Beri komentar `TODO: KONFIRMASI PEMILIK BYTECTURE` pada data bisnis yang belum tersedia.
- Jika data belum tersedia, gunakan konten netral yang tidak mengandung klaim palsu atau sembunyikan elemen yang membutuhkan data tersebut.

## 11. Standar Gambar dan Media

Ketentuan wajib:
- Semua gambar konten website menggunakan format **WebP (`.webp`)**.
- Ukuran setiap file gambar harus **di bawah 100 KB** (strictly less than 100 KB).
- Target kualitas visual tetap baik setelah kompresi.
- Jangan menggunakan gambar PNG/JPG sebagai aset final yang dipanggil langsung oleh halaman.
- Logo dapat menggunakan SVG jika berupa logo vektor; ketentuan WebP berlaku untuk gambar/foto.
- Gunakan dimensi yang sesuai dengan kebutuhan tampilan dan hindari mengirim gambar terlalu besar.
- Gunakan `width` dan `height` atau `aspect-ratio` untuk mencegah layout shift.
- Gunakan `loading="lazy"` untuk gambar di bawah fold.
- Prioritaskan gambar hero/LCP dengan pemuatan yang tepat; jangan lazy-load gambar LCP utama.
- Gunakan `srcset`/`sizes` bila menghasilkan beberapa ukuran gambar yang bermanfaat.
- Berikan nama file deskriptif dan alt text yang menjelaskan isi gambar.
- Jangan memasukkan teks penting ke dalam gambar.
- Hindari gambar stok yang tidak relevan dengan layanan arsitektur.

### Pemeriksaan aset

Buat proses pemeriksaan aset sebelum final:
1. Scan seluruh aset gambar yang digunakan website.
2. Pastikan formatnya WebP.
3. Pastikan ukuran masing-masing file kurang dari 100 KB.
4. Laporkan aset yang melanggar.
5. Kompres atau ganti aset yang melanggar.
6. Pastikan tidak ada gambar yang gagal dimuat.

Jika kualitas visual tidak dapat dipertahankan di bawah 100 KB, pilih dimensi yang lebih tepat, optimalkan encoding, atau gunakan beberapa ukuran responsif. Jangan mengabaikan batas ukuran.

## 12. SEO, AEO, dan GEO — Standar Implementasi 2026

Penerapan harus mengikuti dokumentasi mesin pencari dan praktik teknis yang berlaku saat implementasi. Jangan menjanjikan ranking, featured snippet, AI Overview, atau kutipan dari sistem AI karena hal tersebut tidak dapat dijamin.

### 12.1 SEO teknis

- Gunakan semantic HTML: `header`, `nav`, `main`, `section`, `article`, `aside`, dan `footer` sesuai fungsi.
- Setiap halaman memiliki `<title>` unik.
- Setiap halaman memiliki meta description unik.
- Title disarankan ringkas dan deskriptif, idealnya sekitar 50–60 karakter jika sesuai konteks.
- Meta description harus menjelaskan isi halaman secara akurat; target ringkas sekitar 120–155 karakter dan tidak dipaksakan jika pesan membutuhkan panjang berbeda.
- Gunakan satu H1 utama yang sesuai dengan intent halaman.
- Susun heading H2/H3 secara hierarkis.
- Tambahkan canonical URL absolut pada setiap halaman.
- Tambahkan Open Graph dan Twitter/X Card metadata.
- Sediakan file `sitemap.xml` yang dihasilkan otomatis saat build sesuai Bagian 5.4.2, dengan URL absolut, trailing slash, dan identik dengan canonical.
- Sediakan `robots.txt` yang tidak memblokir halaman penting dan memuat baris `Sitemap: https://bytecture.web.id/sitemap.xml`.
- Gunakan URL clean dan konsisten.
- Pastikan tidak ada halaman penting yang orphan tanpa internal link.
- Gunakan internal linking kontekstual antar halaman layanan, paket, galeri, dan artikel.
- Terapkan redirect bila slug berubah setelah website dipublikasikan.
- Hindari halaman duplikat dan metadata berulang.
- Pastikan halaman dapat dirender dan diindeks tanpa ketergantungan pada interaksi JavaScript.
- Tambahkan favicon dan metadata identitas brand.
- Verifikasi sitemap dan indexing melalui Google Search Console setelah domain aktif.

### 12.2 SEO on-page dan search intent

- Riset keyword dilakukan berdasarkan layanan yang benar-benar tersedia.
- Target keyword dapat mencakup jasa arsitek online, jasa desain rumah, jasa desain arsitektur, jasa desain interior, dan variasi lokasi/layanan yang relevan.
- Jangan membuat halaman kota secara massal hanya dengan mengganti nama kota.
- Halaman yang menargetkan wilayah tertentu harus memiliki informasi lokal yang benar-benar unik dan dapat dibuktikan.
- Gunakan variasi istilah secara alami, bukan pengulangan keyword.
- Optimalkan judul, heading, paragraf pembuka, gambar, alt text, dan anchor text.
- Setiap halaman harus memiliki satu tujuan pencarian utama yang jelas.
- Gunakan CTA yang sesuai dengan tahap perjalanan calon klien.

### 12.3 AEO (Answer Engine Optimization)

- Jawab pertanyaan utama pengguna secara langsung di bagian awal halaman atau artikel.
- Gunakan heading berbentuk pertanyaan jika sesuai dengan intent pencarian.
- Buat definisi dan penjelasan yang ringkas, faktual, serta mudah dipahami.
- Gunakan daftar langkah, poin, dan tabel jika membantu menjelaskan informasi.
- FAQ harus terlihat oleh pengguna dan jawabannya harus sesuai dengan isi halaman.
- Hindari jawaban generik atau klaim tanpa dasar.
- Pastikan jawaban dapat dipahami tanpa harus membaca bagian lain terlebih dahulu.

### 12.4 GEO (Generative Engine Optimization)

- Bangun identitas entitas Bytecture secara konsisten di seluruh website.
- Gunakan nama brand, deskripsi bisnis, jenis layanan, cakupan layanan, dan informasi kontak yang konsisten.
- Sediakan halaman Tentang Kami dan Kontak yang jelas.
- Tulis konten yang spesifik, informatif, memiliki konteks, dan menjawab kebutuhan nyata.
- Cantumkan penulis, tanggal publikasi/pembaruan, dan sumber jika relevan.
- Gunakan data terstruktur yang valid dan sama dengan konten yang terlihat.
- Hindari klaim yang tidak dapat diverifikasi dan konten yang dibuat hanya untuk memanipulasi mesin generatif.
- Jangan menambahkan file atau markup khusus yang tidak didukung dokumentasi resmi hanya karena disebut sebagai “trik GEO”.

### 12.5 Structured data / Schema.org

Gunakan JSON-LD yang relevan dan valid, antara lain:
- `Organization` atau `ProfessionalService` sesuai identitas bisnis yang benar.
- `WebSite`.
- `WebPage`.
- `BreadcrumbList`.
- `Service` untuk halaman layanan jika datanya sesuai.
- `Article` atau `BlogPosting` untuk artikel.
- `ImageObject` bila diperlukan.
- `FAQPage` hanya jika sesuai dengan kebijakan hasil kaya Google yang berlaku saat implementasi dan FAQ benar-benar terlihat di halaman.

Ketentuan schema:
- Data schema harus sesuai dengan konten yang terlihat.
- Jangan menambahkan rating, review, harga, alamat, jam operasional, atau informasi lain yang tidak benar-benar tersedia.
- Jangan menandai testimoni buatan sebagai review asli.
- Validasi JSON-LD menggunakan Schema Markup Validator dan Rich Results Test yang relevan.
- Structured data tidak menjamin tampilan rich result.

### 12.6 SEO lokal dan cakupan nasional

- Bytecture melayani konsultasi online untuk seluruh Indonesia, sesuai informasi bisnis yang diberikan.
- Jangan mengarang alamat kantor atau membuat Google Business Profile seolah terdapat kantor fisik jika tidak ada.
- Jangan membuat halaman cabang/kota palsu.
- Jika menargetkan kota tertentu, gunakan konten yang memberi nilai lokal nyata dan hindari doorway pages.
- Informasi nomor WhatsApp harus konsisten.

## 13. Performa dan Core Web Vitals

Target kualitas:
- Lighthouse Performance: target 90+ pada kondisi pengujian yang wajar.
- Accessibility: target 90+.
- Best Practices: target 90+.
- SEO: target 95+.
- Target Core Web Vitals berdasarkan metrik lapangan: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75 jika data lapangan tersedia.

Teknik optimasi:
- Minimalkan JavaScript client-side.
- Hindari library berat.
- Kompres seluruh gambar WebP hingga di bawah 100 KB.
- Gunakan font lokal/subset atau strategi font yang efisien bila memungkinkan.
- Terapkan `font-display: swap`.
- Hindari layout shift.
- Gunakan lazy loading untuk media non-kritis.
- Hindari autoplay video dan animasi berat.
- Gunakan CSS yang terstruktur dan minimalkan stylesheet yang tidak terpakai.
- Pastikan tidak ada error console atau request aset yang gagal.
- Uji performa pada mobile dan desktop.

## 14. Accessibility dan Usability

- Semua fungsi utama dapat digunakan dengan keyboard.
- Gunakan focus state yang terlihat.
- Kontras warna teks dan latar harus memadai.
- Semua gambar informatif memiliki alt text; gambar dekoratif menggunakan alt kosong.
- Semua tombol dan link memiliki nama yang jelas.
- Form memiliki label yang terhubung dengan input.
- Error validasi dapat dibaca screen reader.
- Accordion FAQ menggunakan elemen/button yang aksesibel dan atribut state yang sesuai.
- Modal galeri mengelola fokus, mendukung Escape, dan memiliki tombol close yang jelas.
- Hormati `prefers-reduced-motion`.
- Jangan mengandalkan warna saja untuk menunjukkan state aktif atau error.

## 15. Keamanan dan Privasi

- Jangan menaruh secret, API key, atau kredensial di frontend.
- Jangan mengumpulkan data yang tidak diperlukan.
- Jelaskan bahwa formulir akan membuka WhatsApp dan tidak menyimpan data ke database Bytecture.
- Gunakan link eksternal dengan atribut keamanan yang sesuai saat dibuka di tab baru.
- Validasi input untuk pengalaman pengguna, tetapi jangan mengklaim validasi frontend sebagai perlindungan server.
- Tambahkan halaman kebijakan privasi hanya jika dibutuhkan dan isi berdasarkan praktik data yang benar-benar dilakukan. Jika dibuat, gunakan file `src/pages/kebijakan-privasi.astro` (URL `/kebijakan-privasi/`) dan masukkan ke `sitemap.xml`.
- Jangan memasang analytics atau tracking tanpa persetujuan/pengaturan privasi yang sesuai.

## 16. Integrasi WhatsApp

Nomor admin resmi:
- Nomor tampilan: `083115542771`
- Nomor internasional untuk URL: `6283115542771`
- URL dasar: `https://wa.me/6283115542771`

Contoh pesan awal:
`Halo Bytecture, saya ingin berkonsultasi mengenai kebutuhan desain arsitektur.`

Pesan dapat dibuat kontekstual, misalnya menyertakan nama layanan atau paket yang sedang dilihat. Encode teks menggunakan `encodeURIComponent()` dan jangan menambahkan data sensitif secara otomatis.

## 17. Konten yang Masih Harus Dikonfirmasi Pemilik Brand

Agen AI tidak boleh mengarang data berikut. Buat daftar placeholder internal dan minta konfirmasi:
- Logo final dan brand guideline.
- Deskripsi resmi perusahaan.
- Nama pendiri/tim/arsitek dan profil profesional yang boleh dipublikasikan.
- Alamat kantor (jika ada dan memang ingin ditampilkan).
- Daftar layanan final dan ruang lingkup masing-masing.
- Daftar paket, harga, deliverables, jumlah revisi, dan durasi.
- Portofolio proyek asli dan izin publikasi.
- Testimoni asli dan izin publikasi.
- Nama penulis artikel.
- Link Instagram, TikTok, Facebook, X, dan YouTube resmi.
- Email dan kanal kontak lain jika tersedia.
- Kebijakan konsultasi, pembayaran, revisi, dan pembatalan.
- Sertifikasi, lisensi, atau keanggotaan profesional jika ingin ditampilkan dan dapat diverifikasi.

## 18. Acceptance Criteria

Project dinyatakan memenuhi kebutuhan apabila:

### Struktur dan navigasi
- [ ] Tujuh halaman utama tersedia dan dapat diakses.
- [ ] Nama file setiap halaman di `src/pages/` sesuai nama halamannya (`tentang-kami.astro`, `layanan.astro`, `paket.astro`, `galeri.astro`, `blog.astro`, `kontak.astro`).
- [ ] Hanya `src/pages/index.astro` yang menggunakan nama `index.astro`; tidak ada folder halaman yang berisi `index.astro`.
- [ ] Halaman detail memakai `[slug].astro` di folder `layanan/`, `paket/`, dan `blog/`.
- [ ] Halaman 404 tersedia dan tidak diindeks.
- [ ] Halaman detail layanan tersedia dan seluruh tombol detail bekerja.
- [ ] Halaman detail paket tersedia dan seluruh tombol detail bekerja.
- [ ] Halaman detail blog tersedia dan seluruh card artikel menuju slug yang benar.
- [ ] Seluruh URL clean tanpa `.html`.
- [ ] Breadcrumb tampil di setiap halaman di bawah navbar/header.
- [ ] Tidak ada link navigasi yang mengarah ke `#`, route kosong, atau halaman 404 yang tidak disengaja.

### Layout dan responsivitas
- [ ] Desktop menampilkan sidebar di sisi kiri.
- [ ] Mobile menampilkan bottom navigation bergaya aplikasi dengan ikon dan label singkat.
- [ ] Seluruh halaman mengikuti gambar referensi yang diberikan.
- [ ] Tidak ada horizontal overflow pada viewport yang diuji.
- [ ] Konten tidak tertutup sidebar, bottom navigation, atau floating buttons.

### Fitur
- [ ] Galeri dapat membuka dan menutup preview/lightbox.
- [ ] Navigasi lightbox bekerja dengan baik jika tersedia banyak gambar.
- [ ] FAQ accordion berfungsi.
- [ ] Form kontak melakukan validasi dan menyusun pesan WhatsApp.
- [ ] Semua CTA WhatsApp menggunakan nomor resmi yang benar.
- [ ] Floating WhatsApp tampil di seluruh halaman.
- [ ] Back to Top berada di atas tombol WhatsApp dan berfungsi di seluruh halaman.
- [ ] Sosial media hanya menggunakan URL resmi yang telah dikonfirmasi.

### Media
- [ ] Semua gambar konten menggunakan WebP.
- [ ] Setiap file gambar berukuran kurang dari 100 KB.
- [ ] Alt text tersedia dan relevan.
- [ ] Tidak ada gambar yang rusak atau gagal dimuat.

### SEO dan kualitas
- [ ] Setiap halaman memiliki title, meta description, canonical, dan H1 unik.
- [ ] Open Graph dan Twitter/X metadata tersedia.
- [ ] `https://bytecture.web.id/sitemap.xml` dapat diakses dan berupa XML valid.
- [ ] `sitemap.xml` memuat seluruh halaman utama dan seluruh halaman detail, tanpa halaman 404, `noindex`, atau redirect.
- [ ] URL pada `sitemap.xml` identik dengan canonical masing-masing halaman.
- [ ] `robots.txt` tersedia dan memuat baris `Sitemap:` yang mengarah ke `sitemap.xml`.
- [ ] Schema markup valid dan sesuai konten.
- [ ] Internal linking berjalan.
- [ ] Tidak ada klaim bisnis atau testimoni fiktif.
- [ ] Lighthouse memenuhi target yang ditetapkan sejauh kondisi pengujian memungkinkan.
- [ ] Tidak ada error build, error console, atau broken links.

## 19. Tahapan Pengerjaan yang Disarankan

1. **Audit referensi dan setup**
   - Periksa gambar referensi.
   - Inisialisasi project Astro.
   - Siapkan struktur folder, global CSS, dan design tokens.
   - Atur `astro.config.mjs` (`site`, `trailingSlash`, `build.format`) dan buat kerangka file di `src/pages/` sesuai Bagian 5.4.

2. **Fondasi layout**
   - Bangun MainLayout.
   - Implementasikan sidebar desktop.
   - Implementasikan bottom navigation mobile.
   - Implementasikan breadcrumb, footer, floating WhatsApp, dan Back to Top.

3. **Komponen dan data**
   - Buat komponen card, FAQ, CTA, galeri, dan form.
   - Siapkan file data statis.
   - Pastikan tidak ada konten bisnis yang dikarang.

4. **Implementasi halaman**
   - Bangun Beranda, Tentang Kami, Layanan, Paket, Galeri, Blog, dan Kontak dengan nama file sesuai Bagian 5.4.
   - Bangun halaman detail layanan, paket, dan artikel.

5. **SEO dan konten**
   - Tambahkan metadata per halaman.
   - Implementasikan schema, `sitemap.xml` (endpoint `sitemap.xml.ts`), `robots.txt`, canonical, dan internal linking.
   - Review kualitas konten dan intent pencarian.

6. **Optimasi aset dan performa**
   - Konversi semua gambar ke WebP.
   - Pastikan ukuran setiap file di bawah 100 KB.
   - Optimalkan font, CSS, dan JavaScript.

7. **QA dan finalisasi**
   - Uji desktop, tablet, dan mobile.
   - Uji seluruh link, form, lightbox, FAQ, dan tombol floating.
   - Jalankan build production.
   - Jalankan audit Lighthouse dan validasi schema.
   - Perbaiki seluruh error sebelum penyerahan.

## 20. Instruksi Khusus untuk Agen AI Antigravity

Bertindak sebagai senior frontend developer, UI/UX implementer, dan technical SEO specialist.

Sebelum menulis kode:
1. Baca PRD ini secara menyeluruh.
2. Periksa gambar referensi desain yang diunggah pengguna dan jadikan acuan visual utama.
3. Audit file project yang sudah ada agar tidak menimpa pekerjaan pengguna tanpa alasan.
4. Identifikasi data bisnis yang belum tersedia dan gunakan placeholder internal yang aman, bukan fakta rekaan.
5. Susun rencana implementasi singkat sebelum mulai membangun.

Saat implementasi:
- Gunakan Astro dan CSS murni saja untuk styling.
- Jangan gunakan Tailwind CSS, Bootstrap, atau framework CSS lainnya.
- Jangan menambahkan backend, database, CMS, atau sistem login.
- Bangun seluruh halaman dan route detail yang disyaratkan.
- Beri nama file setiap halaman sesuai nama halamannya (misalnya `tentang-kami.astro`, `layanan.astro`). **Hanya Beranda yang boleh bernama `index.astro`.** Jangan membuat `index.astro` di dalam folder halaman mana pun.
- Buat file `sitemap.xml` yang dihasilkan otomatis saat build (`src/pages/sitemap.xml.ts`) dan daftarkan di `robots.txt`. Jangan menjalankan dua mekanisme sitemap sekaligus.
- Terapkan sidebar kiri di desktop dan bottom navigation di mobile.
- Pastikan breadcrumb berada di bawah navbar/header pada semua halaman.
- Pasang floating WhatsApp di kanan bawah dan Back to Top tepat di atasnya pada semua halaman.
- Gunakan nomor WhatsApp resmi `083115542771` dengan format URL `6283115542771`.
- Semua URL harus clean tanpa `.html`.
- Semua gambar konten wajib WebP dan setiap file harus berukuran kurang dari 100 KB.
- Jangan membuat harga, testimoni, portofolio, sertifikasi, statistik, identitas staf, alamat, atau klaim perusahaan yang tidak diberikan.
- Pastikan semua tombol memiliki fungsi nyata. Jangan membuat tombol dekoratif yang tidak bekerja.
- Pastikan semua halaman memiliki metadata SEO unik dan schema yang sesuai.
- Utamakan aksesibilitas, performa, semantic HTML, dan maintainability.
- Jangan menghapus atau menyederhanakan section wajib dalam PRD tanpa alasan teknis yang dijelaskan.
- Jangan menganggap halaman selesai hanya karena tampilannya sudah terbentuk; lakukan pengujian interaksi dan build.

Setelah implementasi:
1. Jalankan build production dan perbaiki error hingga berhasil.
2. Uji semua route utama dan detail.
3. Uji layout desktop dan mobile.
4. Uji seluruh interaksi dan link.
5. Audit semua gambar untuk format WebP dan ukuran di bawah 100 KB.
6. Audit penamaan file di `src/pages/`: pastikan hanya `index.astro` milik Beranda yang bernama `index.astro` dan semua halaman lain sesuai Bagian 5.4.
7. Buka `/sitemap.xml` pada hasil build/preview dan pastikan semua URL halaman utama dan detail tercantum serta valid.
8. Audit metadata, canonical, `robots.txt`, dan structured data.
9. Laporkan hasil pekerjaan, daftar file/halaman yang dibuat, hasil pengujian, dan data placeholder yang masih perlu diberikan pemilik Bytecture.

**Prioritas utama:** kesesuaian dengan referensi visual, struktur halaman lengkap, navigasi desktop/mobile yang benar, pengalaman pengguna yang baik, aset ringan, dan implementasi SEO yang akurat. Jangan mengorbankan kebenaran informasi demi tampilan atau keyword.

## 21. Catatan Revisi

### Versi 1.1 (30 Oktober 2026)

Ketentuan baru:
- Penamaan file halaman wajib sesuai nama halaman; hanya Beranda yang memakai `index.astro` (Bagian 5.4.1).
- File `sitemap.xml` wajib ada dan dihasilkan otomatis saat build, dilengkapi aturan isi, format, dan pendaftaran di `robots.txt` (Bagian 5.4.2).

Penyempurnaan:
- Menambahkan daftar isi, nomor versi dokumen, dan tabel pemetaan route ke file sumber.
- Memperbarui struktur direktori `src/pages/`, tabel navigasi, dan keterangan file sumber pada setiap halaman.
- Menambahkan konfigurasi minimal `astro.config.mjs` agar URL clean dengan trailing slash konsisten.
- Memperjelas posisi breadcrumb pada desktop (sidebar) dan mobile.
- Memperjelas jalur akses Tentang Kami dan Blog pada tampilan mobile.
- Menambahkan halaman 404 dan penamaan file halaman kebijakan privasi (jika dibuat).
- Menyesuaikan acceptance criteria, tahapan pengerjaan, dan instruksi agen AI dengan ketentuan baru.
