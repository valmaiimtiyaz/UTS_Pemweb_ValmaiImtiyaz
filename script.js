//supaya pas dipencet bagian navbar lompatnya smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//navbar muncul saat kursor diarahin keatas
let prevScroll = window.pageYOffset;
const navbar = document.querySelector("nav");

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    // scroll ke atas -> navbar muncul
    navbar.style.top = "0";
  } else {
    // scroll ke bawah -> navbar ngilang
    navbar.style.top = "-75px";
  }
  prevScroll = currentScroll;
};

// biar kalau mouse deket atas layar, navbar muncul lagi
document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // --- Bagian untuk membuka/menutup menu saat burger diklik ---
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  // --- BAGIAN BARU: Menutup menu saat scroll ---
  window.addEventListener("scroll", () => {
    // Periksa apakah menu sedang terbuka
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      // Jika iya, tutup menu
      mobileMenu.classList.remove("active");
    }
  });

  // --- (Opsional) Menutup menu saat link di dalamnya diklik ---
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }
});

// Fungsi untuk animasi saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Jika elemen TERLIHAT di layar
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
        // JIKA ELEMEN TIDAK TERLIHAT di layar
        else {
            entry.target.classList.remove('visible');
        }
    });
});


const revealElements = document.querySelectorAll('.matericard, .tablewrapper, .notepad-container, .chat-container, .reveal'); 
revealElements.forEach((el) => observer.observe(el));


