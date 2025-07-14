// Show back to top button on scroll
window.addEventListener("scroll", () => {
  const btn = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Responsive nav toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
