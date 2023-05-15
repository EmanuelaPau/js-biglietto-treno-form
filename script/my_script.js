// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km(0.233 € al km)
// va applicato uno sconto del 19.4 % per i minorenni
// va applicato uno sconto del 37.7 % per gli over 65.


// Add const age and kilometers
let kilometers = document.getElementById("kilometers");
console.log(kilometers);
let age = document.getElementById("age");
console.log(age);

let discountedTicket;
// Add button
let subimitButton = document.getElementById("my_subimit-button")
subimitButton.addEventListener('click', function () {
    alert("Hello! I am an alert box!!");
}
    //     kilometers = parseInt(kilometers.value);

    // age = parseInt(age.value);
)

// // Calculate train ticket price 
// const ticketPrice = kilometers * 0.233;
// console.log(ticketPrice);

// // Calculate discount

// if (age < 18) {
//     discountedTicket = (ticketPrice - (ticketPrice * 0.194));
// } else if (age > 65) {
//     discountedTicket = (ticketPrice - (ticketPrice * 0.377));
// }

console.log(discountedTicket);