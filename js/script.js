function toggleMenu() {
  const sidebar = document.querySelector(".left");
  const body = document.body;
  sidebar.classList.toggle("show");
  body.classList.toggle("no-scroll");
}
