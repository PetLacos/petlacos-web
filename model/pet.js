/// Retorna o objeto do pet
export function petObject(
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
    imageSrc,
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
        imageSrc: imageSrc,
    };
}

/// Pet from json
export function petFromString(string) {
    const json = JSON.parse(string);
    return petObject(json.name, json.age, json.sex, json.behavior, json.castrated, json.imageSrc);
}

