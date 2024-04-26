class cookies extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bannerCookies/bannerCookies.css">
    <title>Banner cookies</title>
</head>
<body>
    <div id="cookie-banner" class="legendFont">
        <p>Nós usamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies.</p>
        <button class="btn-cookie legendFont">Aceitar</button>
        <button class="btn-cookie legendFont">Recusar</button>
    </div>
</body>
</html>

 `;
    }
};
customElements.define('cookies-component', cookies);