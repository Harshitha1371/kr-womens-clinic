// simple scroll effect (optional)
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  nav.style.boxShadow = window.scrollY > 20
    ? "0 4px 10px rgba(0,0,0,0.1)"
    : "none";
});