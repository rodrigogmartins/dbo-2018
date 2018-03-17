let morse = function (texto) {
    texto = upperCase(texto); 
    let resultado = '';   
    for (let i = 0; i < texto.length; i++) {
        if (existeEsseCaractere(texto[i])) {
            resultado += (' ' + CARACTERES.get(texto[i]));
        }
    }
    return trim(resultado);
}

let existeEsseCaractere = function(caractere) {
    return CARACTERES.get(caractere);
}