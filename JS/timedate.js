//RELOJ

const reloj = document.getElementById('timeClock');
const fecha = document.getElementById('date');
const quote = document.getElementById('dailyQuote')

function updateTime () {
    const presente = new Date();
    const horas = presente.getHours();
    const minutos = presente.getMinutes();
    const segundos = presente.getSeconds();
    const clock = `
        <p>${horas.toString().padStart(2,'0')} : ${minutos.toString().padStart(2,'0')} : ${segundos.toString().padStart(2,'0')}
        </p>`
    reloj.innerHTML = clock;
    
}

updateTime();
setInterval(updateTime,1000);

//FECHA

function updateData () {
    const hoy = new Date();
    const diaSemana = hoy.getDay();
    const dayNames = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const dia = hoy.getDate();
    const mes = hoy.getMonth();
    const monthNames = ["Ene.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ago.","Sept.","Oct.","Nov.","Dic."];
    const año = hoy.getFullYear();

    const calendar = `
        <p>${dayNames[diaSemana]},<br> ${dia.toString()}  ${monthNames[mes].toString()}  ${año.toString()}
        </p>`
    fecha.innerHTML = calendar;
}

updateData();
setInterval(updateTime,1000);

//DAILY QUOTES

setInterval(function () {
    
    const presente = new Date();
    if(presente.getHours() >= 6 && presente.getHours() < 12) {
        quote.innerHTML = `<span>Looks like you forgot once again: you are going to do amazing fucking things today.</span>`
    } else if (presente.getHours() >= 12 && presente.getHours() < 18){
        quote.innerHTML = `<span>Good morning you gorgeous ray of fucking sunshine.</span>`
    } else if (presente.getHours() >= 18 && presente.getHours() < 24){
        quote.innerHTML = `<span>Fuck everyone else, straighten your crown and be the badass bitch you are.</span>`
    } else if (presente.getHours() >= 0 && presente.getHours() < 6){
        quote.innerHTML = `<span>You are not going to stop because you are fucking tired, you are going to stop because you are fucking done.</span>`
    }
}, 1000);



/*const quotesArr = [
    "Looks like you forgot once again: you are going to do amazing fucking things today.",
    "Good morning you gorgeous ray of fucking sunshine.",
    "Fuck everyone else, straighten your crown and be the badass bitch you are.",
    "You are not going to stop because you are fucking tired, you are going to stpo because you are fucking done."
]
*/