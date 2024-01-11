var lat = 0;
var long = 0;
const API_KEY = process.env.API_KEY;

var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

console.info(API_KEY)