// Lista = Array

let listaCarros = [ //Lista de Strings
    "Polo",
    "Camaro",
    "Celta",
    "Toro",
    "Fusca"
];

listaCarros.push("Monza"); //Adiciona um item no final da lista

let listaNotasDaProva = [10, 7, 8.2, 5, 9]; //Lista de números

let listaMista = ["João", 20, "Maria", 50, () => {}]; //Lista mista


listaCarros.push("Palio");

//Loops
for(let contador = 0; contador < listaCarros.length; contador++){
    console.log(listaCarros[contador]);
}

let contador = 7;
while(contador < listaCarros.length){ //Enquanto
    console.log(listaCarros[contador]);
    contador++;
}

//let contador = 7;
do { //Faça
    console.log(listaCarros[contador]);
    contador++;
} while(contador < listaCarros.length); //Enquanto
function trataCarro(carro){
    console.log(carro);
}
listaCarros.map(trataCarro);

listaCarros.push("Toro");

listaCarros.map((carro) => { //Função anonima ou Arrow Funcion
    if(carro == "Toro"){
        console.log(carro);
    }
});
