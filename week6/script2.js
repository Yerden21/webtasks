let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
let countriesDoc = document.querySelector("#countries");
let citiesDoc = document.querySelector("#cities");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.text = countries[i];
    countriesDoc.add(option);
}

let whichCountry;
countriesDoc.addEventListener("change", function(e) {
    whichCountry = e.currentTarget.value;
    let options = citiesDoc.querySelectorAll("option");
    for (let i = 0; i < options.length; i++) {
        options[i].remove();
    }
    for (let i = 0; i < cities_by_country[whichCountry].length; i++) {
        let option = document.createElement("option");
        option.text = cities_by_country[whichCountry][i];
        citiesDoc.add(option);
    }
}) 