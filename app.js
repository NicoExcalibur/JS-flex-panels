const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("hi");
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
