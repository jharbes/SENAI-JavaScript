let aluno = {
    nome: 'Raphael',
    idade: 34,
    anoNascimento: 1987,
    cpf: "123.123.123-22",
    get calculaIdade() {
        return 2022 - this.anoNascimento;
    },
    faltas: [
        '01-03-2022',
        '02-03-2022',
        '03-03-2022',
        '05-03-2022'
    ]
};

let carro = {
    modelo: 'Corola',
    valor: 80000,
    quantidade: 10
};

let listaCarros = [
    {
        modelo: 'Corola',
        valor: 80000,
        quantidade: 10
    },
    {
        modelo: 'Celta',
        valor: 12000,
        quantidade: 2
    },
    {
        modelo: 'Fusca',
        valor: 500000,
        quantidade: 1
    },
    {
        modelo: 'Palio',
        valor: 13000,
        quantidade: 4
    },
];


listaCarros.map((carro) => {
    console.log(`Modelo: ${carro.modelo} | Valor: ${carro.valor}`);
});