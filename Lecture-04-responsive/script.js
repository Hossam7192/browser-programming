console.log("Page loaded");

let clickCount = 0;
let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("portfolio_theme", isDarkMode);
  console.log("Theme changed:", isDarkMode);
}

function countClick() {
  clickCount++;
  document.getElementById("clickCountText").textContent = "Clicks: " + clickCount;
  console.log("Button clicked:", clickCount);
}

window.onload = function () {
  const savedTheme = localStorage.getItem("portfolio_theme");

  if (savedTheme === "true") {
    document.body.classList.add("dark-mode");
    isDarkMode = true;
  }

  const today = new Date().toISOString().split("T")[0];
  document.getElementById("lastUpdated").textContent = "Last updated: " + today;
};