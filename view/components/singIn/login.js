class Login extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
            <body>
            <div id="main">
                <a href="/index.html id=" id="returnLinkGreen"><img src="/view/assets/iconReturn.svg" alt=""></a>
                <div id="forms">
                    <form id="formLogin" method="get">
                        <h2 class="titleFont">Bem-vindo(a) de volta!</h2>
                        <label class="paragraphFont" for="email">E-mail:</label>
                        <input class="paragraphFont" type="email" placeholder="email@email.com.br">
                        <label class="paragraphFont" for="password">Senha:</label>
                        <input class="paragraphFont" type="password" placeholder="Senha">
                        <button type="submit" class="orangeButton sectionSubtitleFont"
                            style="font-weight: 700;">Fazer Login</button>
                    </form>
                </div>
                <img src="/view/assets/image-login.png" alt="mulher-segurando-passaro" class="background-login">
                <img class="pinkBelt" src="/view/assets/pinkBelt.svg" alt="">
                <div class="pinkBeltTxt sectionSubtitleFont" style="font-weight: 700;">Registrar-se</div>
            </div>
        </body>
        `;
    }
}

customElements.define('login-component', Login)