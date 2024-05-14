class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/view/css/global.css">
      <header class="menu">
        <nav>
            <img src="/view/assets/logo/logo_padrao.svg" alt="Logo PetLaços" class="navLogo">
            <p class="sectionSubtitleFont" style="font-weight: medium;">Adote Laços.</p>
            <div class="links paragraphFont">
                <a href="/index.html">Home</a>
                <a href="#">Adotar</a>
                <a href="/view/aboutUs.html">Sobre</a>
                <a href="/view/lostMural.html">Perdidos</a>
                <a href="#">Produtos</a>
                <a href="/view/ngos.html">Ongs</a>
            </div>
            <button class="brownButton paragraphFont">Login</button>
            <button class="orangeButton paragraphFont">Cadastre-se</button>
        </nav>
      </header>
      `;
  }
}

customElements.define('header-component', Header);
