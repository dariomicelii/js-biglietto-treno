/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana
 (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// RACCOLTA DATI
// chiedere il numero di chilometri da percorrere
const numKilom = prompt("Quanti kilometri devi percorrere?", "300")
console.log(numKilom);
// chiedere età del passeggero
const userAge = prompt("Quanti anni hai?", "18")
console.log(userAge);


// ELABORAZIONE DATI
const maggioreEta = 18
let over65 = 65

// calcoliamo il prezzo del biglietto
let ticketPrice = Math.round(numKilom * 0.21)

// SE eta è minore di 18 
if(userAge < maggioreEta && userAge > 1){
    // applichiamo sconto del 20%
    const youngDiscount = (ticketPrice * 20) / 100;
    // prepariamo messaggio prezzo scontato
    message = "Il prezzo del tuo biglietto è di:" + " " + ticketPrice.toString + "Hai diritto ad uno sconto del 20%! Ecco il prezzo scontato del tuo biglietto:" + " " + youngDiscount.toFixed(2)
}

// ALTRIMENTI SE eta è maggiore di 65
else if(userAge > over65 && userAge > 1){
    // applichiamo sconto del 40%
    const over65Discount = (ticketPrice * 40) / 100;
    // prepariamo messaggio prezzo scontato
    message = " Il prezzo del tuo biglietto è di:" + " " + "ticketPrice.toString + Hai diritto ad uno sconto del 40%! Ecco il prezzo scontato del tuo biglietto:" + " " + over65Discount.toFixed(2) 
}

else if(userAge >= maggioreEta && userAge <= over65){
    message = "Non hai diritto ad alcuno sconto =(, il prezzo del tuo biglietto è di:" + " " + ticketPrice.toFixed(2)
}

else{
    message = "Ooops, il numero che hai inserito non è valido =("
}


// OUTPUT
// messaggio prezzo
console.log(message)


