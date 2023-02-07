//Creare un prompt con while che chiede numeri all'utente,
//PERO' fare si che si fermi dopo aver ricevuto 10 numeri dispari

let number = parseInt (prompt('inserisci un numero dispari'))

const numberOdd = number % 2 >= 1 //il numero e' dispari

const numberEven = number % 2 === 0 // il numero e' pari

while (number = numberOdd) {
  console.log(number)
}