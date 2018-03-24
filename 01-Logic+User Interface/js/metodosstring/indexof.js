let indexOf = function(string, texto) {
    let palavras = split(texto, ' ');
    for (let palavra of palavras) {
        if (palavra === string) {
            return true;
        }
    }
    return false;
}