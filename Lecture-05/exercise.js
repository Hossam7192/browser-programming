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
const loadDataBtn = document.getElementById("loadDataBtn");
const apiOutput = document.getElementById("apiOutput");

// Why do we use async/await?
// We use async/await to write asynchronous code in a simpler and more readable way.

// Why do we check response.ok?
// We check response.ok to make sure the server returned a successful response before using the data.

// Why do we use try/catch?
// We use try/catch to handle errors safely and show an error message instead of breaking the page.

async function loadExternalData() {
  apiOutput.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();

    apiOutput.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company.name}</p>
    `;
  } catch (error) {
    apiOutput.innerHTML = "<p>Error loading data</p>";
  }
}

loadDataBtn.addEventListener("click", loadExternalData);