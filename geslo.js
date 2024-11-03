document.getElementById("password_form").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("display-username").textContent = `Hello, ${username}`;
    }
});