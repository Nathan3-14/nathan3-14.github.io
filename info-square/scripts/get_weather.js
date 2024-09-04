const set_data = () => {
    console.info(location_data);
    lat = location_data.lat;
    lon = location_data.lon;
    var url_current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url_current)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
});
}

const API_KEY = "d1b3bd6fbfb8266c69e52edb46145f15";

var city_name = "Bristol";
var country_code = "GB";
var url_geocode = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${country_code}&limit=5&appid=${API_KEY}`;

var lat = 0;
var lon = 0;

var url_current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
var url_4_day = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

var location_data;
fetch(url_geocode)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);
        // location_data = JSON.parse(data);
        location_data = data;
        set_data();
    })
    .catch(error => {
        console.error('Error:', error);
});