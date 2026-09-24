# 🩷 Dashboard Ulang Tahun

Dashboard interaktif untuk ucapan ulang tahun: kartu ucapan dengan pertanyaan
gerbang, timeline foto per tahun, dan musik latar.

## Cara menjalankan

1. Buka folder ini di VSCode.
2. Klik kanan `index.html` → **"Open with Live Server"** (kalau punya extension
   Live Server), atau cukup double-klik `index.html` untuk buka langsung di
   browser.

## Yang perlu kamu edit

### 1. Semua teks, pertanyaan, jawaban, dan konten
👉 **`js/config.js`** — ini satu-satunya file yang perlu kamu ubah untuk:
- Nama panggilan pacar kamu (`hero.partnerName`)
- Judul & subjudul di halaman depan (`hero.title`, `hero.subtitle`)
- Pertanyaan gerbang sebelum kartu ucapan terbuka (`gate.questions` — array,
  bisa diisi 1 pertanyaan atau lebih, akan muncul satu per satu berurutan.
  Setiap pertanyaan punya `acceptedAnswers` sendiri — boleh lebih dari satu
  jawaban yang dianggap benar, semua ditulis huruf kecil. Untuk nambah
  pertanyaan kedua/ketiga, tinggal copy-paste satu blok `{ question: ...,
  acceptedAnswers: [...], hint: ... }` lagi di dalam array `questions`,
  dipisah koma. Kartu ucapan baru terbuka setelah semua pertanyaan terjawab
  benar)
- Isi ucapan di dalam kartu (`card.message`)
- Caption & daftar nama file foto per tahun (`timeline`)
- Judul lagu (`music.title`)

Tidak perlu sentuh `js/script.js` atau `css/style.css` kecuali kamu mau
mengubah tampilan/animasi.

### 2. Foto-foto ulang tahun
Taruh file foto di folder sesuai tahunnya:

```
assets/photos/2023/photo1.jpg
assets/photos/2023/photo2.jpg
assets/photos/2024/photo1.jpg
...
```

Nama file harus **sama persis** dengan yang kamu tulis di array `photos` pada
`js/config.js`. Kalau nama file uploadmu beda, tinggal sesuaikan namanya di
`config.js` — tidak harus `photo1.jpg`, bisa nama apapun asal ekstensinya
sama (`.jpg`, `.jpeg`, `.png`, dst).

Kalau foto belum ditaruh / nama file salah, dashboard akan otomatis
menampilkan kotak putus-putus "Foto belum ditambahkan" — jadi tidak akan
error atau blank.

Mau nambah tahun baru (misal 2027)? Tinggal:
1. Buat folder baru `assets/photos/2027/`
2. Tambahkan foto ke dalamnya
3. Tambahkan satu blok baru di array `timeline` pada `config.js`, contoh:
```js
{
  year: 2027,
  caption: "Cerita baru tahun ini.",
  photos: ["photo1.jpg"]
}
```

### 3. Lagu latar
Taruh 1 file musik (format `.mp3`) di folder:
```
assets/music/song.mp3
```
Nama file harus sama dengan yang ditulis di `music.file` pada `config.js`
(default: `assets/music/song.mp3`). Kalau nama filemu beda, tinggal ubah
path-nya di situ.

> Catatan: kebanyakan browser memblokir audio yang otomatis muter tanpa ada
> interaksi user sama sekali. Karena itu musik akan otomatis dicoba diputar
> tepat setelah dia menjawab pertanyaan gerbang dengan benar (itu sudah
> dihitung sebagai interaksi). Kalau tetap tidak jalan, dia tinggal tekan
> tombol musik bulat di pojok kanan bawah.

## Struktur folder

```
birthday-dashboard/
├── index.html          ← halaman utama, biasanya tidak perlu diedit
├── css/
│   └── style.css        ← tampilan & warna, edit kalau mau ubah desain
├── js/
│   ├── config.js         ← 🔧 EDIT DI SINI untuk semua konten
│   └── script.js         ← logic, biasanya tidak perlu diedit
└── assets/
    ├── photos/
    │   ├── 2023/
    │   ├── 2024/
    │   ├── 2025/
    │   └── 2026/
    └── music/
```
