console.log("Page loaded");

let clickCount = 0;
let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode");
  console.log("Theme changed:", isDarkMode);
}

function countClick() {
  clickCount++;
  console.log("Button clicked:", clickCount);
}