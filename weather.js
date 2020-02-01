function customCity() {
  let city = document.getElementById("searchBar").value;
  weatherCall(city);
}


function weatherCall(apiCity) {

  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + apiCity + "&APPID=f7058b7c367d0916a2145c5dcfe6c598&units=imperial";

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {

      var newdate = GetDate(0);

      document.getElementById("lblCity").innerHTML = apiCity + " : " + response.weather[0].description;
      document.getElementById("lblDate").innerHTML = "Date: " + newdate;

      document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";

      document.getElementById("lblTemperature").innerHTML = "Temperature: " + Math.round(response.main["temp"]) + " F";
      document.getElementById("lblFeelsLike").innerHTML = "Feels Like: " + Math.round(response.main["feels_like"]) + " F";

      document.getElementById("lblHumidity").innerHTML = "Humidity: " + response.main["humidity"] + " percent";
      document.getElementById("lblWind").innerHTML = "Wind Speed: " + response.wind["speed"] + " M.P.H.";

      
  });


Get5Day(apiCity);
  
}

function Get5Day(apiCity)
{
  // 5 Day Forecast
  var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + apiCity + "&APPID=f7058b7c367d0916a2145c5dcfe6c598&units=imperial";


  $.ajax({
      url: queryURL2,
      method: "GET"
  }).then(function (response) {

      // Day 1
      document.getElementById("lblDate1").innerHTML = GetDate(1);
      document.getElementById("lblTemperature1").innerHTML = "Temperature: " + Math.round(response.list[1].main["temp"]) + " F";
      document.getElementById("icon1").src = "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png";
      document.getElementById("lblMain1").innerHTML = "-" + response.list[1].weather[0].description;

      // Day 2
      document.getElementById("lblDate2").innerHTML = GetDate(2);
      document.getElementById("lblTemperature2").innerHTML = "Temperature: " + Math.round(response.list[2].main["temp"]) + " F";
      document.getElementById("icon2").src = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png";
      document.getElementById("lblMain2").innerHTML = "-" + response.list[2].weather[0].description;
      
      // Day 3
      document.getElementById("lblDate3").innerHTML = GetDate(3);
      document.getElementById("lblTemperature3").innerHTML = "Temperature: " + Math.round(response.list[3].main["temp"]) + " F";
      document.getElementById("icon3").src = "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png";
      document.getElementById("lblMain3").innerHTML = "-" + response.list[3].weather[0].description;

      // Day 4
      document.getElementById("lblDate4").innerHTML = GetDate(4);
      document.getElementById("lblTemperature4").innerHTML = "Temperature: " + Math.round(response.list[4].main["temp"]) + " F";
      document.getElementById("icon4").src = "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png";
      document.getElementById("lblMain4").innerHTML = "-" + response.list[4].weather[0].description;

      // Day 5
      document.getElementById("lblDate5").innerHTML = GetDate(5);
      document.getElementById("lblTemperature5").innerHTML = "Temperature: " + Math.round(response.list[5].main["temp"]) + " F";
      document.getElementById("icon5").src = "http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png";
      document.getElementById("lblMain5").innerHTML = "-" + response.list[5].weather[0].description;

    });

}


function GetDate(daysInFuture) {
  var today = new Date();
    var newdate = new Date();
    newdate.setDate(today.getDate()+ daysInFuture);

  var month = newdate.getMonth() + 1; //months from 1-12
  var day = newdate.getDate();
  var year = newdate.getUTCFullYear();

 return month + "/" + day + "/" + year;
   
}
 

