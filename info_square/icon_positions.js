const set_positions = () => {
    var weather_icons = document.getElementsByClassName("weather_icon");
    var temperature_icons = document.getElementsByClassName("temperature_icon");
    var left_margin = 30;
    var top_margin = 0;
    for (let i=0; i<weather_icons.length; i++) {
        left_margin += 60;
        if (i % 3 == 0) {
            left_margin = 30;
            if (i != 0) {
                top_margin += 60;
            }
        }
        if (i == 9) {
            left_margin += 60;
        }
        
        weather_icons[i].style.marginLeft = left_margin + "px";
        weather_icons[i].style.marginTop = top_margin + "px";
    }

    top_margin += 45;
    left_margin = -15;
    for (let i=0; i<temperature_icons.length; i++){
        left_margin += 45;
        temperature_icons[i].style.marginLeft = left_margin + "px";
        temperature_icons[i].style.marginTop = top_margin + "px";
    }
}

set_positions();