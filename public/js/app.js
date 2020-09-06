console.log("Client side js is loaded!");

const mainContent = document.querySelector('.main-content');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message = document.querySelector('.message');

weatherForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const location = search.value;
    let ul = document.querySelector('ul');
    if(ul)
        ul.remove();

    message.textContent = "Checking the weather..."

    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data) => {
            if(data.error) {
                message.textContent = data.error;
            } else {
                const modifiedDataArr = [
                    data.weatherDescriptions[0], 
                    `Temperature ${data.temperature}°C`, 
                    `Feels like ${data.feelsLike}°C`,
                    `Humidity is ${data.humidity}%`
                ];
                message.textContent = data.location;
                mainContent.appendChild(makeUL(modifiedDataArr));
            }
        });
    })

    search.value = "";
})