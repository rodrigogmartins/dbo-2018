let catetoOposto = 4;
let catetoAdjacente = 3;

let hip = hipotenusa(catetoAdjacente, catetoOposto);
console.log(hip); // imprime 5

// Casos de Teste:
console.log(hip === 5, 'hipotenusa(4, 3) === 5');
console.log(hipotenusa(7, 24) === 25, 'hipotenusa(7, 24) === 25');
console.log(hipotenusa(12, 19) === 22.47220505424423, 'hipotenusa(12, 19) === 22.47220505424423');
console.log(hipotenusa(1366, 768) === 1567.0928498337296, 'hipotenusa(1366, 768) === 1567.0928498337296');
console.log(hipotenusa(1920, 1080) === 2202.9071700822983, 'hipotenusa(1920, 1080) === 2202.9071700822983');
console.log(hipotenusa(2560, 1080) === 2778.488797889961, 'hipotenusa(2560, 1080) === 2778.488797889961');
