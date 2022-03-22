let numeros = [
    10,
    20,
    55,
    128,
    7,
    202
];


let numerosFiltrados = numeros.filter((num) => {
    return num > 50;
});

console.log(numeros);
console.log(numerosFiltrados);