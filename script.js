function allowOnlyNumbers(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
}

document.getElementById('toggle-login').addEventListener('click', function (e) {
    e.preventDefault();
    const loginInput = document.getElementById('login-input');
    const toggleLink = document.getElementById('toggle-login');
    const countryCode = document.getElementById('country-code');


    loginInput.value = "";//pocisti input

    if (loginInput.placeholder === "Username") {
        loginInput.placeholder = "Phone number";
        loginInput.type = "tel";
        toggleLink.textContent = "Use Username instead";
        countryCode.style.display = "inline-block";


        loginInput.addEventListener('input', allowOnlyNumbers);
    } else {
        loginInput.placeholder = "Username";
        loginInput.type = "text";
        toggleLink.textContent = "Use phone number instead";
        countryCode.style.display = "none";


        loginInput.removeEventListener('input', allowOnlyNumbers);
    }
});

document.getElementById('country-code').style.display = "none";

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'geslo.html';
});

function saveUsername() {
    const username = document.getElementById("login-input").value;
    localStorage.setItem("username", username);
}

document.getElementById('login-input').addEventListener('input', function (e) {
    if (e.target.value.length > 20) {
        e.target.value = e.target.value.slice(0, 20);
    }
});
