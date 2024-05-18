let adoptPetButton = document.getElementById('adoptPet');
let donatePetButton = document.getElementById('donatePet');
let lostMuralButton = document.getElementById('lostMural');

adoptPetButton.addEventListener('click', () => {
    window.location.href = '/view/adoption.html';
});

donatePetButton.addEventListener('click', () => {
    window.location.href = '/view/loginRegister.html';
});

lostMuralButton.addEventListener('click', () => {
    window.location.href = '/view/lostMural.html';
});
