console.log("✅ main.js berhasil dijalankan!");
alert("Halo Rifqi, JavaScript sudah aktif!");

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Highlight menu aktif saat scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("main, section");
  let navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // biar pas sama tinggi navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

