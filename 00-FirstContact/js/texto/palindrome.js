let palindrome = function(texto) {
    texto = strip(texto, ' ');
    texto = upperCase(texto);
    return texto === reverse(texto);
}