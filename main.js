(function () {
    $(document).ready(function () {
        // $.get('/WeatherForecast', function (data) {
            $.get('https://travelcompany.azurewebsites.net/api/TravelBook/airport', function (data) {
            //https://travelcompany.azurewebsites.net/api/TravelBook/airport
            console.log(data);
        });
    });
})();