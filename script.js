document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 800,
  });

  document.getElementById("curr-year").textContent = new Date().getFullYear();

  const scrollDown = document.querySelector(".scroll-down");
  if (window.screenY > 100) {
    scrollDown.style.display = "hidden";
  } else {
    scrollDown.style.display = "";
  }
});
