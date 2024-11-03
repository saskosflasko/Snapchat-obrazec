document.getElementById('toggle-login').addEventListener('click', function(e) {
    e.preventDefault();
    const loginInput = document.getElementById('login-input');
    const toggleLink = document.getElementById('toggle-login');
    const countryCode = document.getElementById('country-code');
    
   
    loginInput.value = "";//pocisti vsebino inputa


if (loginInput.placeholder === "Username") {
    loginInput.placeholder = "Phone number";
    loginInput.type = "tel";
    toggleLink.textContent = "Use Username instead";
    countryCode.style.display = "inline-block";

    
    loginInput.addEventListener('input', function() {
        loginInput.value = loginInput.value.replace(/[^0-9]/g, '');
    });

} else {
    loginInput.placeholder = "Username";
    loginInput.type = "text";
    toggleLink.textContent = "Use phone number instead";
    countryCode.style.display = "none"; 


    loginInput.removeEventListener('input', function() {
        loginInput.value = loginInput.value.replace(/[^0-9]/g, '');
    });
}


});


document.getElementById('country-code').style.display = "none";


document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'geslo.html';
});

function saveUsername() {
    const username = document.getElementById("login-input").value;
    localStorage.setItem("username", username);
}
