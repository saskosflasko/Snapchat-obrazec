document.getElementById("password_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prepreči privzeto oddajo obrazca
    window.location.href = "index.html"; // Preusmeri na index.html
});

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("display-username").textContent = `Hello, ${username}`; // Popravljeno: uporaba backtickov za niz
    }
});