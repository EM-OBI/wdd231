const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=ac0ae799a1d779dd4c23068666bc18f1'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.main.temp);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].description);
            displayData(data);
        } else {
            throw Error('Error:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

apiFetch();

function displayData(data) {
    currentTemp.textContent = `${data.main.temp}°C`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/10d@2x.png`);
    weatherIcon.setAttribute("alt", `${data.weather[0].description} icon`);
    figCaption.textContent = data.weather[0].description;
}