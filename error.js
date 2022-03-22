function soma(num1, num2){
    if(!Number.isInteger(num1)){
        console.log('soma - erro num1');
        console.log(num1);
        throw new Error("O parametro num1 deve ser um número inteiro");
    }

    if(!Number.isInteger(num2)){
        console.log('soma - erro num2');
        console.log(num2);
        console.log(typeof num2);
        throw new Error("O parametro num2 deve ser um número inteiro");
    }

    return num1 + num2;
}

try { //tente
    let resultado = soma(10, 'jose');
    console.log('O resultado é ' + resultado);
} catch(pirulito){ //capture o erro 
    console.log('Não foi possível concluir sua requisição. Tente novamente mais tarde.');
}

console.log('Terminando a execução');




