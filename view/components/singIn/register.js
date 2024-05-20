class Register extends HTMLElement {
    constructor() {
        super();
        document.addEventListener('DOMContentLoaded', function () {
            this.enviaLocalStorage();
        });
    }

    connectedCallback() {
        this.innerHTML = 
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
                <a href="/index.html id=" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                <div id="main">
                    <a href="/index.html id=" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                    <div id="forms">
                        <form id="formRegister" method="get">
                            <h2 class="titleFont">Crie laços com a gente!</h2>
                            <label class="paragraphFont" for="name">Nome:</label>
                            <input class="paragraphFont" id="name" type="text" placeholder="Seu nome">
                            <label class="paragraphFont" for="email">E-mail:</label>
                            <input class="paragraphFont" id="email" type="email" placeholder="email@email.com.br">
                            <label class="paragraphFont" for="password">Senha:</label>
                            <input class="paragraphFont" id="senha" type="password" placeholder="Senha">
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
    
    enviaLocalStorage() {
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const senha = document.querySelector('#senha');
        const form = document.querySelector('#formRegister')
    
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const users = {
                name: name.value,
                email: email.value,
                senha: senha.value
            };
    
            localStorage.setItem("users", JSON.stringify(users));
    
            window.location.href = "/view/dashboard.html";
        });
    
        const dadosSalvos = localStorage.getItem("users");
    
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
        }
    }

    
}

customElements.define('register-component', Register);

