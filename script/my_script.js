// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km(0.233 € al km)
// va applicato uno sconto del 19.4 % per i minorenni
// va applicato uno sconto del 37.7 % per gli over 65.


// Add const age and kilometers
let kilometers;
let age;

// Add discount variable 
let discountedTicket;

// Add button
let subimitButton = document.getElementById("my_subimit-button")

// Add button click behavior 
subimitButton.addEventListener('click', function () {
    kilometers = document.getElementById("kilometers");
    console.log(kilometers);

    kilometers = parseInt(kilometers.value);
    console.log("questi sono i chilometri che percorri:" + kilometers);

    age = document.getElementById("age");
    console.log(age);

    age = parseInt(age.value);
    console.log("Questa è la tua età: " + age);

    // Calculate train ticket price 
    const ticketPrice = kilometers * 0.233;
    console.log("questo è il prezzo del tuo biglietto: " + ticketPrice);

    // Calculate discount
    if (age < 18) {
        discountedTicket = (ticketPrice - (ticketPrice * 0.194)).toFixed(2);;
    } else if (age > 65) {
        discountedTicket = (ticketPrice - (ticketPrice * 0.377)).toFixed(2);
    }

    console.log("questo è il prezzo del tuo biglietto scontato: " + discountedTicket);
}
)

