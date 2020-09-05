const path = require('path');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Easy Weather",
        author: "Oleg Vinokurov"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        author: "Oleg Vinokurov"
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        message: "",
        author: "Oleg Vinokurov"
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "Help",
        errorMessage: "This help article could not be found",
        author: "Oleg Vinokurov"
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({error: "No address provided"});
    }

    geocode(req.query.address, (error, {longtitude, latitude, location} = {})=>{
        if(error) {
            return res.send({error});
        } 
        forecast(longtitude, latitude, location, (error, {temp, feelsLike, weatherDescriptions, location} = {}) => {
            if(error) {
                return res.send({error});
            }
            res.send({
                temperature: temp,
                feelsLike,
                weatherDescriptions,
                location
            })
        })
    });

})

app.get('*', (req, res) => {
    res.render('404', {
        title: "",
        errorMessage: "404 page not found",
        author: "Oleg Vinokurov"
    })
})

app.listen(port, ()=> {
    console.log("Server is up on port " + port);
})