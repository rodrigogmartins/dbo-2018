let potencia = function(base, expoente) {
    return base ** expoente;
}

let raiz = function(valor, indice) {
    return valor ** (1/indice);
}

let hipotenusa = function(primeiroCateto, segundoCateto) {
    primeiroCateto = potencia(primeiroCateto, 2);
    segundoCateto = potencia(segundoCateto, 2);
    let pitagoras = primeiroCateto + segundoCateto;
    return raiz(pitagoras, 2);
}