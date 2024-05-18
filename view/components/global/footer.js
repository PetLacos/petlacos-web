class footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="/view/css/footer/footer.css">
            
            <footer id="fatherFooter"> 
                <div id="leftColumn">
                    <div id='oneHundred'>
                        <div id="sloganDiv">
                            <img src='/view/assets/logo/vertical_white.png' id="logoPet"></img>
                            <div class="childFooter" id="petLacos">
                                <p class="legendFont">LaçosPet</p>
                                <p class="legendFont paragraph">A LaçosPet é uma instituição sem fins lucrativos, voltada principalmente à adoção de pets e suporte às ONGs que fazem esse trabalho</p>
                            </div>
                        </div>
                        <p id="reserve" class="legendFont">© 2024 | LaçosPet. Todos os direitos reservados.</p>
                    </div>
                </div>
            
                <div id="rightColumn">
                    <div class="childFooter" id="usefullLinks">
                        <p class="legendFont">Links Úteis</p>
                        <ul class="legendFont" id="theList">
                            <li><a class="listFooter" href="/index.html">Home</a></li>
                            <li><a class="listFooter" href="/view/adoption.html">Adote</a></li>
                            <li><a class="listFooter" href="/view/aboutUs.html">Sobre</a></li>
                            <li><a class="listFooter" href="/view/lostMural.html">Perdidos</a></li>
                            <li><a class="listFooter" href="/view/ngos.html">ONGs</a></li>
                        </ul>
                    </div>
                    <img src="/view/assets/logoSenac.svg" id="logoSenac"></img>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', footer)