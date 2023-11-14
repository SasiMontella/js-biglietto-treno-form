// Questo è il file che contiene tutto il codice JS della pagina web
function userFormComplete(event){
    event.preventDefault();

let userNameSurname = document.getElementById("credenziali").value;
let userKm = document.getElementById("kmTravel").value;
let userAge = document.getElementById("age").value;



if (isNaN(userKm)) {
    alert ("Alcuni dati inseriti sono errati, riprova!");
}

 userKm = parseInt(userKm);

 let ticketPrice = userKm * 0.21;

 if (userAge === "1") {
    ticketPrice -= ticketPrice * 20 / 100;
 } else if (userAge === "3") {
    ticketPrice -= ticketPrice * 40 / 100;
 }

 let finalPrice = ticketPrice.toFixed(2);
 let random = Math.floor(Math.random() * 11);
 let random2 = Math.floor(Math.random() * 10001);

 document.getElementById("name-surname").innerHTML = userNameSurname;
 document.getElementById("trainCarriage").innerHTML = random;
 document.getElementById("cpCode").innerHTML = random2;
 document.getElementById("ticketPrice").innerHTML = finalPrice + "€";
}

    