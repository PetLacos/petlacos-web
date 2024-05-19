const petName = document.querySelector("#petName");
const ownerName = document.querySelector("#ownerName");
const years = document.querySelector("#years");
const gender = document.querySelector("#gender");
const species = document.querySelector("#species");
const race = document.querySelector("#race");
const castrated = document.querySelector("#castrated");
const size = document.querySelector("#size");
const behavior = document.querySelector("#behavior");
const microchip = document.querySelector("#microchip");
const cepInput = document.querySelector("#cep");
const localizacao = document.querySelector("#localizacao");
const description = document.querySelector("#description");
const form = document.querySelector('form');

function salvarLocal() {

    const formCadastroPet = {
        petName: petName.value,
        ownerName: ownerName.value,
        years: years.value,
        gender: gender.value,
        species: species.value,
        race: race.value,
        castrated: castrated.value,
        size: size.value,
        behavior: behavior.value,
        microchip: microchip.value,
        cepInput: cepInput.value,
        localizacao: localizacao.textContent,
        description: description.value
    };

    let dadosJSON = JSON.stringify(formCadastroPet);

    localStorage.setItem('formCadastroPet', dadosJSON);

    alert('Dados salvos no storage!!');
}

function campoVazio() {
    let campos = form.querySelectorAll('input, textarea');
    for (let campo of campos) {
        if (campo.value.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    }
}


function buscaCep(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('CEP não encontrado');
        })
        .then(data => {
            let estado = data.uf;
            let cidade = data.localidade;

            localizacao.textContent = `${cidade}, ${estado}`;
            if (estado == undefined || cidade == undefined) {
                localizacao.textContent = `CEP não encontrado`;
            }
        })
        .catch(error => {
            console.error(error.message);
        });
}

cepInput.addEventListener("input", function() {
    if (cepInput.value.length === 8) {
        buscaCep(cepInput.value);
    }
});

form.addEventListener('submit', function(e) {
    campoVazio();
    salvarLocal();
});
