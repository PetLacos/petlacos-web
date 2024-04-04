class Header extends HTMLElement {
    constructor() {
        super();
    }



    connectedCallback() {
        this.innerHTML = `
      <link rel="stylesheet" href="view/css/global.css">
        <header>
        <nav>
        <img src="view/assets/logo_padrao.svg" class="navLogo">
        <p class="sectionSubtitleFont" style="font-weight: medium;">Adote Laços.</p>
        <div class="links paragraphFont">
            <a>Home</a>
            <a>Adotar</a>
            <a>Sobre</a>
            <a>Perdidos</a>
            <a>Produtos</a>
            <a>Ongs</a>
        </div>
        <button class="brownButton paragraphFont">Login</button>
        <button class="orangeButton paragraphFont">Cadastre-se</button>
        </header>
      `;
    }
}

customElements.define('header-component', Header);
