document.getElementById('enter').addEventListener('click', getWeather);

function getWeather() {

    document.getElementById("output").style.display = "block";

    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+state+',us&units=imperial&appid=635d9b0c3316e8567568637146fb5fbe'
    
    var date = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    var dotw = weekday[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        var output = '';

        output += `<table style="width: 100%">
            <tr>
                <td id="location" >
                    <span id="city_display">${city},</span> 
                    <span id="state-display"> ${state}</span>
                </td>
                <td id="range_temp">${Math.round(data.main.temp_max)} | ${Math.round(data.main.temp_min)} </td>
            </tr>
            <tr style="width: 100%" colspan="2">
                <td id="date" colspan="2">${dotw}, ${month} ${day} ${year}</td>
                <td></td>
            </tr>
            <tr>
                <td id="weather" colspan="2">${data.weather[0].main}</td>
                <td></td>
            </tr>
            <tr> 
                <td id="icon" style="width: 50%">`
                
                if (data.weather[0].icon == "01d") {
                    output += `<img src="01d.png"/>`;
                } else if (data.weather[0].icon = "01n") {
                    output += '<img src="01n.png"/>';
                } else if (data.weather[0].icon = "02d") {
                    output += '<img src="02d.png"/>'
                } else if (data.weather[0].icon = "02n") {
                    output += '<img src="02n.png"/>'
                } else if (data.weather[0].icon = "03d") {
                    output += '<img src="03d.png"/>'
                } else if (data.weather[0].icon = "03n") {
                    output += '<img src="03n.png"/>'
                } else if (data.weather[0].icon = "04d") {
                    output += '<img src="04d.png"/>'
                } else if (data.weather[0].icon = "04n") {
                    output += '<img src="04n.png"/>'
                } else if (data.weather[0].icon = "09d") {
                    output += '<img src="09d.png"/>'
                } else if (data.weather[0].icon = "09n") {
                    output += '<img src="09n.png"/>'
                } else if (data.weather[0].icon = "10d") {
                    output += '<img src="10d.png"/>'
                } else if (data.weather[0].icon = "10n") {
                    output += '<img src="10n.png"/>'
                } else if (data.weather[0].icon = "11d") {
                    output += '<img src="11d.png"/>'
                } else if (data.weather[0].icon = "11n") {			
                    output += '<img src="11n.png"/>'
                } else if (data.weather[0].icon = "13d") {
                    output += '<img src="13d.png"/>'
                } else if (data.weather[0].icon = "13n") {
                    output += '<img src="13n.png"/>'
                } else if (data.weather[0].icon = "50d") {
                    output += '<img src="50d.png"/>'
                } else if (data.weather[0].icon = "50n") {
                    output += '<img src="50n.png"/>'
                }
                
                
        output += `</td>
                <td id="temp">
                    <span id="curr_temp">${Math.round(data.main.temp)}</span>
                    <span id="units">
                        <span id="fahrenheit" style="font-weight: bold">F</span>
                        <span id="separator">|</span>
                        <span id="celsius" style="color: gray;cursor:pointer" onclick="getWeatherCelsius()">C</span>
                    </span>
                </td> 
            </tr>
            <tr>
                <td colspan="2">
                    <ul style="list-style: none">
                        <li>Description: ${data.weather[0].description}</li>
                        <li>Feels Like: ${Math.round(data.main.feels_like)}</li>
                        <li>Humdity: ${data.main.humidity}%</li>
                        <li>Wind: ${Math.round(data.wind.speed)} mph</li>
                    </ul>
                </td>
                <td></td>
            </tr>

        </table>`

        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
}

function getWeatherCelsius() {

    document.getElementById("output").style.display = "block";

    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+state+',us&units=metric&appid=635d9b0c3316e8567568637146fb5fbe'
    
    var date = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    var dotw = weekday[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        var output = '';

        output += `<table style="width: 100%">
            <tr>
                <td id="location" >
                    <span id="city_display">${city},</span> 
                    <span id="state-display"> ${state}</span>
                </td>
                <td id="range_temp">${Math.round(data.main.temp_max)} | ${Math.round(data.main.temp_min)} </td>
            </tr>
            <tr style="width: 100%" colspan="2">
                <td id="date" colspan="2">${dotw}, ${month} ${day} ${year}</td>
                <td></td>
            </tr>
            <tr>
                <td id="weather" colspan="2">${data.weather[0].main}</td>
                <td></td>
            </tr>
            <tr> 
                <td id="icon" style="width: 50%">`
                
                if (data.weather[0].icon == "01d") {
                    output += `<img src="01d.png"/>`;
                } else if (data.weather[0].icon = "01n") {
                    output += '<img src="01n.png"/>';
                } else if (data.weather[0].icon = "02d") {
                    output += '<img src="02d.png"/>'
                } else if (data.weather[0].icon = "02n") {
                    output += '<img src="02n.png"/>'
                } else if (data.weather[0].icon = "03d") {
                    output += '<img src="03d.png"/>'
                } else if (data.weather[0].icon = "03n") {
                    output += '<img src="03n.png"/>'
                } else if (data.weather[0].icon = "04d") {
                    output += '<img src="04d.png"/>'
                } else if (data.weather[0].icon = "04n") {
                    output += '<img src="04n.png"/>'
                } else if (data.weather[0].icon = "09d") {
                    output += '<img src="09d.png"/>'
                } else if (data.weather[0].icon = "09n") {
                    output += '<img src="09n.png"/>'
                } else if (data.weather[0].icon = "10d") {
                    output += '<img src="10d.png"/>'
                } else if (data.weather[0].icon = "10n") {
                    output += '<img src="10n.png"/>'
                } else if (data.weather[0].icon = "11d") {
                    output += '<img src="11d.png"/>'
                } else if (data.weather[0].icon = "11n") {			
                    output += '<img src="11n.png"/>'
                } else if (data.weather[0].icon = "13d") {
                    output += '<img src="13d.png"/>'
                } else if (data.weather[0].icon = "13n") {
                    output += '<img src="13n.png"/>'
                } else if (data.weather[0].icon = "50d") {
                    output += '<img src="50d.png"/>'
                } else if (data.weather[0].icon = "50n") {
                    output += '<img src="50n.png"/>'
                }
                
                
        output += `</td>
                <td id="temp">
                    <span id="curr_temp">${Math.round(data.main.temp)}</span>
                    <span id="units">
                        <span id="fahrenheit" style="color: gray;cursor:pointer;" onclick="getWeather()">F</span>
                        <span id="separator">|</span>
                        <span id="celsius" style="font-weight: bold">C</span>
                    </span>
                </td> 
            </tr>
            <tr>
                <td colspan="2">
                    <ul style="list-style: none">
                        <li>Description: ${data.weather[0].description}</li>
                        <li>Feels Like: ${Math.round(data.main.feels_like)}</li>
                        <li>Humdity: ${data.main.humidity}%</li>
                        <li>Wind: ${Math.round(data.wind.speed)} km/h</li>
                    </ul>
                </td>
                <td></td>
            </tr>

        </table>`

        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err))
}