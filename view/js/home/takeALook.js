let knowOngs = document.getElementById("knowOngs");
let accessMural = document.getElementById("accessMural");
let createLace = document.getElementById("adoptAPET");

knowOngs.addEventListener(
    "click",
    () => {
        window.location.href = "/view/ngos.html";
    }
);

accessMural.addEventListener(
    "click",
    () => {
        window.location.href = "/view/lostMural.html";
    }
);

createLace.addEventListener(
    "click",
    () => {
        window.location.href = "/view/adoption.html";
    }
);