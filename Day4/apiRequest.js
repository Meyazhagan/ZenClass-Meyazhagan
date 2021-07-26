var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(xhr.response);
  displayFlag(data);
  displayCountry(data);
};
xhr.onerror = function () {
  console.log("Error", xhr.statusText);
};
xhr.send();

var displayFlag = function (data) {
  console.log("displaying flag");
  for (let item of data) {
    appendImg(item.flag);
    console.log(item.name, item.flag);
  }
};

var displayCountry = function (data) {
  for (let country of data) {
    console.log(
      country.name,
      country.region,
      country.subregion,
      country.population
    );
  }
};

const div = document.getElementById("flag");

var appendImg = function (URL) {
  var img = document.createElement("img");
  img.src = URL;
  img.width = 100;
  img.height = 100;
  div.appendChild(img);
};
