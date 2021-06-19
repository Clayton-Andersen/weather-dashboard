//event listener button click to recieve input value
// var searchFormEl = document.querySelector("#search-form");
// var cityInputEl = document.querySelector("#city-input");


$(document).ready(function () {
    var cities = JSON.parse(localStorage.getItem("cities")) || [];

    $("#search-btn").on("click", function () {
        var city = $("#city-input").val().trim();
        $("#city-input").val("");
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
        fetch(apiUrl).then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response.name)

            var saveCity = response.name
            cities.push(saveCity)
            citiesArr(cities)
            localStorage.setItem("cities", JSON.stringify(cities));
            var lon = response.coord.lon;
            var lat = response.coord.lat;
            var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=d81f33c887aad9cbe02d418796972cb8";
            fetch(url).then(function (response) {

                return response.json()
            }).then(function (data) {
                //console.log(data)

                //render to html
                $("#temp").text(data.current.temp);
                $("#humidity").text(data.current.humidity);
                $("#wind").text(data.current.wind_speed);
            })
        })

        var citiesArr = function (cities) {
            var searchedCity = $("#search-history ul");
            searchedCity.html("")
            for (var i = 0; i < cities.length; i++) {
                var location = $("<li>")
                    .attr("id", "searched-", + i)
                    .addClass("list-item")
                    .text(cities[i]);
                searchedCity.append(location);
            }
        };
    });

});

// buttons: set event listener for list items(<li>),
// generatea api call when clisk on li

// google set method or set prototype to eliminate duplicates

// searchFormEl.addEventListener("submit",CityInputFormClick);