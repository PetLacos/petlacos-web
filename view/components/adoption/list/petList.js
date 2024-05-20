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

        console.log(this.pets);

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
                ownerName: "Caio Luppo",
                age: "1 meses",
                gender: "Fêmea",
                specie: "Gato",
                race: "Vira-lata",
                castrated: "Não",
                size: "Pequeno",
                behavior: "Dócil",
                microchip: "Não",
                cepInput: "05170-240",
                location: "Vila Boaçava, São Paulo - SP",
                description: "Lin é uma gatinha muito dócil e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão. Ela é muito carinhosa e adora um colo. Ela é muito sapeca e adora brincar com outros gatos!",
                imgData: "/view/assets/images/adoption/pets/lin.jpeg"
            },
            {
                name: "Arthur",
                ownerName: "Lorena",
                age: "4 anos",
                gender: "Macho",
                specie: "Gato",
                race: "Sem Raça Definida",
                castrated: "Sim",
                size: "Pequeno",
                behavior: "Zen",
                microchip: "Não",
                cepInput: "02018070",
                location: "Santana, São Paulo - SP",
                description: "Gatinho muito dorminhoco!",
                imgData: "/view/assets/images/adoption/pets/arthur.jpg"
            },
            {
                name: "Hisui",
                ownerName: "Lorena",
                age: "7 anos",
                gender: "Fêmea",
                specie: "Gato",
                race: "Sem Raça Definida",
                castrated: "Sim",
                size: "Pequeno",
                behavior: "Introvertida",
                microchip: "Não",
                cepInput: "02018070",
                location: "Santana, São Paulo - SP",
                description: "Antissocial até se acostumar!",
                imgData: "/view/assets/images/adoption/pets/hisui.jpg"
            },
        ];
        let listStorage = localStorage.getItem(listKey);
        if (!listStorage) {
            return list;
        }
        list.push.apply(list, JSON.parse(listStorage));
        return list;
    }

    getCardsList() {
        let cards = [];
        let list = ``;
        let page = this.pages[this.pageIndex - 1];
        if (page != undefined) {
            page.forEach(
                (pet, index, _) => {
                    let card = `
                    <pet-card pet='${JSON.stringify(pet)}'></pet-card>\n
                `;
                    cards.push(card);
                    if (cards.length == 4) {
                        list += `<div class="petList">${cards.join("")}</div>`;
                        cards = [];
                    } else if (index + 1 == page.length) {
                        list += `<div class="petList">${cards.join("")}
                        <div style="width: 48%;"></div>
                        </div>`;
                    }
                }
            );
        }
        return list;
    }

    setPages() {
        var page = [];
        this.pets.forEach((pet, index) => {
            page.push(pet);
            if (page.length == 4 * this.lines) {
                this.pages.push(page);
                page = [];
            }
            if (index == this.pets.length - 1) {
                this.pages.push(page);
            }
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