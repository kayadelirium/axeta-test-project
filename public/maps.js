var myMap;
var CityCoordinates;

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [45.519441, -122.671411],
        zoom: 9,
    });
}

function setCity(cityName) {
    var myGeocoder = ymaps.geocode(cityName);

    myGeocoder.then(
        function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            CityCoordinates = firstGeoObject.geometry.getCoordinates();
            myMap.setCenter(CityCoordinates, 9);
            return CityCoordinates;
        },

        function (err) {
            alert("Ошибка соединения");
        }
    );
}

var searchCity = setCity.bind(this);
