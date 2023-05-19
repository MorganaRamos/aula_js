
divC.style.display = 'none'

// FUNÇÃO PARA ESCOLHER A TEMPERATURA
const hideInputs = () => {
    let selected = selectTemp.value
    console.log(selected)
  
    if(selected === 'c'){
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if(selected == 'f'){
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}
// metodo preventdefault para evitar recarregar a página quando trocar o select
const toC = () =>{
    event.preventDefault()
    console.log('para celsius')
    let tempFahrenheit = fahrenheit.value
    let tempC = (tempFahrenheit - 32) / 1.8
    console.log(resultado);
    resultado.innerHtml = tempC
}

const toF = () =>{
    event.preventDefault()
    console.log('para Fahrenheit')
    let tempCelsius = celsius.value
    let tempF = (tempCelsius * 1.8) + 32
    console.log(resultado)
    resultado.innerHtml = tempF
}

