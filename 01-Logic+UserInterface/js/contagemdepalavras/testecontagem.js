const texto = "Programação Orientada a Objetos (também conhecida pela sua sigla POO) é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'. A POO é um dos 4 principais paradigmas de programação (as outras são programação imperativa, funcional e lógica). Os objetos são operados com o conceito de 'this' (isso) ou 'self' (si), de forma que seus métodos muitas vezes modifiquem os dados da própria instância. Os programas são arquitetados na forma de objetos que interagem entre si. Dentre as várias abordagens da POO, as baseadas em classes são as mais comuns: objetos são instâncias de classes, o que em geral também define o tipo do objeto. Assim, na POO, implementa-se um conjunto de classes. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento com outros objetos. A alternativa mais usual ao uso de classes é o uso de protótipos. Neste caso, objetos são copias de outros objetos, não instâncias de classes. Javascript e Lua são exemplos de linguagens cuja POO é realizada por protótipos. A diferença mais prática mais evidente é que na POO baseada em protótipos apenas a herança simples é implementada pela cópia do objeto.";

const result = stats(texto);
console.log(result.length > 50)
// cada item em resultado é a estatística de uma palavra
// o subitem 0 é a palavra e o subitem 1 é a contagem
console.log(result[0][0] === 'programação');
console.log(result[0][1] === 4);
console.log(result[1][0] === 'orientada');
console.log(result[1][1] === 1);
console.log(result[2][0] === 'objetos');
console.log(result[2][1] === 9);
console.log(result[3][0] === 'também');
console.log(result[3][1] === 2);
console.log(result[4][0] === 'conhecida');
console.log(result[4][1] === 1);
console.log(result[5][0] === 'sigla');
console.log(result[5][1] === 1);
console.log(result[6][0] === 'poo');
console.log(result[6][1] === 6);
console.log(result[7][0] === 'modelo');
console.log(result[7][1] === 1);
console.log(result[8][0] === 'análise');
console.log(result[8][1] === 1);
console.log(result[9][0] === 'projeto');
console.log(result[9][1] === 1);
console.log(result[10][0] === 'software');
console.log(result[10][1] === 1);
console.log(result[11][0] === 'baseado');
console.log(result[11][1] === 1);
console.log(result[12][0] === 'composição');
console.log(result[12][1] === 1);
console.log(result[13][0] === 'interação');
console.log(result[13][1] === 1);
console.log(result[14][0] === 'diversas');
console.log(result[14][1] === 1);
console.log(result[15][0] === 'unidades');
console.log(result[15][1] === 1);