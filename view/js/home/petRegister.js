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
const cepInput = document.querySelector("#cep"); // Corrigido para "cepInput"
const localizacao = document.querySelector("#localizacao");
const description = document.querySelector("#description");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
})







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


const cadPet = [
    {
        nome: petName.value,
    }
    ]