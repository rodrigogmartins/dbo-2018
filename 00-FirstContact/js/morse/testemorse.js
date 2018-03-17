let texto = 'teste morse';
let codigo = morse(texto);

console.log(codigo); // - . ... - . / -- --- .-. ... .

// Casos de Teste:
console.log(codigo === '- . ... - . / -- --- .-. ... .', "codigo === '- . ... - . / -- --- .-. ... .'");
console.log(morse('TESTE MORSE') === '- . ... - . / -- --- .-. ... .', "morse('TESTE MORSE') === '- . ... - . / -- --- .-. ... .'");
console.log(morse('2333TESTE 0MORSE__?') === '- . ... - . / -- --- .-. ... .', "morse('2333TESTE 0MORSE__?') === '- . ... - . / -- --- .-. ... .'");
console.log(morse('tEsTe morSE') === '- . ... - . / -- --- .-. ... .', "morse('tEsTe morSE') === '- . ... - . / -- --- .-. ... .'");
console.log(morse('infomorse') === '.. -. ..-. --- -- --- .-. ... .', "morse('infomorse') === '.. -. ..-. --- -- --- .-. ... .'");
console.log(morse('SOS 666') === '... --- ... /', "'SOS 666') === '... --- ... /'");
console.log(morse('VLW MaRcELO 98798_!$!@(%@*^!%') === '...- .-.. .-- / -- .- .-. -.-. . .-.. --- /', "'VLW MaRcELO 98798_!$!@(%@*^!%') === '...- .-.. .-- / -- .- .-. -.-. . .-.. --- /'");