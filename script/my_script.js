// Add const age and kilometers
let kilometers;
let age;

// Add discount variable 
let discountedTicket;

// Add button
let submitButton = document.getElementById("my_submit-button")

// Add button click behavior 
submitButton.addEventListener('click', function () {
    // Add value to kilometers
    kilometers = document.getElementById("kilometers");

    kilometers = parseInt(kilometers.value);
    console.log("questi sono i chilometri che percorri: " + kilometers);

    // Add value to age
    age = document.getElementById("age");

    age = parseInt(age.value);
    console.log("Questa è la tua età: " + age);

    // Add data control
    if (isNaN(age) || isNaN(kilometers)) {
        console.log("C'è un errore nella compilazione")
        throw new Error("Datas not written in numbers!");
    }

    // Add age resctions
    if (age < 0 || age > 130) {
        console.log("C'è un errore nella compilazione dell'età")
        throw new Error("Wrong Age!");
    }

    // Calculate train ticket price 
    let ticketPrice = kilometers * 0.233;
    console.log("questo è il prezzo del tuo biglietto: " + ticketPrice);
    document.getElementById("price-message").innerHTML = ticketPrice;

    // Calculate discount
    if (age < 18) {
        ticketPrice = (ticketPrice - (ticketPrice * 0.194)).toFixed(2);;
    } else if (age > 65) {
        ticketPrice = (ticketPrice - (ticketPrice * 0.377)).toFixed(2);
    }

    console.log("questo è il prezzo del tuo biglietto scontato: " + ticketPrice);

    document.getElementById("kilometers-message").innerHTML = kilometers;
    document.getElementById("age-message").innerHTML = age;
    document.getElementById("discount-message").innerHTML = ticketPrice;
}
)

