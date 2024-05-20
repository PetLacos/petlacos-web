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
                        <input class="paragraphFont" id="loginEmail" type="email" placeholder="email@email.com.br">
                        <label class="paragraphFont" for="password">Senha:</label>
                        <input class="paragraphFont" id="loginSenha" type="password" placeholder="Senha">
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

function handleLogin() {
    const loginForm = document.getElementById("formLogin");
    const loginEmail = document.querySelector("#loginEmail");
    const loginSenha = document.querySelector("#loginSenha");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem("users"));

        if (!usuarios) {
            alert("Dados incorretos!");
            return;
        }

        var logged = false;

        usuarios.forEach((usuario) => {
            if (usuario.email === loginEmail.value && usuario.password === loginSenha.value) {
                window.location.href = "/view/dashboard.html";
                logged = true;
            }
        });

        if (!logged) alert("Dados incorretos!");
    });

}