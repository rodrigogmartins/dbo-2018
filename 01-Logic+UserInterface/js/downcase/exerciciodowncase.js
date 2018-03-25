const INPUT = document.querySelector('#textoentrada');
const OUTPUT = document.querySelector('#textosaida');
const BUTTON = document.querySelector('#transformar');

BUTTON.addEventListener('click', function(e) {
    let textoEntrada = INPUT.value;
    let textoSaida = downcase(textoEntrada);
    OUTPUT.textContent = textoSaida;
    e.preventDefault();
});


