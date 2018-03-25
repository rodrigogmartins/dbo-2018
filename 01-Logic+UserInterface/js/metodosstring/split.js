let split = function(palavra, separador) {
    let resultado = [];
    let palavraSeparada = '';
    let ok = false;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] !== separador || !ok){
            palavraSeparada += palavra[i];
            ok = true; 
        } else {
            resultado.push(palavraSeparada);
            palavraSeparada = '';
            ok = false;
        }
    }
    resultado.push(palavraSeparada);
    return resultado;
}
