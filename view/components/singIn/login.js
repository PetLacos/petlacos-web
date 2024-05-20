class Login extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
            <div id="main">
                <a href="/index.html id=" id="returnLinkGreen"><img src="/view/assets/iconReturn.svg" alt=""></a>
                <div id="forms">
                    <form id="formLogin" method="get">
                        <h2 class="titleFont">Bem-vindo(a) de volta!</h2>
                        <label class="paragraphFont" for="email">E-mail:</label>
                        <input class="paragraphFont" id="email" type="email" placeholder="email@email.com.br">
                        <label class="paragraphFont" for="password">Senha:</label>
                        <input class="paragraphFont" id="senha" type="password" placeholder="Senha">
                        <button type="submit" class="orangeButton sectionSubtitleFont"
                            style="font-weight: 700;">Fazer Login</button>
                    </form>
                </div>
                <img src="/view/assets/image-login.png" alt="mulher-segurando-passaro" class="background-login">
                <img class="pinkBelt" src="/view/assets/pinkBelt.svg" alt="">
                <div class="pinkBeltTxt sectionSubtitleFont" style="font-weight: 700;">Registrar-se</div>
            </div>
        `;
    }
}

customElements.define('login-component', Login);

document.addEventListener('DOMContentLoaded', function() {
    enviaLocalStorage();
});

function enviaLocalStorage(){
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');
    const form = document.querySelector('#formLogin')

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = {
            email: email.value,
            senha: senha.value
        };

        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "/view/dashboard.html";
    });

    const dadosSalvos = localStorage.getItem("user");

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
    }
}