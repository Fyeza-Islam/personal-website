/* Always start at top */
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

/* Active nav link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = "contact-section";
  }

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();


/* Dark mode toggle */
const toggle = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-style");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    themeLink.href = "dark-mode.css";
  } else {
    themeLink.href = "style.css";
  }
});