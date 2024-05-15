class Header extends HTMLElement {

  static attributes = ['pageName'];

  constructor() {
    super();
    this.links = ['Home', 'Adotar', 'Sobre', 'Perdidos', 'Produtos', 'Ongs'];
    this.linksHrefs = ['index', 'adoption', 'aboutUs', 'lostMural', 'products', 'ngos']
    this.linksHTML = ``;
    this.pageName = this.getAttribute(Header.attributes[0]);

    this.links.forEach(
      (link, index) => {
        let linkLower = link.toLowerCase();
        if (linkLower === this.pageName.toLowerCase()) {
          if (linkLower === 'home') {
            this.linksHTML += `<a href="/index.html" class="active">${link}</a>`;
          } else {
            this.linksHTML += `<a href="/view/${this.linksHrefs[index]}.html" class="active">${link}</a>`;
          }
        } else {
          if (linkLower === 'home') {
            this.linksHTML += `<a href="/index.html">${link}</a>`;
          } else {
            this.linksHTML += `<a href="/view/${this.linksHrefs[index]}.html">${link}</a>`;
          }
        }
      }
    );

  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/view/css/global.css">
      <header class="menu">
        <nav>
            <img src="/view/assets/logo/logo_padrao.svg" alt="Logo PetLaços" class="navLogo">
            <p class="sectionSubtitleFont" style="font-weight: medium;">Adote Laços.</p>
            <div class="links paragraphFont">
                ${this.linksHTML}
            </div>
            <button class="brownButton paragraphFont">Login</button>
            <button class="orangeButton paragraphFont">Cadastre-se</button>
        </nav>
      </header>
      `;
  }
}

customElements.define('header-component', Header);
