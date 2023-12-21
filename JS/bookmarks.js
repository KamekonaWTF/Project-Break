//funcion que guarda los datos en el localstorage

let card = document.getElementById('fav-card')
const saveBtn = document.getElementById('saveBtn')
let url = document.getElementById('url');
let webname = document.getElementById('Nombre');

saveBtn.addEventListener('click', function storeInfo(){
    localStorage.setItem(webname.value, url.value);
        if (!url.value.includes("http" || "https")) {
            card.innerHTML += `<p><a href= "https://${url.value}" class="favcard">${webname.value}</a></p>`
        } else {
            card.innerHTML += `<p><a href=${url.value} class="favcard">${webname.value}</a></p>`
    }
})

//función que imprime el localStorage en pantalla

function getInfo(){
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    console.log(`${key}: ${localStorage.getItem(key)}`)
    if (!url.value.includes("http"||"https")) {
        card.innerHTML  += `<p class='favcard'><a href=https://${localStorage.getItem(key)}>${key}</a></p>` 
    } else {
        card.innerHTML  += `<p class='favcard'><a href=${localStorage.getItem(key)}>${key}</a></p>` 
    }
    
}}

getInfo()

//función que borra cada tarjeta mediante un botón



