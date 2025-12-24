const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');

btn.addEventListener('click', () => {
    let city = input.value.trim();
    if (city === "") {
        alert("⚠️ Please enter a city name!");
        return;
    }
    getweather(city);
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let city = input.value.trim();
        if (city === "") {
            alert("⚠️ Please enter a city name!");
            return;
        }
        getweather(city);
    }
});

function getweather(city) {
    console.log(city);
    fetch(``)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const iconcode = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconcode}.png" alt="weather icon">`;

        const weathercity = data.name;
        const weathercountry = data.sys.country;
        weather.innerHTML = `${weathercity}, ${weathercountry}`;

        const temp = data.main.temp;
        temperature.innerHTML = `${temp}&#176;C`;

        const desc = data.weather[0].description;
        description.innerHTML = desc;
    })

}
