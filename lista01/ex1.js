const readline = require("readline-sync");

let celsius = Number(readline.question("Digite a temperatura em Celsius: "));

let fahrenheit = celsius * 1.8 + 32;

console.log(`${celsius}°C equivalem a ${fahrenheit}°F`);