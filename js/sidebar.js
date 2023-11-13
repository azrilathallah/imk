const sidebar = document.getElementById("sidebar");
const minimizeButton = document.getElementById("minimize");

// Fungsi untuk memeriksa ukuran layar dan mengubah kelas "sidebar" sesuai
function checkScreenWidth() {
  if (window.innerWidth <= 1024) {
    sidebar.classList.add("small");
  } else {
    sidebar.classList.remove("small");
  }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

// Tambahkan event listener untuk mengklik tombol minimize
minimizeButton.addEventListener("click", () => {
  sidebar.classList.toggle("small");
});

// Panggil fungsi untuk memeriksa ukuran layar saat halaman dimuat
checkScreenWidth();
