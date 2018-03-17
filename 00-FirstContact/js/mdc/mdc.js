let mdc = function(primeiroValor, segundoValor) {
    let resto;
    while (resto !== 0) {
        resto = primeiroValor % segundoValor;
        primeiroValor = segundoValor;
        segundoValor = resto;
    }
    return primeiroValor;
}