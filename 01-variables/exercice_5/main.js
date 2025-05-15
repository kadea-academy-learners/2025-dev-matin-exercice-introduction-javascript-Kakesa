// ecrire le code de conversion ici
const fs = require("fs");
const path = require("path");
let celsius;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit;
  fahrenheit = (celsius * 9) / 5 + 32;

  // Affichage du résultat
  console.log(fahrenheit);
  
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
}

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
