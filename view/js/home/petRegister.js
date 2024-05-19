import { petObject, petFromString } from "../../../model/pet";

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

    const petObjectData = petObject(
        petName.value,
        ownerName.value,
        years.value,
        gender.value,
        species.value,
        race.value,
        castrated.value,
        size.value,
        behavior.value,
        microchip.value,
        cepInput.value,
        localizacao.textContent,
        description.value,
        // src da imagem,
    );

    let dadosJSON = JSON.stringify(petObjectData);

    let list = localStorage.getItem('petList');
    if (list === null || list === undefined) {
        list = [];
    }
    list.push(dadosJSON);
    localStorage.setItem('petList', list);

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
    cep = cep.replace(/\D/g, '');
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
            let bairro = data.bairro;

            localizacao.textContent = `${bairro}, ${cidade} - ${estado}`;
            if (estado == undefined || cidade == undefined) {
                localizacao.textContent = `CEP não encontrado`;
            }
        })
        .catch(error => {
            console.error(error.message);
        });
}

const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
}

cepInput.addEventListener("input", function () {
    if (cepInput.value.length === 9) {
        buscaCep(cepInput.value);
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    campoVazio();
    salvarLocal();
});
