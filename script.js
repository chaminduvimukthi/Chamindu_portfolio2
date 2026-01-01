const toggleBtn = document.getElementById("toggleTheme");

// Set correct button text on load
if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// Animate skill bars
window.addEventListener("load", () => {
    document.querySelectorAll(".bar div").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});
