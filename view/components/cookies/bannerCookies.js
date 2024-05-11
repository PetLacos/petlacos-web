class cookies extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/bannerCookies/bannerCookies.css">
        <div id="cookie-banner" class="legendFont">
            <p>Nós usamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies e com nossa <a href="./" class="textLink">política de privacidade</a>.</p>
            <button class="btn-cookie legendFont">Aceitar</button>
            <button class="btn-cookie legendFont">Recusar</button>
            <button class="btn-cookie legendFont">Configurar opçãoes de cookies</button>
        </div>
 `;
    }
};
customElements.define('cookies-component', cookies);