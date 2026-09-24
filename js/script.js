/*
  SCRIPT.JS — logic dashboard.
  Biasanya kamu TIDAK perlu edit file ini.
  Semua teks/konten ada di js/config.js
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- ISI HERO ---------- */
  document.getElementById('hero-name').textContent = CONFIG.hero.partnerName;
  document.getElementById('hero-title-line').textContent = CONFIG.hero.title;
  document.getElementById('hero-subtitle').textContent = CONFIG.hero.subtitle;
  document.getElementById('hero-date').textContent = new Date().toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  /* ---------- ISI KARTU UCAPAN ---------- */
  document.getElementById('letter-heading').textContent = CONFIG.card.heading;
  document.getElementById('letter-message').textContent = CONFIG.card.message;
  document.getElementById('letter-signature').textContent = CONFIG.card.signature;

  /* ---------- GERBANG PERTANYAAN (mendukung lebih dari 1 pertanyaan) ---------- */
  const envelopeBtn = document.getElementById('envelope-btn');
  const gateModal = document.getElementById('gate-modal');
  const gateClose = document.getElementById('gate-close');
  const gateForm = document.getElementById('gate-form');
  const gateInput = document.getElementById('gate-input');
  const gateError = document.getElementById('gate-error');
  const gateProgress = document.getElementById('gate-progress');
  const gateQuestionEl = document.getElementById('gate-question');
  const gateHintEl = document.getElementById('gate-hint');
  const letterCard = document.getElementById('letter-card');

  const questions = CONFIG.gate.questions || [];
  gateError.textContent = CONFIG.gate.wrongMessage || 'Belum tepat, coba lagi ya~';

  let cardOpened = false;
  let currentQuestionIndex = 0;

  function renderCurrentQuestion() {
    const q = questions[currentQuestionIndex];
    if (!q) return;
    gateProgress.textContent = questions.length > 1
      ? `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}`
      : 'Sebelum surat ini terbuka...';
    gateQuestionEl.textContent = q.question;
    gateHintEl.textContent = q.hint || '';
    gateInput.value = '';
    gateError.classList.add('hidden');
    setTimeout(() => gateInput.focus(), 100);
  }

  function openGate() {
    if (cardOpened) {
      letterCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    currentQuestionIndex = 0;
    gateModal.classList.remove('hidden');
    renderCurrentQuestion();
  }

  function closeGate() {
    gateModal.classList.add('hidden');
  }

  envelopeBtn.addEventListener('click', openGate);
  gateClose.addEventListener('click', closeGate);
  gateModal.addEventListener('click', (e) => {
    if (e.target === gateModal) closeGate();
  });

  gateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = questions[currentQuestionIndex];
    const answer = gateInput.value.trim().toLowerCase();
    const accepted = (q.acceptedAnswers || []).map(a => a.toLowerCase());

    if (accepted.includes(answer)) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        // lanjut ke pertanyaan berikutnya
        renderCurrentQuestion();
      } else {
        // semua pertanyaan terjawab benar
        cardOpened = true;
        closeGate();
        letterCard.classList.remove('hidden');
        letterCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // coba putar musik begitu kartu terbuka (ini terhitung sebagai interaksi user)
        tryPlayMusic();
      }
    } else {
      gateError.classList.remove('hidden');
      gateInput.focus();
      gateInput.classList.add('shake');
      setTimeout(() => gateInput.classList.remove('shake'), 400);
    }
  });

  /* ---------- TIMELINE / GARLAND ---------- */
  const garland = document.getElementById('garland');
  const galleryWrap = document.getElementById('gallery-wrap');
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryCaption = document.getElementById('gallery-caption');

  CONFIG.timeline.forEach((entry) => {
    const btn = document.createElement('button');
    btn.className = 'year-tag';
    btn.textContent = entry.year;
    btn.addEventListener('click', () => showYear(entry, btn));
    garland.appendChild(btn);
  });

  function showYear(entry, btn) {
    document.querySelectorAll('.year-tag').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    galleryCaption.textContent = entry.caption || '';
    galleryGrid.innerHTML = '';

    (entry.photos || []).forEach((filename) => {
      const src = `assets/photos/${entry.year}/${filename}`;
      const wrap = document.createElement('div');
      wrap.className = 'polaroid';

      const img = new Image();
      img.alt = `Foto ulang tahun tahun ${entry.year}`;
      img.loading = 'lazy';
      img.onerror = () => {
        wrap.innerHTML = `<div class="polaroid-placeholder">Foto belum ditambahkan<br>(${src})</div>`;
      };
      img.src = src;
      wrap.appendChild(img);
      galleryGrid.appendChild(wrap);
    });

    galleryWrap.classList.remove('hidden');
    galleryWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ---------- MUSIK LATAR ---------- */
  const audio = document.getElementById('bg-audio');
  const musicToggle = document.getElementById('music-toggle');
  const musicIcon = document.getElementById('music-icon');
  const musicTitle = document.getElementById('music-title');

  audio.src = CONFIG.music.file;
  musicTitle.textContent = CONFIG.music.title || '';

  function tryPlayMusic() {
    audio.play().then(() => {
      musicToggle.classList.add('playing');
      musicIcon.textContent = '❚❚';
    }).catch(() => {
      // Browser mungkin tetap memblokir autoplay, biarkan user klik tombol musik manual
    });
  }

  musicToggle.addEventListener('click', () => {
    if (audio.paused) {
      tryPlayMusic();
    } else {
      audio.pause();
      musicToggle.classList.remove('playing');
      musicIcon.textContent = '♪';
    }
  });

});
