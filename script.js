let lastScroll = 0;
const navbar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down → hide navbar
    navbar.style.top = "-100px";
  } else {
    // Scrolling up → show navbar
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});
