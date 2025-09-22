// script.js

// Smooth scroll for nav links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle download button click
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    alert("🚀 Thanks for downloading My AI Assistant!");
    // Later you can link the actual file, like:
    // window.location.href = "downloads/MyAIAssistantSetup.exe";
  });
}
