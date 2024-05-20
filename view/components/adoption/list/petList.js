const listKey = "petList";

class PetList extends HTMLElement {
    static attributes = ["title", "listType", "lines"];
    static listTypes = ["ongs", "destacados", "nossos"];

    constructor() {
        super();

        this.title = this.getAttribute(PetList.attributes[0]);
        this.listType = this.getAttribute(PetList.attributes[1]);
        this.lines = parseInt(this.getAttribute(PetList.attributes[2]));
        this.pets = this.petList();
        this.pages = [];
        this.setPages();

        this.pageIndex = 1;
        this.previousPage = this.getPreviousPageIndex();
        this.nextPage = this.getNextPageIndex();

        this.cards = this.getCardsList();
    }

    getPreviousPageIndex() {
        if (this.pageIndex <= 1) {
            return "-";
        } else {
            return this.pageIndex - 1;
        }
    }

    getNextPageIndex() {
        if (this.pageIndex >= this.pages.length) {
            return "-";
        } else {
            return this.pageIndex + 1;
        }
    }

    petList() {
        let list = [
            {
                name: "Lin",
                age: "1 mês",
                sex: "Fêmea",
                behavior: "Mansa",
                castrated: "Não",
                imageSrc: "/view/assets/images/adoption/pets/lin.jpeg"
            },
        ];
        if (list === null) {
            return [];
        }
        return list;//JSON.parse(list);
    }

    getCardsList() {
        let cards = ``;
        let list = ``;
        let page = this.pages[this.pageIndex - 1];
        if (page != undefined) {
            page.forEach(
                (pet, index, _) => {
                    let card = `
                    <pet-card
                        name="${pet.name}"
                        age="${pet.age}"
                        sex="${pet.sex}"
                        behavior="${pet.behavior}"
                        castrated="${pet.castrated}"
                        imageSrc="${pet.imageSrc}"                        
                    ></pet-card>\n
                `;
                    if (index % 4 == 0 && index != 0) {
                        list += `
                        <div class="petList">
                            ${cards}
                        </div>\n
                        `;
                        cards = ``;
                    } else if (index == page.length) {
                        list += `
                        <div class="petList">
                            ${cards}
                            <div style="width: 100%">
                            </div>
                        </div>\n
                        `;
                    } else if (index == page.length - 1) {
                        cards += card;
                        list += `
                        <div class="petList">
                            ${cards}
                        </div>\n
                        `;
                        return list;
                    }
                    cards += card;
                }
            );
        }
        return list;
    }

    setPages() {
        var page = [];
        this.pets.forEach((pet, index) => {
            if (page.length == 4 * this.lines) {
                this.pages.push(page);
                page = [];
            } else if (index == this.pets.length - 1) {
                page.push(pet);
                this.pages.push(page);
                return;
            }
            page.push(pet);
        });
    }

    configureButtons() {
        let previousButton = document.getElementById("previousButton");
        let nextButton = document.getElementById("nextButton");

        if (this.pageIndex <= 1) {
            previousButton.disabled = true;
            previousButton.querySelector("img").classList.add("disabled");
            previousButton.querySelector("img").src = "/view/assets/icons/disabledArrow.svg";
        } else {
            previousButton.disabled = false;
            previousButton.querySelector("img").classList.remove("disabled");
            previousButton.querySelector("img").src = "/view/assets/icons/listArrow.svg";
        }

        if (this.pageIndex >= this.pages.length) {
            nextButton.disabled = true;
            nextButton.querySelector("img").classList.add("disabled");
            nextButton.querySelector("img").src = "/view/assets/icons/disabledArrow.svg";
        } else {
            nextButton.disabled = false;
            nextButton.querySelector("img").classList.remove("disabled");
            nextButton.querySelector("img").src = "/view/assets/icons/listArrow.svg";
        }
    }

    addButtonsListeners() {
        let previousButton = document.getElementById("previousButton");
        let nextButton = document.getElementById("nextButton");

        previousButton.addEventListener("click", () => {
            if (this.pageIndex > 1) {
                this.pageIndex--;
                this.previousPage = this.getPreviousPageIndex();
                this.nextPage = this.getNextPageIndex();
                this.cards = this.getCardsList();
                this.configureButtons();
                this.connectedCallback();
            }
        });

        nextButton.addEventListener("click", () => {
            if (this.pageIndex < this.pages.length) {
                this.pageIndex++;
                this.previousPage = this.getPreviousPageIndex();
                this.nextPage = this.getNextPageIndex();
                this.cards = this.getCardsList();
                this.configureButtons();
                this.connectedCallback();
            }
        });
    }

    connectedCallback() {
        this.innerHTML = `
        <section id="onOngs">
            <div class="listBox">
                <div class="header">
                    <h2 class="sectionSubtitleFont">${this.title}:</h2>
                    <div id="buttons">
                        <button id="previousButton">
                            <img class="disabled" alt="Página anterior">
                        </button>
                        <h4 id="previousIndex" class="previousIndex legendFont">${this.previousPage}</h4>
                        <h3 id="pageIndex" class="pageIndex sectionSubtitleFont">${this.pageIndex}</h3>
                        <h4 id="nextIndex" class="nextIndex legendFont">${this.nextPage}</h4>
                        <button id="nextButton">
                            <img alt="Próxima página">
                        </button>
                    </div>
                </div>
                ${this.cards}
            </div>
        </section>
        `;
        this.addButtonsListeners();
        this.configureButtons();
    }
}

customElements.define("pet-list", PetList);