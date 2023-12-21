const API_key = "fb63cf82980a458492485755232012"
const hours = document.getElementById('hours')
const current = document.getElementById('current')

async function fetchWeather() {
    const resultados = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=Barcelona&aqi=no`)
        .then (res => {
            if(!res.ok) {
                throw new Error ("En estos momentos no podemos acceder a la información del tiempo")
            } return res.json();
            })
        .then(data => {
            console.log(data)
            const condition = data.current.condition.text;
            const humidity_API = data.current.humidity;
            const wind_kph_API = data.current.wind_kph;
            const wind_dir_API = data.current.wind_dir;
            const temp_API = data.current.temp_c;   
            const hourly_API = data.forecast.forecastday[0].hour;
            
            hourly_API.forEach(data => {
                let time_API = data.time.split(' ')
                hours.innerHTML += `
                <div id="hourly-card">
                <p>${time_API[1]} h.</p>
                <img src="${data.condition.icon}"/>
                <p>${data.temp_c} ºC</p>
                </div>
                `;
            });

            current.innerHTML = `
            <div id="currentIcon">
                <h3>Barcelona</h3>
                <img id ="currentIcon" src="${data.current.condition.icon}"/>
            </div>
            <div id="currentCond">
                <p>${condition}</p>
                <p>${temp_API}ºC</p>
                <p>Humidity: ${humidity_API}%</p>
                <p>Wind: ${wind_kph_API} km/h, ${wind_dir_API}</p>
            </div>
            `
        })
        .catch((error) => { error.message;
            })
        }

fetchWeather()

