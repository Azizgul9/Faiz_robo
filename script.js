// script.js
window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    // Delay hiding the loading screen by 5 seconds (5000ms)
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Hide loading screen
      mainContent.style.display = "block"; // Show main content
    }, 5000); // 5000ms = 5 seconds
  });
  