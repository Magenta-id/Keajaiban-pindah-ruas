// Nonaktifkan pemulihan posisi scroll otomatis browser
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Jika URL mengandung hash (#), bersihkan hash tanpa reload halaman
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }

  // Langsung reset posisi layar ke paling atas sebelum konten selesai dirender
  window.scrollTo(0, 0);

// Mengambil elemen tombol berdasarkan ID
const btnBackToTop = document.getElementById("btnBackToTop");

// Menampilkan tombol hanya jika halaman di-scroll ke bawah sejauh 300px
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
};

// Fungsi untuk menggulir halaman kembali ke paling atas secara halus saat tombol diklik
btnBackToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Memastikan semua format math bekerja setelah HTML dimuat
window.addEventListener('load', function () {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch(function (err) {
      console.log('MathJax error: ' + err.message);
    });
  }
});

/* js game
// Database Bank Soal Komprehensif (Matematika, Fisika, Kimia - Murni Konsep Rumus)
const bankSoal = [
  // --- MATEMATIKA ---
  {
    kategori: "Matematika (Barisan & Deret Aritmatika)",
    soal: "Rumus suku ke-\\(n\\) aritmatika adalah \\( U_n = a + (n-1)b \\). Bentuk rumus yang benar jika kita ingin mencari **Beda (\\(b\\))** adalah...",
    benar: "\\( b = \\frac{U_n - a}{n-1} \\)",
    salah: [
      "\\( b = \\frac{U_n + a}{n-1} \\)",
      "\\( b = (U_n - a) \\times (n-1) \\)",
      "\\( b = \\frac{n-1}{U_n - a} \\)"
    ],
    penjelasan: "Pindahkan \\(a\\) ke ruas kiri menjadi \\(U_n - a\\), lalu bagi dengan \\((n-1)\\)."
  },
  {
    kategori: "Matematika (Statistika / Rata-rata)",
    soal: "Rumus rata-rata adalah \\( \\bar{x} = \\frac{\\sum x}{n} \\). Jika ingin mengisolasi variabel **Jumlah Total Data (\\(\\sum x\\))**, rumusnya menjadi...",
    benar: "\\( \\sum x = \\bar{x} \\times n \\)",
    salah: [
      "\\( \\sum x = \\frac{n}{\\bar{x}} \\)",
      "\\( \\sum x = \\bar{x} - n \\)",
      "\\( \\sum x = \\frac{\\bar{x}}{n} \\)"
    ],
    penjelasan: "Variabel \\(n\\) yang bertindak sebagai pembagi di ruas kanan dipindah ke ruas kiri menjadi pengali."
  },
  {
    kategori: "Matematika (Transformasi - Dilatasi)",
    soal: "Rumus dilatasi titik \\( A(x, y) \\) dengan pusat \\((0,0)\\) dan faktor skala \\(k\\) adalah \\( x' = k \\times x \\). Bentuk rumus untuk mencari **Faktor Skala (\\(k\\))** adalah...",
    benar: "\\( k = \\frac{x'}{x} \\)",
    salah: [
      "\\( k = x' \\times x \\)",
      "\\( k = x - x' \\)",
      "\\( k = \\frac{x}{x'} \\)"
    ],
    penjelasan: "Variabel \\(x\\) di ruas kanan dipindah ke bawah ruas kiri menjadi pembagi."
  },
  {
    kategori: "Matematika (Fungsi & Persamaan)",
    soal: "Diberikan bentuk fungsi linear \\( y = mx + c \\). Langkah pindah ruas yang benar untuk mengisolasi suku \\(mx\\) adalah...",
    benar: "\\( mx = y - c \\)",
    salah: [
      "\\( mx = y + c \\)",
      "\\( mx = \\frac{y}{c} \\)",
      "\\( mx = c - y \\)"
    ],
    penjelasan: "Suku \\(+c\\) dipindahkan melewati tanda sama dengan (=) sehingga berubah tanda menjadi \\(-c\\)."
  },

  // --- FISIKA ---
  {
    kategori: "Fisika (Dinamika / Hukum Newton)",
    soal: "Berdasarkan hukum kedua Newton \\( F = m \\times a \\), bentuk rumus yang benar jika kita ingin mencari **Percepatan (\\(a\\))** adalah...",
    benar: "\\( a = \\frac{F}{m} \\)",
    salah: [
      "\\( a = F \\times m \\)",
      "\\( a = \\frac{m}{F} \\)",
      "\\( a = F - m \\)"
    ],
    penjelasan: "Massa \\(m\\) yang dikalikan dengan \\(a\\) dipindah ke ruas kiri menjadi pembagi bagi \\(F\\)."
  },
  {
    kategori: "Fisika (Getaran & Gelombang)",
    soal: "Hubungan frekuensi dan periode gelombang dinyatakan sebagai \\( f = \\frac{1}{T} \\). Jika ingin mencari **Periode (\\(T\\))**, rumusnya adalah...",
    benar: "\\( T = \\frac{1}{f} \\)",
    salah: [
      "\\( T = f \\)",
      "\\( T = 1 - f \\)",
      "\\( T = \\frac{f}{1} \\)"
    ],
    penjelasan: "Terapkan tukar posisi silang antara \\(f\\) dan \\(T\\), sehingga \\(T\\) naik ke atas menggantikan posisi \\(f\\)."
  },
  {
    kategori: "Fisika (Massa Jenis / Densitas)",
    soal: "Rumus massa jenis adalah \\( \\rho = \\frac{m}{V} \\). Bentuk rumus yang benar jika kita ingin mencari **Volume (\\(V\\))** adalah...",
    benar: "\\( V = \\frac{m}{\\rho} \\)",
    salah: [
      "\\( V = m \\times \\rho \\)",
      "\\( V = \\frac{\\rho}{m} \\)",
      "\\( V = m - \\rho \\)"
    ],
    penjelasan: "Pindahkan \\(V\\) ke ruas kiri sebagai pengali, lalu pindahkan \\(\\rho\\) kembali ke bawah sebagai pembagi."
  },
  {
    kategori: "Fisika (Usaha dan Energi)",
    soal: "Rumus energi kinetik adalah \\( E_k = \\frac{1}{2}mv^2 \\). Jika kita ingin mencari **Massa (\\(m\\))**, bentuk hasil pindah ruas yang benar adalah...",
    benar: "\\( m = \\frac{2E_k}{v^2} \\)",
    salah: [
      "\\( m = \\frac{E_k}{2v^2} \\)",
      "\\( m = 2E_k \\times v^2 \\)",
      "\\( m = \\frac{v^2}{2E_k} \\)"
    ],
    penjelasan: "Pindahkan angka 2 ke atas menjadi pengali (\\(2E_k\\)), lalu pindahkan \\(v^2\\) ke bawah menjadi pembagi."
  },

  // --- KIMIA ---
  {
    kategori: "Kimia (Hukum Gas Ideal)",
    soal: "Persamaan gas ideal dituliskan sebagai \\( PV = nRT \\). Jika kita ingin mengisolasi variabel **Volume (\\(V\\))**, rumusnya menjadi...",
    benar: "\\( V = \\frac{nRT}{P} \\)",
    salah: [
      "\\( V = \\frac{P}{nRT} \\)",
      "\\( V = nRT \\times P \\)",
      "\\( V = nRT - P \\)"
    ],
    penjelasan: "Tekanan \\(P\\) yang semula mengalikan \\(V\\) dipindahkan ke ruas kanan menjadi pembagi di bawah."
  },
  {
    kategori: "Kimia (Pengenceran Larutan)",
    soal: "Rumus pengenceran larutan adalah \\( M_1 \\times V_1 = M_2 \\times V_2 \\). Bentuk rumus yang benar jika ingin mencari **Volume akhir (\\(V_2\\))** adalah...",
    benar: "\\( V_2 = \\frac{M_1 \\times V_1}{M_2} \\)",
    salah: [
      "\\( V_2 = M_1 \\times V_1 \\times M_2 \\)",
      "\\( V_2 = \\frac{M_2}{M_1 \\times V_1} \\)",
      "\\( V_2 = M_1 + V_1 - M_2 \\)"
    ],
    penjelasan: "Variabel \\(M_2\\) yang mengalikan \\(V_2\\) di sisi kanan dipindahkan ke bawah ruas kiri sebagai pembagi."
  },
  {
    kategori: "Kimia (Konsentrasi Molaritas)",
    soal: "Rumus Molaritas larutan adalah \\( M = \\frac{n}{V} \\). Jika ingin mencari **Jumlah Mol (\\(n\\))**, rumus hasil pindah ruasnya adalah...",
    benar: "\\( n = M \\times V \\)",
    salah: [
      "\\( n = \\frac{V}{M} \\)",
      "\\( n = M - V \\)",
      "\\( n = \\frac{1}{M \\times V} \\)"
    ],
    penjelasan: "Penyebut \\(V\\) di ruas kanan dipindahkan melintasi tanda sama dengan (=) untuk dikalikan dengan \\(M\\)."
  },
  {
    kategori: "Kimia (Persen Massa Unsur / Kadar)",
    soal: "Rumus kadar unsur adalah \\( \\text{Kadar} = \\frac{Ar \\times x}{Mr} \\times 100\\% \\). Jika kita ingin mengisolasi **Massa Molekul Relatif (\\(Mr\\))**, rumusnya adalah...",
    benar: "\\( Mr = \\frac{Ar \\times x \\times 100\\%}{\\text{Kadar}} \\)",
    salah: [
      "\\( Mr = \\text{Kadar} \\times Ar \\times x \\times 100\\% \\)",
      "\\( Mr = \\frac{\\text{Kadar}}{Ar \\times x \\times 100\\%} \\)",
      "\\( Mr = Ar \\times x - \\text{Kadar} \\)"
    ],
    penjelasan: "Tukar posisi antara \\(Mr\\) dan \\(\\text{Kadar}\\) secara silang; \\(Mr\\) naik ke atas dan \\(\\text{Kadar}\\) turun ke bawah."
  }
];

let currentIndex = -1;

// Fungsi untuk mengacak urutan array (Fisher-Yates Shuffle)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Memuat soal berikutnya
function loadNextQuestion() {
  // Sembunyikan feedback & reset state
  document.getElementById("quiz-feedback").classList.add("hidden");
  
  // Ambil soal secara acak tanpa mengulang soal yang sama persis berturut-turut
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * bankSoal.length);
  } while (newIndex === currentIndex && bankSoal.length > 1);
  currentIndex = newIndex;

  const currentQuiz = bankSoal[currentIndex];

  // Set Kategori dan Teks Soal
  document.getElementById("quiz-category").innerText = currentQuiz.kategori;
  document.getElementById("quiz-question").innerHTML = currentQuiz.soal;

  // Gabungkan opsi benar dan salah, lalu acak urutannya
  const allOptions = [
    { text: currentQuiz.benar, isCorrect: true },
    ...currentQuiz.salah.map(item => ({ text: item, isCorrect: false }))
  ];
  const shuffledOptions = shuffle([...allOptions]);

  // Render tombol pilihan ganda
  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";

  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = option.text;
    button.onclick = () => checkAnswer(button, option.isCorrect, currentQuiz.penjelasan);
    optionsContainer.appendChild(button);
  });

  // Render ulang sintaks matematika (MathJax)
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Memeriksa Jawaban Pembaca
function checkAnswer(selectedBtn, isCorrect, explanation) {
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(btn => btn.disabled = true); // Nonaktifkan tombol setelah memilih

  const feedbackBox = document.getElementById("quiz-feedback");
  const feedbackText = document.getElementById("feedback-text");
  const explanationText = document.getElementById("explanation-text");

  feedbackBox.classList.remove("hidden", "correct-bg", "wrong-bg");

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    feedbackBox.classList.add("correct-bg");
    feedbackText.innerHTML = "<strong>✅ Benar sekali!</strong> Logika perangkaian rumusmu sudah tepat.";
  } else {
    selectedBtn.classList.add("wrong");
    feedbackBox.classList.add("wrong-bg");
    feedbackText.innerHTML = "<strong>❌ Masih Kurang Tepat.</strong> Perhatikan perubahan tanda dan posisi operasinya.";
  }

  explanationText.innerHTML = `<strong>Pembahasan:</strong> ${explanation}`;

  // Render ulang format MathJax di bagian penjelasan jika ada
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Jalankan kuis pertama kali saat halaman siap
document.addEventListener("DOMContentLoaded", loadNextQuestion); */

