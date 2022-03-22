function soma(a,b){
    return a+b;
}

function subtracao(a,b){
    return a-b;
}

function produto(a,b){
    return a*b;
}

function divisao(a,b){
    return a/b;
}

console.log(soma(2,3));

function calcula2(a,b,op){
    switch(op){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            return "Operacao nao indicada."
    }
}

function calcula3(a,b,op){
    return op(a,b);
}

let calcula4=(numero1,numero2,operacao)=>{
    return operacao(numero1,numero2);
}

function soma2(a,b=10)  {
    return a+b;
}

console.log(calcula4(10,20,soma));

console.log(calcula2(10,20,'*'));

console.log(soma2(10,20));
console.log(soma2(10));