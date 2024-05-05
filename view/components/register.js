class register extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
            <body>
                <div id="main">
                        <a href="/index.html id=" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                        <div id="forms">
                            <form action="" method="get">
                                <h2 class="titleFont">Crie laços com a gente!</h2>
                                <label class="paragraphFont" for="name">Nome:</label>
                                <input class="paragraphFont" type="text" placeholder="Seu nome">
                                <label class="paragraphFont" for="email">E-mail:</label>
                                <input class="paragraphFont" type="email" placeholder="email@email.com.br">
                                <label class="paragraphFont" for="password">Senha:</label>
                                <input class="paragraphFont" type="password" placeholder="Senha">
                                <button type="submit" class="orangeButton sectionSubtitleFont"
                                    style="font-weight: 700;">Registre-se</button>
                                <p class="legendFont">Ao me registrar, declaro que li e aceitei os <span class="bold">Termos de
                                        serviço</span> e <span class="bold">Privacidade</span>.</p>
                            </form>
                        </div>
                        <img src="/view/assets/image-register.png" alt="mulher-segurando-caozinho" class="background-register">
                        <img class="greenBelt" src="/view/assets/greenBelt.svg" alt="">
                        <div class="greenBeltTxt sectionSubtitleFont" style="font-weight: 700;">Fazer Login</div>
                </div>
            </body>`;
    }
}

customElements.define('register-component', register)