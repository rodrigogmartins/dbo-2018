let stats = function(texto) {
    let palavras = split(texto, ' ');
    let palavrasUsadas = ' ';
    let retorno = [];
    let quantidade = 0;
    for (let palavra of palavras) {
        palavra = limparPalavra(palavra);
        if (naoEhStopWord(palavra) && palavraNaoFoiContada(palavra, palavrasUsadas)) {
            palavrasUsadas += (' ' + palavra);
            for (let palavraSecundaria of palavras) {
                palavraSecundaria = limparPalavra(palavraSecundaria);
                quantidade += (palavraSecundaria === palavra);
            }
            let estatistica = [palavra, quantidade];
            retorno.push(estatistica);
            quantidade = 0;
        }
    }
    return retorno;
}

let palavraNaoFoiContada = function(palavra, palavrasUsadas) {
    return !indexOf(palavra, palavrasUsadas);
}

let naoEhStopWord = function(palavra) {
    return !indexOf(palavra, STOPWORDS);
}

let limparPalavra = function(palavra) {
    palavra = downcase(palavra);
    palavra = strip(palavra, "'");
    palavra = strip(palavra, '"');
    palavra = strip(palavra, '(');
    palavra = strip(palavra, '[');
    palavra = strip(palavra, '{');
    palavra = strip(palavra, '}');
    palavra = strip(palavra, ']');
    palavra = strip(palavra, ')');
    palavra = strip(palavra, '!');
    palavra = strip(palavra, '?');
    palavra = strip(palavra, '/');
    palavra = strip(palavra, '\\');
    palavra = strip(palavra, '|');
    palavra = strip(palavra, '.');
    palavra = strip(palavra, ',');
    palavra = strip(palavra, ':');
    palavra = strip(palavra, ';');
    return palavra;
}
