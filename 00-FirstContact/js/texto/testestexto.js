//REVERSE
let t1 = 'teste';
let r1 = reverse(t1);
console.log('CASOS DE TESTE REVERSE');
// Casos de Teste:
console.log(r1 === 'etset', "r1 === 'etset'"); 
// foi mudado pois apresentava o seguinte erro r1.equals is not a function, porém o retorno está correto
console.log(reverse('internet das coisas') === 'sasioc sad tenretni', "reverse('internet das coisas') === 'sasioc sad tenretni'");
console.log(reverse('objeto') === 'otejbo', "reverse('objeto') === 'otejbo'");
console.log(reverse('Desenvolvimento Baseado Em Objetos') === 'sotejbO mE odaesaB otnemivlovneseD', "'Desenvolvimento Baseado Em Objetos') === 'sotejbO mE odaesaB otnemivlovneseD'");
console.log(reverse('Free Beer Tomorrow') === 'worromoT reeB eerF', "reverse('Free Beer Tomorrow') === 'worromoT reeB eerF'");

 
// PALINDROME
let t2 = 'pato';
let r2 = palindrome(t2);
console.log('');
console.log('CASOS DE TESTE PALINDROME');
// Casos de Teste:
console.log(r2 === false);
console.log(palindrome('arara') === true, "palindrome('arara') === true");
console.log(palindrome('a cara rajada da jararaca') === true, "palindrome('a cara rajada da jararaca') === true");
console.log(palindrome('subi no onibus') === true, "palindrome('subi no onibus') === true");
console.log(palindrome('Caraca Muleke, que dia QUE ISSO') === false, "palindrome('Caraca Muleke, que dia QUE ISSO') === false");


// STRIP
let t3 = 'info: poo';
let r3 = strip(t3, ':');
console.log('');
console.log('CASOS DE TESTE PALINDROME');
// Casos de Teste:
console.log(r3 === 'info poo', "r3 === 'info poo'");
console.log(strip('.teste....de.strip..', '.') === 'testedestrip', "strip('.teste....de.strip..', '.') === 'testedestrip'");
console.log(strip('arara', 'a') === 'rr', "strip('arara', 'a') === 'rr'");
console.log(strip('analise e desenvolvimento de sistemas', 'e') === 'analis  dsnvolvimnto d sistmas', "strip('analise e desenvolvimento de sistemas', 'e') === 'analis  dsnvolvimnto d sistmas'");
console.log(strip('a cara rajada da jararaca', 'a') === ' cr rjd d jrrc', "strip('a cara rajada da jararaca', 'a') === ' cr rjd d jrrc'");
console.log(strip('nem suei', 'e') === 'nm sui', "strip('nem suei', 'e') === 'nm sui'");
