const TEXTAREA = document.querySelector('#texto');
const BUTTON = document.querySelector('#gerarestatistica');
const OLRESULTADO = document.querySelector('#resultado');

BUTTON.addEventListener('click', function(e) {
    let texto = TEXTAREA.value;
    let estatisticas = stats(texto);

    OLRESULTADO.innerHTML = '';

    for (let estatistica of estatisticas) {
        let estatisticaParaMostrar = '<p> PALAVRA: ' + estatistica[0] + '<br> APARIÇÕES: ' + estatistica[1] + '</p>';
        OLRESULTADO.innerHTML += `<li> ${estatisticaParaMostrar} </li>`;
    }
});