let ip = document.getElementById("ip-address");
let location1 = document.getElementById("location");
let timezone = document.getElementById("timezone");
let isp = document.getElementById("isp");
let btnSearch = document.getElementById("search__btn");
let inputIp = document.getElementById("ip_address");
let url =
  "https://geo.ipify.org/api/v1?apiKey=at_i10DVkrS8a8yZXEc7QsZtRlDygg1Z&ipAddress=&domain=";
let inputValue = "";

async function fecthData() {
  const response = await fetch(url);
  const convJson = await response.json();

  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2FybG9zYnVsdCIsImEiOiJja3JtZzUzazcydmJjMnJtNDF1a3BsMTVlIn0.9GTQzZhg-PP6EE5gfDlmCQ";
  var map = new mapboxgl.Map({
    container: "map",
    center: [convJson.location.lng, convJson.location.lat],
    zoom: 15,
    style: "mapbox://styles/mapbox/streets-v11",
  });

  ip.textContent = convJson.ip;
  location1.textContent = `${convJson.location.region}, ${convJson.location.city}`;
  timezone.textContent = `UTC ${convJson.location.timezone}`;
  isp.textContent = convJson.isp;
}

fecthData();

btnSearch.addEventListener("click", function () {
  let inputValueArray = Array(inputIp.value);

  if (inputIp.value === inputValueArray) {
    url = `https://geo.ipify.org/api/v1?apiKey=at_i10DVkrS8a8yZXEc7QsZtRlDygg1Z&ipAddress=${inputValueArray}&domain=`;
  } else {
    url = `https://geo.ipify.org/api/v1?apiKey=at_i10DVkrS8a8yZXEc7QsZtRlDygg1Z&ipAddress=&domain=${inputValueArray}`;
  }

  fecthData();
});
