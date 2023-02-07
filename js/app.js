//Creare un prompt con while che chiede numeri all'utente,
//PERO' fare si che si fermi dopo aver ricevuto 10 numeri dispari

//dichiaro variabili necessarie, ovvero chiedi numero, dispari e pari

// let askNumber = parseInt(prompt('inserisci 10 numeri dispari'))
// console.log(askNumber)

let askNumber

const numberOdd = askNumber % 2 >= 1 //il numero e' dispari
console.log(numberOdd)

let arrayOdds = []
console.log(arrayOdds.length)

while (arrayOdds.length <= 10 ) {
  askNumber = parseInt(prompt('inserisci 10 numeri dispari'))
}

// while (numberOdd < sogliaOdd) {
//   number = parseInt(prompt('inserisci 10 numeri dispari'))
// }