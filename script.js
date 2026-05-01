// WhatsApp
document.querySelectorAll(".whatsapp").forEach(btn => {
  btn.onclick = () => {
    window.open("https://wa.me/919866082085", "_blank");
  };
});

// Animation
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

// Navbar scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});