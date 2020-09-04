const request = require('postman-request');

const forecast = (longtitude, latitude, location, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=aba5e97c03a6ce6ef3951eb357d42e2c&query=" + longtitude + "," + latitude;

    request({url, json: true}, (error, {body})=>{
        if(error) {
            callback("Error connecting to forecast servers");
        } else if(body.error) {
            callback("Could not find the location");
        } else {
            const temp = body.current.temperature;
            const feelsLike = body.current.feelslike;
            const weatherDescriptions = body.current.weather_descriptions;
            callback(undefined, {
                temp,
                feelsLike,
                weatherDescriptions,
                location
            });
        }
    })
}

module.exports = forecast;