const get_random_int = (max) => {
    return Math.floor(Math.random() * max);
  }

const select_icons = () => {
    var weather_icons = document.getElementsByClassName("weather_icon");
    var temperature_icons = document.getElementsByClassName("temperature_icon");

    weather_icons[get_random_int(weather_icons.length)].classList.add("selected");
    temperature_icons[get_random_int(temperature_icons.length)].classList.add("selected");
}

select_icons();