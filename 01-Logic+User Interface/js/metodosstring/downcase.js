const INPUT = document.querySelector('#textoentrada');
const OUTPUT = document.querySelector('#textosaida');
const BUTTON = document.querySelector('#transformar');

BUTTON.addEventListener('click', function(e) {
    let textoEntrada = INPUT.value;
    let textoSaida = downcase(textoEntrada);
    OUTPUT.textContent = textoSaida;
    e.preventDefault();
});


let downcase = function (texto) {
    let textoEmCaixaBaixa = '';
    for (let i = 0; i < texto.length; i++) {
        if (ehLetraMaiuscula(texto[i])) {
            let codigoLetraMaiuscula = texto[i].charCodeAt() + 32;
            textoEmCaixaBaixa += String.fromCharCode(codigoLetraMaiuscula);
        } else {
            textoEmCaixaBaixa += texto[i];
        }
    }
    return textoEmCaixaBaixa;
}

let ehLetraMaiuscula = function(caractere) {
    let codigoCaractere = caractere.charCodeAt();
    return (codigoCaractere >= 65 && codigoCaractere <= 90) ||  (codigoCaractere >= 192 && codigoCaractere <= 221);
}

let ehLetraMaiusculaAcentuada = function(caractere) {
    let codigoCaractere = caractere.charCodeAt();
    return (codigoCaractere >= 192 && codigoCaractere <= 221);
}