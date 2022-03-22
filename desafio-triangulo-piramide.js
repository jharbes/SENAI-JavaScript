/*
function triangulo(k){
    let frase=""
    for (i=1;i<=k;i++){
        frase=frase+"#";
        console.log(frase);
    }
}
triangulo(10);
*/





function piramide (k){
    let frase1=""
    for (j=1;j<k;j++)
        frase1+=" ";

    let frase="#";
    for (i=1;i<=k;i++){
        console.log(frase1+frase);
        frase1=frase1.slice(1);
        frase+="##";
    }
}
piramide(10);
