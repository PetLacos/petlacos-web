class CardAdoption extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="/view/css/global.css">
        <div class="gallery-item" id="animal-one">
        <div class="description">
          <h1 class="legendFont">NAME</h1>
          <ul class="Description-ul">
            <li>Idade: 5 meses</li>
            <li>Castrado: não</li>
          </ul>
          <ul>
            <li>Sexo: Macho</li>
            <li>Vacinação:Nenhuma</li>
          </ul>
        </div>
      </div>
        `;
  }
}

customElements.define("card-adoption", CardAdoption);
