let stats = function(texto) {
    let palavras = split(texto, ' ');
    let quantidade = 0;
    let retorno = [];

    for (let palavra of palavras) {

        if (!indexOf(palavra, STOPWORDS)) {
            for (let pal of palavras) {
                quantidade += (pal === palavra);
            }

            let estatistica = [palavra, quantidade];
            retorno.push(estatistica);
        }
    }

    return retorno;
}
