/// Retorna o objeto do pet
function petObject(
    name,
    ownerName,
    age,
    gender,
    specie,
    race,
    castrated,
    size,
    behavior,
    microchip,
    cepInput,
    localizacao,
    description,
    imgData,
) {
    return {
        name: name,
        ownerName: ownerName,
        age: age,
        gender: gender,
        specie: specie,
        race: race,
        castrated: castrated,
        size: size,
        behavior: behavior,
        microchip: microchip,
        cepInput: cepInput,
        localizacao: localizacao,
        description: description,
        imgData: imgData,
    };
}

/// Pet from json
function petFromString(string) {
    const json = JSON.parse(string);
    return petObject(
        json.name,
        json.ownerName,
        json.age,
        json.gender,
        json.specie,
        json.race,
        json.castrated,
        json.size,
        json.behavior,
        json.microchip,
        json.cepInput,
        json.localizacao,
        json.description,
        json.imgData,
    );
}

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
// Imagem
const inputFileSelect = document.querySelector('#insertImage');
const insertImageButton = document.querySelector('#insertImageButton');
const ondeApareceAFoto = document.querySelector('.imagePreview');

console.log('petRegister.js loaded');

function salvarLocal() {
    let imgTag = document.querySelector('.pic_img');
    let imgData = getBase64Image(imgTag);

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
        `data:image/png;base64,${imgData}`,
    );

    let dadosJSON = petObjectData;

    let list = JSON.parse(localStorage.getItem('petList'));
    if (!list) {
        list = [];
    }
    list.push(dadosJSON);
    localStorage.setItem('petList', JSON.stringify(list));
    console.log(list);

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

// ----------------- Imagem -----------------

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

inputFileSelect.addEventListener('change', function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function (e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('pic_img');
            insertImageButton.style.filter = 'opacity(0.5)';
            insertImageButton.innerHTML = 'Alterar Foto';

            ondeApareceAFoto.appendChild(img)

        })

        reader.readAsDataURL(file);
    } else {
        ondeApareceAFoto.innerHTML = 'Sem imagem selecionada';
    }
})
