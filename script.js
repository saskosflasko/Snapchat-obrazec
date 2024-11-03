document.getElementById('toggle-login').addEventListener('click', function(e) {
    e.preventDefault();
    const loginInput = document.getElementById('login-input');
    const toggleLink = document.getElementById('toggle-login');
    const countryCode = document.getElementById('country-code');
    
    // Clear the input field when toggling
    loginInput.value = "";

// Toggle between phone number and username/email
if (loginInput.placeholder === "Username") {
    loginInput.placeholder = "Phone number";
    loginInput.type = "tel";
    toggleLink.textContent = "Use Username instead";
    countryCode.style.display = "inline-block"; // Show country code select

    // Allow only numbers in phone number input
    loginInput.addEventListener('input', function() {
        loginInput.value = loginInput.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    });

} else {
    loginInput.placeholder = "Username";
    loginInput.type = "text";
    toggleLink.textContent = "Use phone number instead";
    countryCode.style.display = "none"; // Hide country code select

    // Remove the event listener to allow all characters
    loginInput.removeEventListener('input', function() {
        loginInput.value = loginInput.value.replace(/[^0-9]/g, '');
    });
}


});

// Initial state for the country code dropdown
document.getElementById('country-code').style.display = "none";

// Redirect to geslo.html on form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    window.location.href = 'geslo.html'; // Redirect to geslo.html
});

function saveUsername() {
    const username = document.getElementById("login-input").value;
    localStorage.setItem("username", username);
}
