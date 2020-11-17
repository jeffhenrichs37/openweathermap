let html = document.getElementsByTagName("HTML");
let body = document.getElementsByTagName("BODY");
let output = document.getElementById('output');

document.getElementById('enter').addEventListener('click', getZipcode);

function getZipcode() {
	var zipcode = document.getElementById('zipcode').value;

	let url = 'http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&units=imperial&appid=635d9b0c3316e8567568637146fb5fbe'

	fetch(url)
	.then((res => res.json()))
	.then(data => {
		console.log(data);

		// 	body, html {
		// 	background-image: url('images/clear_sky.jpg');
		// 	background-size: cover;
		// 	background-position: center;
		// 	background-repeat: no-repeat;
		// 	height: 100%;
		// 	color: #ff0;
		// }

		// #output {
		// 	color: #ff0;
		// }
		console.log(html[0]);

		html[0].style.backgroundSize = 'cover';
		html[0].style.backgroundPosition = 'center';
		html[0].style.backgroundRepeat = 'no-repeat';
		html[0].style.height = '100%';

		body[0].style.backgroundSize = 'cover';
		body[0].style.backgroundPosition = 'center';
		body[0].style.backgroundRepeat = 'no-repeat';
		body[0].style.height = '100%';

		if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
			html[0].style.backgroundImage = "url('images/clear_sky.jpg')";
			html[0].style.color = '#ff0';
			body[0].style.backgroundImage = "url('images/clear_sky.jpg')";
			body[0].style.color = '#ff0';
			output.style.color = '#ff0';
		} else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
			html[0].style.backgroundImage = "url('images/p_cloudy.jpg')";
			html[0].style.color = '#333';
			body[0].style.backgroundImage = "url('images/p_cloudy.jpg')";
			body[0].style.color = '#333';
			output.style.color = '#333';
		} else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n' ||
			data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
			html[0].style.backgroundImage = "url('images/cloudy.jpg')";
			html[0].style.color = '#333';
			body[0].style.backgroundImage = "url('images/cloudy.jpg')";
			body[0].style.color = '#333';
			output.style.color = '#333';
		} else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n' ||
			data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
			html[0].style.backgroundImage = "url('images/rain.jpg')";
			html[0].style.color = '#ff0';
			body[0].style.backgroundImage = "url('images/rain.jpg')";
			body[0].style.color = '#ff0';
			output.style.color = '#ff0';
		} else if (data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
			html[0].style.backgroundImage = "url('images/thunder.jpg')";
			html[0].style.color = '#f6f';
			body[0].style.backgroundImage = "url('images/thunder.jpg')";
			body[0].style.color = '#f6f';
			output.style.color = '#f6f';
		} else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
			html[0].style.backgroundImage = "url('images/snow.jpg')";
			html[0].style.color = '#000';
			body[0].style.backgroundImage = "url('images/snow.jpg')";
			body[0].style.color = '#000';
			output.style.color = '#000';
		} else {
			html[0].style.backgroundImage = "url('images/mist.jpg')";
			html[0].style.color = '#333';
			body[0].style.backgroundImage = "url('images/mist.jpg')";
			body[0].style.color = '#333';
			output.style.color = '#999';
		}
	})
	.catch((err) => console.log(err)); 
	
}

