const INPUTTEXTO = document.querySelector('#texto');
const INPUTSEPARADOR = document.querySelector('#separador');
const BUTTON = document.querySelector('#transformar');
const ULRESULTADO = document.querySelector('#resultado');

BUTTON.addEventListener('click', function(e) {
    let texto = INPUTTEXTO.value;
    let separador = INPUTSEPARADOR.value;
    let palavras = split(texto, separador);

    ULRESULTADO.innerHTML = '';

    for (let palavra of palavras) {
        ULRESULTADO.innerHTML += `<li> ${palavra} </li>`;
    }

    e.preventDefault();
});