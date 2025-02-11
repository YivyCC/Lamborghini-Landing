window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  window.scrollY > 500 ? header.classList.add("scrolled") : header.classList.remove("scrolled")
})
