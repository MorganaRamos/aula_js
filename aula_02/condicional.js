
const comparacao = (numero) => {
    if(numero < 10){
        console.log("é menor que 10")
    } else if (numero > 10){
        console.log("é maior que 10")
    } else{
        console.log("é igual a 10")
    }
}



const comparacao2 = (n1, n2) => {
    if(n1 < n2){
        console.log("numero", n1,"é menor que", n2)
    } else if (n1 > n2){
        console.log("numero", n1,"é maior que", n2)
    } else{
        console.log("numero", n1,"é igual a ", n2)
    }
}

comparacao2(5,10)
comparacao2(17,11)
comparacao2(13,13)
