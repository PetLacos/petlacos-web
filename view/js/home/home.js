// Elementos -----------------------------------------------------------------------------------------------

let scrollContainer = document.getElementById("scrollIndicatorContainer");


// Icones animados ----------------------------------------------------------------------------------------

/// Instancia o ícone animado de rolagem.
function instanceScrollIcon() {
    new rive.Rive({
        src: '/view/assets/rive/scroll_indicator.riv',
        canvas: document.getElementById('scrollIndicator'),
        autoplay: true,
    });
}


// Funções ------------------------------------------------------------------------------------------------

/// Esconde ou exibe o ícone animado de rolagem.
function setScrollIconHidden(hidden) {
    scrollContainer.hidden = hidden;
}


// Eventos -------------------------------------------------------------------------------------------------

scrollContainer.addEventListener(
    "click",
    () => {
        setScrollIconHidden(true);
        document.getElementById("takeALook").scrollIntoView({ behavior: "smooth", block: "center" });
    }
);

document.onscroll = () => {
    if (window.scrollY > 0) {
        setScrollIconHidden(true);
    } else {
        setScrollIconHidden(false);
    }
};

document.getElementById("createLace").addEventListener(
    "click",
    () => {
        window.location.href = "/view/adoption.html";
    }
);


// Inicialização -------------------------------------------------------------------------------------------
instanceScrollIcon();

