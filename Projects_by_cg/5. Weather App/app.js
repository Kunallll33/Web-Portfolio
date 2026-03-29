let userInput = document.getElementById("user-input");
let searchBtn = document.getElementById("search");
let result = document.getElementById("result")

async function getWeather() {
    let city = userInput.value;
    if (!city === null){
        result.innerText = "Enter a city name";
        return;
    }

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb93095985dc2ae300fb05948f3769cd&units=metric`);

        if (!response.ok) {
            result.innerText = "City not found";
            return;
        }
        
        let data = await response.json();
        // console.log(data.main.temp);
        
        let temp = data.main.temp;
        result.innerText = `Temp of ${city} is ${temp}°C`;

    } catch (error){
        result.innerText = "Something went wrong";
        console.log(error);
    }
} 


searchBtn.addEventListener("click", () => {
    getWeather();
})