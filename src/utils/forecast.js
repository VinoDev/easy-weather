const request = require('postman-request');
const key = require('../../config').weatherStack;

const forecast = (longtitude, latitude, location, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${longtitude},${latitude}`;

    request({url, json: true}, (error, {body})=>{
        if(error) {
            callback("Error connecting to forecast servers");
        } else if(body.error) {
            callback("Could not find the location");
        } else {
            const temp = body.current.temperature;
            const feelsLike = body.current.feelslike;
            const weatherDescriptions = body.current.weather_descriptions;
            const humidity = body.current.humidity;
            callback(undefined, {
                temp,
                feelsLike,
                weatherDescriptions,
                humidity,
                location
            });
        }
    })
}

module.exports = forecast;