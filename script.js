//event listener button click to recieve input value
// var searchFormEl = document.querySelector("#search-form");
// var cityInputEl = document.querySelector("#city-input");


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

// attempt to render to html
// var renderCity = function() {
//     var searchedCity = $("#searched-city");
//     searchedCityt.html("")
//     for (var i = 0; i < locationArr.length; i++) {
//         var location = $("<button></button>")
//             .attr("id", "searched-city-" + i)
//             .addClass("list-group-item list-group-item-action prev-loc")
//             .text(locationArr[i]);
//         searchedCity.append(location);
//     }
// }

// searchFormEl.addEventListener("submit",CityInputFormClick);