function toggleMenu() {
  const menu = document.querySelector('nav');
  menu.classList.toggle("menu-toggle");

  const hamburger = document.querySelector("button.hamburger");
  hamburger.classList.toggle("is-active");
}
