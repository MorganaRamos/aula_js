const soma = (n1, n2) => {
let resultado = n1 + n2
console.log(resultado)
}

//arrow function em uma linha
const soma2 = (n1, n2) => n1 + n2
console.log(soma2(50, 40))

//media sem reutilizar função
const media = (n1,n2) => (n1 + n2)/2
console.log(media(50, 40))

//media reutilizando função
const media2 = (n1, n2) => soma2(n1, n2) /2
console.log('media', media2(30,20))