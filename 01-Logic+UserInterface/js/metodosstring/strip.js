let strip = function(texto, caractere) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        if (naoECaractereASerIgnorado(texto[i], caractere)) {
            resultado += texto[i];
        }        
    }
    return resultado;
}

let naoECaractereASerIgnorado = function(caractere, caractereASerIgnorado) {
    return caractere !== caractereASerIgnorado;
}