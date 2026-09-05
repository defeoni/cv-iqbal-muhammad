# Landing Page — Iqbal Muhammad

Halaman personal branding. HTML, CSS, dan JavaScript polos. **Tidak ada npm,
tidak ada framework, tidak ada langkah build** untuk sekadar mengedit.

## Cara membuka

Cara paling gampang: klik dua kali `index.html`. Selesai.

Kalau mau di VS Code dengan muat-ulang otomatis:

1. Buka folder ini di VS Code — `File → Open Folder`
2. Pasang ekstensi **Live Server** (Ritwick Dey)
3. Klik kanan `index.html` → **Open with Live Server**

## Isi tiap berkas

```
index.html          Kerangka halaman. Pendek — isinya dibuat oleh JavaScript.
css/style.css       Semua tampilan. Warna diatur lewat custom property (--accent, dll).
js/data.js          ISI CV. Di sinilah Anda paling sering mengedit.
js/theme.js         Enam tema tempat kerja: warna, pola latar, daftar doodle.
js/scene.js         Teks antarmuka (menu, judul seksi), ikon prestasi, ilustrasi tempat kerja.
js/app.js           Mesinnya: menyusun halaman, ganti tema, animasi, nav, musik.
img/                Foto dan sertifikat, berkas asli — tinggal timpa.
build.py            Menyatukan semuanya jadi satu berkas untuk diunggah.
```

## Yang paling sering diubah

**Ganti teks CV** → `js/data.js`. Setiap teks punya sepasang kunci:
`xxId` untuk bahasa Indonesia, `xxEn` untuk Inggris. Ubah keduanya, jangan
salah satu saja — kalau salah satu kosong, pemeriksaan otomatis akan
mengeluh di Console peramban.

**Ganti foto tempat kerja** → timpa berkas di `img/` dengan nama yang sama.
Ukuran yang pas: lebar 760 px, JPEG kualitas ~75, di bawah 80 KB.

**Tambah foto untuk Mekuru / Raja Uduk** → dua tempat itu sekarang memakai
ilustrasi SVG, bukan foto. Untuk menggantinya dengan foto:

1. Taruh gambarnya, misalnya `img/kerja-mekuru.jpg`
2. Buka `js/scene.js`, cari `const PHOTOS`
3. Tambahkan barisnya:
   ```js
   const PHOTOS = {
     mekuru: "img/kerja-mekuru.jpg",   // <- baris baru
     kementan: "img/kerja-kementan.jpg",
     ...
   };
   ```
   Foto menang atas ilustrasi; ilustrasi SVG-nya boleh ditinggal, tidak dipakai.

**Ganti warna sebuah tema** → `js/theme.js`, objek `THEMES`. Tiap tema punya
`bg`, `surface`, `ink`, `accent`, `accent2`, `accent3`, satu `glyph` (aksara
kanji latar), satu `pat` (nama pola latar), dan daftar `doodles`.

**Ganti musik** → `js/app.js`, cari `const SND`. Nadanya dibangkitkan langsung
oleh Web Audio, bukan berkas rekaman. `HIRAJOSHI` adalah tangga nadanya, `MEL`
adalah melodinya (16 langkah, `-1` berarti diam), `ROOT` adalah nada dasar
tiap tempat kerja.

## Menyatukan jadi satu berkas

Untuk mengunggah ke hosting, mengirim lewat WhatsApp, atau menerbitkannya
kembali:

```bash
python build.py
```

Hasilnya `dist/iqbal-landing.html` — satu berkas, semua gambar tertanam di
dalamnya, jalan tanpa internet.

## Catatan

- Satu-satunya permintaan ke internet adalah Google Fonts. Semua gambar
  tertanam atau dimuat dari folder `img/`.
- Halaman ini **tidak memuat** NIK, nomor rekening, alamat lengkap, kontak
  darurat, atau ekspektasi gaji. Jangan tambahkan — halaman ini publik.
- Buka Console peramban (F12). Ada pemeriksaan otomatis yang berjalan tiap
  kali halaman dimuat; kalau ada tema, pola, doodle, ikon, atau pasangan
  teks ID/EN yang bolong, pesannya muncul di sana.

## Menerbitkan ke internet

Halaman ini sudah tayang di **https://cviqbalmuhammad.pages.dev** — Cloudflare
Pages, gratis, tanpa batas kuota yang realistis untuk halaman sebesar ini, dan
tidak bergantung pada langganan apa pun.

Untuk menerbitkan ulang sesudah mengedit:

```
deploy.cmd
```

Klik dua kali berkas itu. Isinya: menyalin index.html + css + js + img ke folder
sementara, lalu mengunggahnya lewat wrangler. Akun Cloudflare yang dipakai sudah
login di laptop ini.

Kalau wrangler minta login lagi: `npx wrangler login`

Catatan: `build.py` (berkas tunggal) dan `deploy.cmd` (Cloudflare) itu dua jalur
berbeda dan tidak saling bergantung. Yang di Cloudflare memakai berkas terpisah,
jadi memuatnya lebih cepat daripada berkas tunggal 1,5 MB.
