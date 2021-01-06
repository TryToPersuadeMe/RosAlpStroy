const spoiler = document.querySelector(".spoiler");

document.addEventListener("click", () => {
  console.log(event.target);
  if (event.target == spoiler) {
    event.target.classList.toggle("spoiler_active");
  }
});
