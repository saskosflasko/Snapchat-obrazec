document.getElementById("password_form").addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({// Prikaz SweetAlert obvestila o uspešni prijavi
        title: 'Prijava uspešna!',
        text: 'Uspešno ste se prijavili.',
        icon: 'success',
        confirmButtonText: 'V redu',
        didOpen: () => {
            document.body.classList.remove('swal2-height-auto');
        }
    }).then(() => {
        window.location.href = "index.html";// Preusmeritev na login stran po zaprtju sweetalerta
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("display-username").textContent = `Hello, ${username}`;
    }
});

