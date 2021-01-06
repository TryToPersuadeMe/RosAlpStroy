document.addEventListener("click", () => {
  if (event.target.classList.contains("spoiler")) {
    event.target.classList.toggle("spoiler_active");
  }
});
