### Easy Weather
Simple site that provides weather forcast, 
created using [Node.js](https://nodejs.org/en/) and [Handlebars](https://handlebarsjs.com/)

[Take a look](https://vinodev-easy-weather.herokuapp.com/)

## Installation
Install dependencies with [npm](https://www.npmjs.com/)

```bash
npm install
```

## API's
This project uses [weatherstack](https://weatherstack.com/) and [mapbox](https://www.mapbox.com/) API's

## Local env

Set up your local environment by simply creating 'config.js' with your API keys.

```js
const keys = {
    weatherStack:"****",
    mapbox:"****"
}

module.exports = keys;
```

Run locally on your machine

```bash
npm run dev
```