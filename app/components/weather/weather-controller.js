function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(drawWeather)

		//What can you do with this weather object?



	var weatherElem = document.getElementById('weather')



	function drawWeather(weather){
		var	template = `
			<div class="col-xs-2">
				<div class="row">
					<div class="col-xs-12">
						<p>${weather.temp}°F</p>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<p2>${weather.low}°F</p2>
					</div>
					<div class="col-xs-6">
						<p2>${weather.high}°F</p2>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<p> Picture of Weather (clouds, sunny, rain, etc)</p>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<p>${weather.city}</p>
					</div>
				</div>
			</div>
			`
		weatherElem.innerHTML = template
	}





}
