
# Dokumentasi vestia zeta-website

## Deskripsi

Aplikasi ini adalah website e-commerce yang menampilkan produk dari **Vestia Zeta** dengan animasi dinamis menggunakan **GSAP**. Setiap produk dapat ditambahkan ke favorit, dan harga ditampilkan dalam format mata uang IDR. Halaman produk menggunakan desain modern dengan efek hover dan klik yang memberikan pengalaman visual yang menarik.

---

## Fitur

### 1. **Halaman Utama (Home)**
- Menampilkan daftar produk dari **Vestia Zeta** yang diambil dari file **JSON**.
- Menggunakan animasi GSAP untuk memberi efek dinamis saat halaman dimuat.
- **Animasi**:
  - `product-list`: Masuk dari sisi kiri dengan efek opacity dan transformasi `x`.
  - Setiap `product-item`: Muncul dengan efek fade-in dari bawah (`y: 50`), dengan delay antar produk menggunakan **stagger**.

### 2. **Komponen `ProductItem`**
- Menampilkan informasi produk, termasuk nama, deskripsi, dan harga.
- Menggunakan animasi hover untuk memberikan efek 3D dan animasi klik untuk memperbesar produk.
- Tombol **"Tambah ke Favorit"** yang menambahkan produk ke daftar favorit.

### 3. **Format Harga**
- Harga produk ditampilkan dalam format mata uang **IDR** menggunakan `Intl.NumberFormat`.

### 4. **Animasi GSAP**
- Semua elemen produk (daftar dan item) dilengkapi dengan animasi GSAP untuk memberikan pengalaman pengguna yang lebih interaktif.
- Produk muncul dengan efek animasi dari bawah, dengan durasi dan delay yang disesuaikan.

### 5. **Fitur Favorit**
- Menambahkan produk ke daftar favorit dengan mengklik tombol **"Tambah ke Favorit"**. Saat diklik, produk akan ditandai dengan kelas **"clicked"** yang memicu animasi 3D.

---

## Struktur Folder

Berikut adalah struktur folder dari aplikasi ini:

```
├── public/
│   └── src/
│       └── json/
│           └── product.json  (Data produk dalam format JSON)
├── src/
│   ├── assets/               (File gambar atau assets lainnya)
│   ├── components/           (Komponen Vue.js seperti ProductItem.vue)
│   ├── pages/                (Halaman seperti Product.vue)
│   ├── App.vue               (File utama untuk routing dan layout)
│   ├── main.ts               (Inisialisasi aplikasi Vue.js dan GSAP)
│   └── style/                (File style untuk komponen Vue.js)
├── package.json              (File konfigurasi dan dependensi)
├── tsconfig.json             (File konfigurasi TypeScript)
└── README.md                 (Dokumentasi aplikasi)
```

---

## Cara Install

### 1. **Persyaratan Sistem**
Pastikan sistem Anda memiliki persyaratan berikut:
- Node.js >= 16.x (Jika belum menginstal Node.js, silakan unduh di [nodejs.org](https://nodejs.org/))
- npm (yang sudah terinstal bersama Node.js)

### 2. **Instalasi Aplikasi**

1. **Clone Repository**:
   Jika Anda belum mengunduh repositori, clone terlebih dahulu:

   ```bash
   git clone https://github.com/IzziVanSatoru/zeta-websiteV1.git
   ```

2. **Masuk ke Direktori Proyek**:

   ```bash
   cd repository-name
   ```

3. **Instal Dependensi**:
   Instal dependensi yang diperlukan dengan npm atau yarn:

   ```bash
   npm install
   ```

   Atau jika menggunakan yarn:

   ```bash
   yarn install
   ```

4. **Jalankan website**:
   Setelah dependensi terinstal, Anda bisa menjalankan aplikasi dengan perintah:

   ```bash
   npm run dev
   ```

   Atau jika menggunakan yarn:

   ```bash
   yarn dev
   ```

   Aplikasi akan berjalan di `http://localhost:5173`.

---

## Penggunaan

- **Menambahkan Produk ke Favorit**: Klik tombol "Tambah ke Favorit" pada setiap produk untuk menambahkannya ke daftar favorit Anda. Anda dapat memodifikasi fitur ini sesuai kebutuhan.
- **Melihat Produk**: Produk akan muncul dengan animasi yang menakjubkan saat halaman dimuat. Anda dapat menggulir daftar produk atau klik produk untuk melihat detail lebih lanjut.
- **Animasi**: Semua produk dan daftar produk menggunakan animasi GSAP yang mengalir dengan mulus, memberikan pengalaman visual yang modern dan inovatif.

---

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan buat pull request dengan fitur atau perbaikan bug yang Anda buat. Pastikan untuk menguji perubahan Anda sebelum mengirimkan pull request.

---

## Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

Terima kasih telah menggunakan aplikasi ini! Jika ada pertanyaan atau masalah, jangan ragu untuk membuka isu atau menghubungi kami.
