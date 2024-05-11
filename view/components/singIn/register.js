class register extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
                <div id="main">
                    <a href="/index.html id=" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                    <div id="forms">
                        <form id="formRegister" method="get">
                            <h2 class="titleFont">Crie laços com a gente!</h2>
                            <label class="paragraphFont" for="name">Nome:</label>
                            <input name="name" class="paragraphFont" type="text" placeholder="Seu nome" required>
                            <label class="paragraphFont" for="email">E-mail:</label>
                            <input name="email" class="paragraphFont" type="email" placeholder="email@email.com.br" required>
                            <label class="paragraphFont" for="password">Senha:</label>
                            <input name="pass" class="paragraphFont" type="password" placeholder="Senha" required>
                            <button type="submit" class="orangeButton sectionSubtitleFont"
                                style="font-weight: 700;">Registre-se</button>
                            <p class="legendFont">Ao me registrar, declaro que li e aceitei os <span class="bold">Termos de
                                    serviço</span> e <span class="bold">Privacidade</span>.</p>
                        </form>
                    </div>
                    <img src="/view/assets/image-register.png" alt="mulher-segurando-caozinho" class="background-register">
                    <img class="greenBelt" src="/view/assets/greenBelt.svg" alt="greenBelt">
                    <div class="greenBeltTxt sectionSubtitleFont" style="font-weight: 700;">Fazer Login</div>
                </div>
            </body>`;
    }
}

customElements.define('register-component', register)