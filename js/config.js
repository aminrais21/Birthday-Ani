/*
  ===========================================================
  CONFIG.JS — INI SATU-SATUNYA FILE YANG PERLU KAMU EDIT
  ===========================================================
  Ganti semua teks, pertanyaan, jawaban, foto, dan lagu di sini.
  Setelah edit, tinggal simpan lalu refresh index.html di browser.
*/

const CONFIG = {

  // ------- HERO / HALAMAN DEPAN -------
  hero: {
    partnerName: "Sayang",              // nama panggilan pacar kamu
    title: "Selamat Ulang Tahun,",
    subtitle: "Satu lagi tahun penuh cerita yang aku syukuri dan kita rayakan bersama."
  },

  // ------- KARTU UCAPAN (gerbang pertanyaan) -------
  // Bisa diisi 1 pertanyaan atau lebih — akan muncul satu per satu berurutan.
  // Kartu ucapan baru terbuka setelah SEMUA pertanyaan terjawab benar.
  gate: {
    questions: [
      {
        question: "Siapa Nama Adek?",
        // Boleh isi lebih dari satu jawaban yang dianggap benar. Semua huruf kecil.
        acceptedAnswers: ["Ani"],
      },
      {
        question: "Berapa Umur Adek Ani?",
        // Boleh isi lebih dari satu jawaban yang dianggap benar. Semua huruf kecil.
        acceptedAnswers: ["8"],
        hint: "Petunjuk: Umur Adek Ani yuuuh"
      },
      {
        question: "Tahun Berapa Adek Lahir?",
        // Boleh isi lebih dari satu jawaban yang dianggap benar. Semua huruf kecil.
        acceptedAnswers: ["2018"],
        hint: "Petunjuk: Tahun Adek Ani lahir yuuuh"
      },
      
      // Tinggal copy-paste blok di atas untuk nambah pertanyaan kedua, ketiga, dst.
      // Contoh pertanyaan kedua (hapus tanda // di depan baris kalau mau dipakai):
      // {
      //   question: "Di mana tempat kencan pertama kita?",
      //   acceptedAnswers: ["cafe kopi", "kopi kita"],
      //   hint: "Petunjuk: dekat kampus"
      // },
    ],
    wrongMessage: "Belum tepat, coba lagi ya~"
  },

  // ------- ISI KARTU UCAPAN (muncul setelah jawaban benar) -------
  card: {
    heading: "Untukmu,",
    // Gunakan \n\n untuk membuat paragraf baru
    message:
      "Happy Birthday Sayangku Cintaku Cantikku.\n\n" +
      "Terima kasih sudah bertahan sejauh ini, sudah 3 tahun lohhh kita merayakan ulang tahun bersama.\n\n" +
      "Semoga kita bisa terus merayakan ulang tahun kita bersama sama terus yaaa sayang sampai maut yang memisahkan.\n\n"+
      "Semoga tahun ini membawakan banyak berita gembira dan hal-hal baik buat kamu yaaa sayang — " +
      "mulai dari karir, kesehatan, kebahagiaan, dan semua mimpi-mimpi yang sudah kamu persiapkan.\n\n" +
      "Di hari ulang tahunmu ini, semoga juga kamu selalu dikelilingi orang-orang yang membuat kamu merasa dicintai, dihargai, didengar, dan cukup menjadi diri kamu sendiri dan aku berharap jadi salah satu dari orang itu.\n\n"+
      "Terima kasih karena sudah menemani aku sejauh ini. Terima kasih untuk setiap perhatian kecil, kesabaran, waktu, cerita, tawa, dan  semua maaf yang membuat aku belajar menjadi seseorang yang lebih baik.\n\n"+
      "Aku sayang kamu, hari ini dan selamanya.",
    signature: "— Rais"
  },

  // ------- TIMELINE FOTO PER TAHUN -------
  // Taruh file foto kamu di folder assets/photos/<tahun>/ lalu tulis nama filenya di array "photos".
  // Kalau nama file belum sesuai / foto belum ditaruh, dashboard akan otomatis menampilkan kotak "foto belum ditambahkan".
  timeline: [
    {
      year: 2023,
      caption: "Ulang tahun pertama : Surprise di Kontrakan, inget gaaa kamu bete karena aku lama lamain di jalan",
      photos: ["photo1.jpeg", "photo2.jpeg"]
    },
    {
      year: 2024,
      caption: "Tahun kedua, kita jam 00.01 di embun senja terus malamnya aku bawain kamu bunga di kost emerald hihi",
      photos: ["photo3.jpeg", "photo4.jpeg"]
    },
    {
      year: 2025,
      caption: "Tahun ketiga, kita jalunn jalunnn ke dofunn.",
      photos: ["photo5.jpeg", "photo6.jpeg"]
    },
    {
      year: 2026,
      caption: "Tahun ini, nanti kita isi fotonyaaa dengan jalan jalan seru lagi yaaaa sayang",
      photos: ["photo1.jpg", "photo2.jpg"]
    }
  ],

  // ------- MUSIK LATAR -------
  music: {
    // Taruh file lagu di assets/music/ lalu tulis nama filenya di sini
    file: "assets/music/Happybirthday.mp3",
    title: "Happy Birthday"
  }
};
