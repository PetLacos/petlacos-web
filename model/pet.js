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