const menuBtn = document.getElementById("menuBtn");
const dropdown = document.querySelector(".dropdown"); // Ändra till querySelector eller använd ID

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("open");
});