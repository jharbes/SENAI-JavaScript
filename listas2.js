let nomes = [
    'josé',
    'maria',
    'ricardo'
];

//Map
function maiusculo(item){
    return item.toUpperCase();
}

let nomesMaiusculo = nomes.map(maiusculo);
console.log(nomesMaiusculo);
console.log(nomes);

/*
1. Crie uma lista com 5 numeros inteiros
2. Utilize o método map para somar 3 
a cada um desses números
3. Imprima as duas listas
*/
