// script.js
var countries = {
    mexico: ["Hidalgo", "Querétaro"],
    usa: ["California", "New York"]
};

var states = {};
var cities = {};
var localities = {};

function updateStates() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");

    stateSelect.innerHTML = "<option value=''>Selecciona un estado</option>";
    cities = {};
    localities = {};

    var selectedCountry = countrySelect.value;
    if (selectedCountry) {
        states = countries[selectedCountry];
        for (var i = 0; i < states.length; i++) {
            var option = document.createElement("option");
            option.text = states[i];
            option.value = states[i];
            stateSelect.add(option);
        }
    }
}

function updateCities() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");

    citySelect.innerHTML = "<option value=''>Selecciona un municipio</option>";
    localities = {};

    var selectedState = stateSelect.value;
    if (selectedState) {
        cities[selectedState] = ["Municipio1", "Municipio2", "Municipio3"];
        for (var i = 0; i < cities[selectedState].length; i++) {
            var option = document.createElement("option");
            option.text = cities[selectedState][i];
            option.value = cities[selectedState][i];
            citySelect.add(option);
        }
    }
}

function updateLocalities() {
    var citySelect = document.getElementById("city");
    var localitySelect = document.getElementById("locality");

    localitySelect.innerHTML = "<option value=''>Selecciona una localidad</option>";

    var selectedCity = citySelect.value;
    if (selectedCity) {
        localities[selectedCity] = ["Localidad1", "Localidad2", "Localidad3"];
        for (var i = 0; i < localities[selectedCity].length; i++) {
            var option = document.createElement("option");
            option.text = localities[selectedCity][i];
            option.value = localities[selectedCity][i];
            localitySelect.add(option);
        }
    }
}

function showSelection() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var localitySelect = document.getElementById("locality");

    var selectedCountry = countrySelect.value;
    var selectedState = stateSelect.value;
    var selectedCity = citySelect.value;
    var selectedLocality = localitySelect.value;

    var selectionMessage = "Selección actual:\n";
    selectionMessage += "País: " + (selectedCountry || "No seleccionado") + "\n";
    selectionMessage += "Estado: " + (selectedState || "No seleccionado") + "\n";
    selectionMessage += "Municipio: " + (selectedCity || "No seleccionado") + "\n";
    selectionMessage += "Localidad: " + (selectedLocality || "No seleccionado");

    alert(selectionMessage);
}
