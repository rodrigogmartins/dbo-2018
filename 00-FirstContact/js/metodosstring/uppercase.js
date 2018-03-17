let upperCase = function (texto) {
    let textoEmCaixaAlta = '';
    for (let i = 0; i < texto.length; i++) {
        if (ehLetraMinuscula(texto[i])) {
            let codigoLetraMaiuscula = texto[i].charCodeAt() - 32;
            textoEmCaixaAlta += String.fromCharCode(codigoLetraMaiuscula);
        } else {
            textoEmCaixaAlta += texto[i];
        }
    }
    return textoEmCaixaAlta;
}

let ehLetraMinuscula = function(caractere) {
    let codigoCaractere = caractere.charCodeAt();
    return (codigoCaractere >= 97 && codigoCaractere <= 122);
}