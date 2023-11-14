// Questo è il file che contiene tutto il codice JS della pagina web

// PASSO 1: Chiedere  all'utente quanti km deve percorrere e l'età
// PASSO 2: Calcolare il prezzo del viaggio in base alle informazioni inserite seguendo le regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Output di prezzo con massimo 2 decimali.


/*let userKm = prompt("Quanti kilometri devi percorrere?");
let userAge = prompt("Inserisci la tua età");

if (isNaN(userKm) || isNaN(userAge)) {
    alert ("Non hai inserito i dati correttamente!")
}

    userKm = parseInt(userKm);
    userAge = parseInt(userAge);

    let ticketPrice = userKm * 0.21; 

if (userAge < 18) {
    ticketPrice -= ticketPrice * 20 / 100; 
} else if (userAge >= 65) {
    ticketPrice -= ticketPrice * 40 / 100; 
}

let finalPrice = ticketPrice.toFixed(2);

console.log("Il prezzo del tuo biglietto è " + finalPrice);
document.getElementById("price").innerHTML = finalPrice;
    