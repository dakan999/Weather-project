const aipKey = "5681c2bfd7a3e1fff5f019bf2c3e71dc"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metirc&q="

const serchBox = document.querySelector(".serch input")
const serchBtn = document.querySelector(".serch button")
const wetherIcon = document.querySelector(".wether-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${aipKey}`)
    let data = await response.json()

    console.log(data);



    document.getElementById('сity').innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) / 10 + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clouds") {
        wetherIcon.src = "./images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        wetherIcon.src = "./images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        wetherIcon.src = "./images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        wetherIcon.src = "./images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        wetherIcon.src = "./images/mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        wetherIcon.src = "./images/snow.png"
    }

    document.querySelector(".wether").style.display = "block"

}

serchBtn.addEventListener("click", () => {
    checkWeather(serchBox.value);
})
