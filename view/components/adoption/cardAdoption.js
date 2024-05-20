class CardAdoption extends HTMLElement {

  static attributes = ["pet"];

  constructor() {
    super();

    this.pet = JSON.parse(this.getAttribute("pet"));

    this.addEventListener("click", () => {
      window.location.href = `/view/petDetails.html?pet=${JSON.stringify(this.pet)}`;
    });
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/view/components/adoption/cardAdoption.css">
      <div class="petCard" style="background-image: url(${this.pet.imgData})">
          <div class="description">
              <h1 id="name" class="legendFont">${this.pet.name}</h1>
              <div class="list">
                  <ul class="description-ul legendFont">
                      <li id="age">Idade: ${this.pet.age}</li>
                      <li>Sexo: ${this.pet.gender}</li>
                  </ul>
                  <ul class="legendFont">
                      <li>Conduta: ${this.pet.behavior}</li>
                      <li>Castrado: ${this.pet.castrated}</li>
                  </ul>
              </div>
              <p class="legendFont">${this.pet.location}</p>
          </div>
      </div>
    `;
  }
}

customElements.define("pet-card", CardAdoption);
