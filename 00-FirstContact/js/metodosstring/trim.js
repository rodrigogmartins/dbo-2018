let trim = function(string) {
    let stringSemEspacos = trimLeft(string);
    stringSemEspacos = trimRigth(stringSemEspacos);
    return stringSemEspacos;
}

let trimLeft = function(palavra) {
    let resultado = '';
    let ok = false;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] !== ' ' || ok){
            resultado += palavra[i];
            ok = true; 
        }
    }
    return resultado;
}

let trimRigth = function(palavra) {
    let resultado = '';
    let ok = false;
    for (let i = palavra.length-1; i >= 0; i--) {
        if (palavra[i] !== ' ' || ok){
            resultado += palavra[i];
            ok = true;
        }
    }
    return reverse(resultado);    
}