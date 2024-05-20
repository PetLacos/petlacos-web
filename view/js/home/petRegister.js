/// Retorna o objeto do pet
function petObject(
    uid,
    userEmail,
    name,
    ownerName,
    ownerNumber,
    age,
    gender,
    specie,
    race,
    castrated,
    size,
    behavior,
    microchip,
    cepInput,
    location,
    description,
    imgData,
) {
    return {
        uid: uid,
        userEmail: userEmail,
        name: name,
        ownerName: ownerName,
        ownerNumber: ownerNumber,
        age: age,
        gender: gender,
        specie: specie,
        race: race,
        castrated: castrated,
        size: size,
        behavior: behavior,
        microchip: microchip,
        cepInput: cepInput,
        location: location,
        description: description,
        imgData: imgData,
    };
}

/// Pet from json
function petFromString(string) {
    const json = JSON.parse(string);
    return petObject(
        json.uid,
        json.userEmail,
        json.name,
        json.ownerName,
        json.ownerNumber,
        json.age,
        json.gender,
        json.specie,
        json.race,
        json.castrated,
        json.size,
        json.behavior,
        json.microchip,
        json.cepInput,
        json.location,
        json.description,
        json.imgData,
    );
}

const petName = document.querySelector("#petName");
const ownerName = document.querySelector("#ownerName");
const ownerNumber = document.querySelector("#ownerNumber");
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

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function salvarLocal() {
    let imgTag = document.querySelector('.pic_img');
    let imgData = getBase64Image(imgTag);

    let user = JSON.parse(localStorage.getItem('loggedUser'));
    var shouldReturn = false;
    if (!user) {
        alert('Usuário não logado');
        window.location.href = '/view/loginRegister.html?login=true';
        shouldReturn = true;
    }
    if (shouldReturn) return;

    let userEmail = user.email;

    const petObjectData = petObject(
        guidGenerator(),
        userEmail,
        petName.value,
        ownerName.value,
        ownerNumber.value,
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
    window.location.href = '/view/dashboard.html?myPets=true';
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

// ----------------- Máscaras -----------------

const handleTelephone = (event) => {
    let input = event.target
    input.value = telephoneMask(input.value)
}

const telephoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
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
            var img = document.querySelector('.pic_img');
            if (!img) {
                img = document.createElement('img');
            }
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
