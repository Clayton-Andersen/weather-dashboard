//event listener button click to recieve input value
// var searchFormEl = document.querySelector("#search-form");
// var cityInputEl = document.querySelector("#city-input");


$(document).ready(function() {
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    
    $("#search-btn").on("click", function () {
        var city = $("#city-input").val().trim();
        $("#city-input").val("");
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
        fetch(apiUrl).then(function(response){
            return response.json()
        }).then(function(response ){
            console.log(response.name)
            
            var saveCity = response.name
            cities.push(saveCity)
            localStorage.setItem("cities", JSON.stringify(cities));
            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var url = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
            fetch(url).then(function(response){
                
                return response.json()
            }).then(function(data){
                //console.log(data)
                
                //render to html
                $("#temp").text(data.current.temp);
                $("#humidity").text(data.current.humidity);
                $("#wind").text(data.current.wind_speed);
            })

        
        })
  

    });
    
});

//attempt to render city buttons to html
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

// Work with this loop !!!!!!!!!!!!!!!!!
// // // var addLocation = function() {
// //     var searchList = $("#search-history");
// //     searchList.html("")
// //     for (var i = 0; i < cities.length; i++) {
// //         var location = $("<button></button>")
// //         .attr("id", "searched-", + i)
// //         .addClass(list-item)
// //         .text(cities[i]);
// //         searchList.append(location);
// //     }
// // };

      // var btn = document.createElement("button");
        // btn.textContent = (city);
        // var  btnList = document.getElementById("#search-history");
        // btnList.append(btn);

// searchFormEl.addEventListener("submit",CityInputFormClick);