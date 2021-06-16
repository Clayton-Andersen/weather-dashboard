//event listener button click to recieve input value
// var searchFormEl = document.querySelector("#search-form");
// var cityInputEl = document.querySelector("#city-input");


$(document).ready(function() {
    $("#search-btn").on("click", function () {
        var city = $("#city-input").val().trim();
        $("#city-input").val("");
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
        fetch(apiUrl).then(function(response){
            return response.json()
        }).then(function(response ){
            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var url = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
            fetch(url).then(function(response){
                return response.json()
            }).then(function(data){
                console.log(data)
                //render to html
            })
        })
    });
    
});

//attempt to render to html
// var cityArr = function(city) {
//     if (searchHistory.includes(city)) {
//         addLocation();
//     } else if (searchHistory.length < 5) {
//         searchHistory.unshift(city);
//         addLocation();
//     } else if (searchHistory.length === 5) {
//         searchHistory.pop();
//         searchHistory.unshift(city);

//     }
// };

// // var addLocation = function() {
// //     var searchList = $("#search-history");
// //     searchList.html("")
// //     for (var i = 0; i < searchHistory.length; i++) {
// //         var location = $("<button></button>")
// //         .attr("id", "searched-", + i)
// //         .addClass(list-item)
// //         .text(searchHistory[i]);
// //         searchList.append(location);
// //     }
// // };


// searchFormEl.addEventListener("submit",CityInputFormClick);