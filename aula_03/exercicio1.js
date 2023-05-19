
const comparacao = (n1, n2) => {
    if(n1 < n2){
        console.log(`numero ${n1} é menor que ${n2}`)
    } else if (n1 > n2){
        console.log("numero", n1,"é maior que", n2)
    } else{
        console.log("numero", n1,"é igual a ", n2)
    }
}

comparacao(5,10)
comparacao(17,11)
comparacao(13,13)