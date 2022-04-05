let topBtn = document.querySelector(".topBtn");

topBtn.addEventListener("click", () => {
  let rootElement = document.documentElement;
  rootElement.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset !== 0) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
