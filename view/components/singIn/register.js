class Register extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `
            <link rel="stylesheet" href="/view/css/loginRegister/loginRegister.css">
                <a href="/index.html" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                <div id="main">
                    <a href="/index.html id=" id="returnLink"><img src="/view/assets/iconReturn.svg" alt=""></a>
                    <div id="forms">
                        <form id="formRegister" method="get">
                            <h2 class="titleFont">Crie laços com a gente!</h2>
                            <label class="paragraphFont" for="name">Nome:</label>
                            <input class="paragraphFont" id="registerName" type="text" placeholder="Seu nome">
                            <label class="paragraphFont" for="email">E-mail:</label>
                            <input class="paragraphFont" id="registerEmail" type="email" placeholder="email@email.com.br">
                            <label class="paragraphFont" for="password">Senha:</label>
                            <input class="paragraphFont" id="registerSenha" type="password" placeholder="Senha">
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

customElements.define('register-component', Register);

function handleRegister() {
    const formRegister = document.getElementById('formRegister');
    formRegister.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('registerName').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerSenha').value;

        if (!name || !registerEmail || !registerPassword) {
            alert('Preencha todos os campos!');
            return;
        }

        const registeredUser = {
            name: name,
            email: registerEmail,
            password: registerPassword,
        }

        let userList = JSON.parse(localStorage.getItem('users'));
        if (!userList) {
            userList = [];
        }

        var canRegister = true;

        userList.forEach((user) => {
            if (user.email === registerEmail) {
                canRegister = false;
            }
        });

        if (!canRegister) {
            alert('Usuário já cadastrado!');
            return;
        }

        if (canRegister) {
            userList.push(registeredUser);

            console.log(userList);

            localStorage.setItem('users', JSON.stringify(userList));
            localStorage.setItem('loggedUser', JSON.stringify(registeredUser));

            alert('Usuário cadastrado com sucesso!');
        }

    });
}

