class CardAdoption extends HTMLElement {

  static attributes = ["name", "age", "sex", "behavior", "castrated", "imageSrc", "location"];

  constructor() {
    super();

    this.name = this.getAttribute(CardAdoption.attributes[0]);
    this.age = this.getAttribute(CardAdoption.attributes[1]);
    this.sex = this.getAttribute(CardAdoption.attributes[2]);
    this.behavior = this.getAttribute(CardAdoption.attributes[3]);
    this.castrated = this.getAttribute(CardAdoption.attributes[4]);
    this.imageSrc = this.getAttribute(CardAdoption.attributes[5]);
    this.location = this.getAttribute(CardAdoption.attributes[6]);

  }

  connectedCallback() {
    // <img src="${this.imageSrc}" alt>
    this.innerHTML = `
      <link rel="stylesheet" href="/view/components/adoption/cardAdoption.css">
      <div class="petCard" style="background-image: url(${this.imageSrc})">
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
              <p class="legendFont">${this.location}</p>
          </div>
      </div>
    `;
  }
}

customElements.define("pet-card", CardAdoption);
