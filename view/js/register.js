const form = document.querySelector('#formLogin');
const elementLogin = document.querySelector('login-component');
const elementRegister = document.querySelector('register-component');
const buttonGreenBelt = document.querySelector('.greenBeltTxt');
const buttonPinkBelt = document.querySelector('.pinkBeltTxt');

elementLogin.style.display = 'none';
turnDisplay();

function turnDisplay() {
    buttonGreenBelt.addEventListener("click", function () {
        elementRegister.style.display = 'none';
        elementLogin.style.display = 'block';
    });

    buttonPinkBelt.addEventListener("click", function () {
        elementLogin.style.display = 'none';
        elementRegister.style.display = 'block';
    });
}

function enviaLocalStorage(){
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');
    // const form = document.querySelector('#formLogin')

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            email: email.value,
            senha: senha.value
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "/view/dashboard.html";
    });

    const dadosSalvos = localStorage.getItem("formData");

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
    }
}