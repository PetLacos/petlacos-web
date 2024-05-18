/// Retorna o objeto do pet
function petObject(name, age, sex, behavior, castrated, imageSrc) {
    return {
        name: name,
        age: age,
        sex: sex,
        behavior: behavior,
        castrated: castrated,
        imageSrc: imageSrc,
    };
}

/// Pet from json
function petFromString(string) {
    const json = JSON.parse(string);
    return petObject(json.name, json.age, json.sex, json.behavior, json.castrated, json.imageSrc);
}

