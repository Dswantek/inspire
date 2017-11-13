function ClockService (){
    var apiUrl = 'http://worldclockapi.com/api/json/utc/now'

    var time = '';
    
    function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
    }


    this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('time', JSON.stringify(res))
	
				var time = {
                    currentDateTime: res.currentDateTime,
                    utcOffset: res.utcOffset - 
				};
	
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			console.log(time)
			callWhenDone(time)
			// return weather
		})
	}

}