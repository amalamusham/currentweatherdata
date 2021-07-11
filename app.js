const express = require('express');
const request = require("request");
const app = express();
const [port, host] = [5000, '127.0.0.1'];
app.listen(port, host, () => {
    console.info(`The server is up and running on http://${host}:${port}`);
});
const https = require('https');
const apikey = 'bae382beaeb04dfe39a0762545a5581c';
const location = "Hyderabad";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apikey}`;
app.get('/',function(req,res) {
    https.get(api, function(response){
        response.on("data",function(data) {
              const weather = JSON.parse(data);
              const temperature = weather.main.temp;
              res.write(`Temperature is ${temperature}`);
              res.send();   
        });
    console.log(response.statusCode);
});
});

