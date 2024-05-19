class CardAdoption extends HTMLElement {

  static attributes = ["name", "age", "sex", "behavior", "castrated", "imageSrc"];

  constructor() {
    super();

    this.name = this.getAttribute(CardAdoption.attributes[0]);
    this.age = this.getAttribute(CardAdoption.attributes[1]);
    this.sex = this.getAttribute(CardAdoption.attributes[2]);
    this.behavior = this.getAttribute(CardAdoption.attributes[3]);
    this.castrated = this.getAttribute(CardAdoption.attributes[4]);
    this.imageSrc = this.getAttribute(CardAdoption.attributes[5]);

  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/view/components/adoption/cardAdoption.css">
      <div class="petCard">
          <img src="${this.imageSrc}" alt>
          <div class="description">
              <h1 id="name" class="legendFont">${this.name}</h1>
              <div class="list">
                  <ul class="description-ul legendFont">
                      <li id="age">Idade: ${this.age}</li>
                      <li>Sexo: ${this.sex}</li>
                  </ul>
                  <ul class="legendFont">
                      <li>Conduta: ${this.behavior}</li>
                      <li>Castrado: ${this.castrated}</li>
                  </ul>
              </div>
          </div>
      </div>
    `;
  }
}

customElements.define("pet-card", CardAdoption);
