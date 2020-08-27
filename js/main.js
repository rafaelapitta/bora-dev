let dias =  document.querySelector('.dias')
let horas = document.querySelector('.horas')
let minutos = document.querySelector('.minutos')
let segundos = document.querySelector('.segundos')


setInterval(function () {
    let dataHoje = new Date()
    let dataEvento = new Date('Aug 27. 2020 20:00:00')
    let diferencaData = dataEvento - dataHoje

    let restDias = Math.floor(diferencaData / (1000 * 60 * 60 * 24))
    let restHoras = Math.floor(diferencaData / (1000 * 60 * 60) % 24)
    let restMinutes = Math.floor((diferencaData / (1000 * 60)) % 60)
    let restSeconds = Math.floor((diferencaData % (1000 * 60)) / 1000)

    dias.innerHTML =  restDias + ":" 
    horas.innerHTML = restHoras + ":"
    minutos.innerHTML = restMinutes + ":"
    segundos.innerHTML = restSeconds 
}, 1000)


function popupSaida(event) {
    // Show the popup
    document.getElementById("popup").style.display = "block";
}

document.addEventListener("mouseleave", popupSaida);





