// Lista = Array

let listaCarros=["Polo","Camaro","Celta","Toro","Fusca"];

console.log(listaCarros);

console.log(listaCarros.length);
listaCarros.sort();

listaCarros.push("Monza");

console.log(listaCarros);

let ultimo=listaCarros.pop();
console.log(listaCarros);

let primeiroCarro=listaCarros.shift();

console.log(listaCarros);

let carroRemovido=listaCarros.splice(2,1);
console.log(listaCarros);

let listaNotaDaProva=[10,7,8.2,5,9];

console.log(listaNotaDaProva[2]);

let listaMista=["Joao",20,"Maria",50,()=>{}];
console.log(listaMista);

console.log(listaCarros.indexOf("Fusca"));

function trataCarro(carro){
    console.log(carro);
}

listaCarros.map((carro)=>{console.log(carro)}); // Funcao anonima ou arrow function
