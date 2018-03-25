const QUEBRALINHA = 10;
const PARAGRAFO = 9;
const ESPACO = 32;
const MEIOESACO = 13;

let trim = function(string) {
    let stringSemEspacos = trimLeft(string);
    stringSemEspacos = trimRight(stringSemEspacos);
    return stringSemEspacos;
}

let trimLeft = function(palavra) {
    let resultado = '';
    let ok = false;
    for (let i = 0; i < palavra.length; i++) {
        if (caractereNaoEEspaco(palavra[i]) || ok){
            resultado += palavra[i];
            ok = true; 
        }
    }
    return resultado;
}

let trimRight = function(palavra) {
    let resultado = '';
    let ok = false;
    for (let i = palavra.length-1; i >= 0; i--) {
        if (caractereNaoEEspaco(palavra[i]) || ok){
            resultado += palavra[i];
            ok = true;
        }
    }
    return reverse(resultado);    
}

let caractereNaoEEspaco = function(caractere) {
    let charCode = caractere.charCodeAt();
    if (charCode === ESPACO || charCode === MEIOESACO || charCode === QUEBRALINHA || charCode === PARAGRAFO) {
        return false;
    }
    return true;
}   