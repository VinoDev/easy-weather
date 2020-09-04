console.log("Client side js is loaded!");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const upperMessage = document.querySelector('.upper-message');
const lowerMessage = document.querySelector('.lower-message');

weatherForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const location = search.value;

    upperMessage.textContent = "Checking the weather..."
    lowerMessage.textContent = "";

    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data) => {
            if(data.error) {
                upperMessage.textContent = data.error;
            } else {
                const lowerCaseWeatherDesc = data.weatherDescriptions[0].toLowerCase();
                upperMessage.textContent = data.location;
                lowerMessage.textContent = 
                    `The weather is ${lowerCaseWeatherDesc}, 
                    the temperature is ${data.temperature} and if feels like ${data.feelsLike}.`;
            }
        });
    })

    search.value = "";
})