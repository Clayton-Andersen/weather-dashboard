//event listener button click to recieve input value

$(document).ready(function() {
    $("#search-btn").on("click", function () {
        var city = $("#city-input").val();
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
        fetch(apiUrl).then(function(res){
            return res.json()
        }).then(function(res){
            var lon = res.coord.lon;
            var lat = res.coord.lat;
            var url = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8"
            fetch(url).then(function(res){
                return res.json()
            }).then(function(data){
                console.log(data)
                //render to html
            })
        })
    });
    
});