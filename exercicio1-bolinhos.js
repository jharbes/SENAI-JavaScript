/*
01. donuts
Dado um contador inteiro do numero de donuts, retorne uma string
com o formato 'Number of donuts: <count>' onde <count> é o numero
recebido. Entretanto, se o contador for 10 ou mais, use a palavra 'many'
ao invés do contador.
Exemplo: donuts(5) retorna 'Number of donuts: 5'
e donuts(23) retorna 'Number of donuts: many'
*/

function donuts(count){
    
    if (count<=9)
        mensagem="Number of donuts: " + count;
    else
        mensagem="Number of donuts: many";
    
    return mensagem;
}




// --- Daqui para baixo são apenas códigos auxiliáries de teste. ---

function test(f, in_, expected){
    /*
    Executa a função f com o parâmetro in_ e compara o resultado com expected.
    :return: Exibe uma mensagem indicando se a função f está correta ou não.
    */

    out = f(in_)

    if (out == expected){
        sign = '✅'
        info = ''
    } else {
        sign = '❌'
        info = `e o correto é ${expected}`
    }

    console.log(`${sign} ${f.name}(${in_}) retornou ${out} ${info}`)
}


// Testes que verificam o resultado do seu código em alguns cenários.
test(donuts, 4, 'Number of donuts: 4')
test(donuts, 9, 'Number of donuts: 9')
test(donuts, 10, 'Number of donuts: many')
test(donuts, 99, 'Number of donuts: many')