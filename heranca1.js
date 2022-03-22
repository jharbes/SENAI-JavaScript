class Automovel{
    _imposto = 0.12;
    _comissaoVendedor = 0.05;
    _acrescimo = 0.10;

    constructor(modelo, precoCompra, cor, tipo){
        this._modelo = modelo;
        this._precoCompra = precoCompra;
        this._cor = cor;
        this._tipo = tipo;
    }

    get modelo(){
        return this._modelo;
    }

    precoVenda(){
        return this._precoCompra + (this._precoCompra * this._imposto)
            + (this._precoCompra * this._comissaoVendedor)
            + (this._precoCompra * this._acrescimo);
    }
}

class Carro extends Automovel {
    _tipo = 'carro';

    constructor(modelo, precoCompra, cor){
        super(modelo, precoCompra, cor);

        this._validaModelo(modelo);
    }

    _validaModelo(modelo){
        if(modelo.lenght < 4){
            console.log('não pode');
            return;
        }
        this._modelo = modelo;
    }

    set modelo(novoModelo){
        this._validaModelo(novoModelo);
    }




}

class Moto extends Automovel{
    _tipo = 'motocicleta';
    _impostoMotocicleta = 0.02;

    constructor(modelo, precoCompra, cor){
        super(modelo, precoCompra, cor);
    }

    precoVenda(){
        return super.precoVenda() + (this._precoCompra * this._impostoMotocicleta);
    }
}


let carro1 = new Carro('Corolla', 50000, 'Cinza');
// console.log(carro1);

let motocicleta1 = new Moto('Honda Biz', 13000, 'Vermelho');
// console.log(motocicleta1);

console.log(`Preço de venda do ${carro1.modelo}: ` + carro1.precoVenda());
console.log(`Preço de venda do ${motocicleta1.modelo}: ` + motocicleta1.precoVenda());