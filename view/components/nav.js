// Defina o nome do componente
class NavComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <link rel="stylesheet" href="/view/css/global.css">
        <header>
        <nav>
        <img src="view/assets/logo_padrao.svg" class="navLogo">
        <p class="sectionSubtitleFont" style="font-weight: medium;">Adote Laços.</p>
        <div class="links paragraphFont">
            <a href="index.html">Home</a>
            <a>Adotar</a>
            <a>Sobre</a>
            <a>Perdidos</a>
            <a>Produtos</a>
            <a>Ongs</a>
        </div>
        <button class="brownButton paragraphFont">Login</button>
        <button class="orangeButton paragraphFont">Cadastre-se</button>
        </nav>
        </header>
    `;
  }
  }
  
  // Registre o componente
  customElements.define('nav-component', NavComponent);
  