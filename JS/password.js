const passItems = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
const newPass = document.getElementById('newPass');
const input = document.getElementById('passInput');
const genBtn = document.getElementById('generatePass');


genBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);
    let addPass = "";
    
    for(let i=0; i <= inputValue; i++) {
        let randomNumb = Math.floor(Math.random()* passItems.length);
        addPass += passItems.substring(randomNumb, randomNumb +1);
        newPass.innerHTML = `
        <h3>Tu contraseña: </h3><br>
        <p id="fullpassword">${addPass}</p>
        `
    }
  });
 