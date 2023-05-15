// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km(0.233 € al km)
// va applicato uno sconto del 19.4 % per i minorenni
// va applicato uno sconto del 37.7 % per gli over 65.


// Add const age and kilometers
// const kilometers = parseInt(document.getElementById("kilometers"));
// console.log(kilometers);
const age = parseInt(document.getElementById("age"));
console.log(age);

// Test WILL BE DELETED 
kilometers = 1000;
// age = 16;
// age = 23; 
// age = 91;
// Calculate train ticket price 
const ticketPrice = kilometers * 0.233;
console.log(ticketPrice);

// Calculate discount
// const discountedTicket;

if (age < 18) {
    ticketPrice = (ticketPrice - (ticketPrice * 0.194));
    console.log(discountedTicket);
} else if (age > 65) {
    ticketPrice = (ticketPrice - (ticketPrice * 0.377));
}

console.log(ticketPrice);