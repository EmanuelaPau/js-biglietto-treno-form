// Add const age and kilometers
let kilometers;
let age;

// Add discount variable 
let discountedTicket;

// Add discount badge
let discountBadge = document.getElementById("discount-badge");

// Add price text
let myPriceTxt = document.getElementById("price-message");
// Add discount text
let myDiscountTxt = document.getElementById("discount-message");

// Add button
let submitButton = document.getElementById("my_submit-button");

let warningTxt = document.getElementById("my_warning")

// Add button click behavior 
submitButton.addEventListener('click', function () {
    // Reset error message 
    warningTxt.classList.add("d-none");

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
        console.log("C'è un errore nella compilazione");
        // Warning message 
        warningTxt.classList.remove("d-none");
        document.getElementById("my_warning").innerHTML = "C'è un errore nella compilazione, prego riscrivere in numeri";
        throw new Error("Datas not written in numbers!");
    }

    // Add age resctions
    if (age < 0 || age > 130) {
        console.log("C'è un errore nella compilazione dell'età")
        // Warning message
        warningTxt.classList.remove("d-none");
        document.getElementById("my_warning").innerHTML = "C'è un errore nella compilazione dell'età, prego riscrivere";
        throw new Error("Datas not written in numbers!");
    }

    // Calculate train ticket price 
    let ticketPrice = kilometers * 0.233;
    console.log("questo è il prezzo del tuo biglietto: " + ticketPrice);
    document.getElementById("price-message").innerHTML = ticketPrice.toFixed(2);

    // Calculate discount
    if (age < 18) {
        ticketPrice = (ticketPrice - (ticketPrice * 0.194)).toFixed(2);
        document.getElementById("discount-percentage").innerHTML = " 19,4%";

        discountBadge.classList.remove("bg-primary");
        discountBadge.classList.remove("my_bg-color-green");
        discountBadge.classList.add("my_bg-color-orange");

        myPriceTxt.classList.add("text-decoration-line-through");
        myPriceTxt.classList.add("my_color-grey");

        myDiscountTxt.classList.remove("d-none");

    } else if (age > 65) {
        ticketPrice = (ticketPrice - (ticketPrice * 0.377)).toFixed(2);
        document.getElementById("discount-percentage").innerHTML = " 37,7%";

        discountBadge.classList.remove("bg-primary");
        discountBadge.classList.remove("my_bg-color-orange");
        discountBadge.classList.add("my_bg-color-green");

        myPriceTxt.classList.add("text-decoration-line-through");
        myPriceTxt.classList.add("my_color-grey");

        myDiscountTxt.classList.remove("d-none");
    }

    else {
        document.getElementById("discount-percentage").innerHTML = " None";

        discountBadge.classList.remove("my_bg-color-green");
        discountBadge.classList.remove("my_bg-color-orange");
        discountBadge.classList.add("bg-primary");

        myPriceTxt.classList.remove("text-decoration-line-through");
        myPriceTxt.classList.remove("my_color-grey");

        myDiscountTxt.classList.add("d-none")
    }

    // document.getElementById("kilometers-message").innerHTML = kilometers;
    document.getElementById("my_kilometers").innerHTML = kilometers;
    document.getElementById("age-message").innerHTML = age;
    document.getElementById("discount-message").innerHTML = ticketPrice;
}
)

