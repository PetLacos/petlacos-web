class PetList extends HTMLElement {
    static attributes = ["title", "listType", "oneLine"];
    static listTypes = ["ongs", "destacados", "nossos"];

    constructor() {
        super();

        this.title = this.getAttribute(PetList.attributes[0]);
        this.listType = this.getAttribute(PetList.attributes[1]);
        this.oneLine = this.getAttribute(PetList.attributes[2]);

        this.pageIndex = 1;
        this.previousPage = this.pageIndex - 1;
        this.nextPage = this.pageIndex + 1;
    }

    connectedCallback() {
        this.innerHTML = `
        <section id="onOngs">
            <div class="listBox">
                <div class="header">
                    <h2 class="sectionSubtitleFont">${this.title}:</h2>
                    <div id="buttons">
                        <button id="previousButton">
                            <img class="disabled" src="/view/assets/icons/disabledArrow.svg" alt="Página anterior">
                        </button>
                        <h4 id="previousIndex" class="previousIndex legendFont">${this.previousPage}</h4>
                        <h3 id="pageIndex" class="pageIndex sectionSubtitleFont">${this.pageIndex}</h3>
                        <h4 id="nextIndex" class="nextIndex legendFont">${this.nextPage}</h4>
                        <button id="nextButton">
                            <img src="/view/assets/icons/listArrow.svg" alt="Próxima página">
                        </button>
                    </div>
                </div>
                ${this.petList}
            </div>
        </section>
        `;
    }
}