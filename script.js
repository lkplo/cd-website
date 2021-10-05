///////////////////////////////////////////////////////////////
// Mobile Navigation
const headerEl = document.querySelector(".header");

headerEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("open");
});

///////////////////////////////////////////////////////////////
// Smooth scrolling
const links = document.querySelectorAll("a:link");

links.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href.startsWith("#") && href !== "#") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
