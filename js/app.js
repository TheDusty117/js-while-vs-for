//Creare un prompt con while che chiede numeri all'utente,
//PERO' fare si che si fermi dopo aver ricevuto 10 numeri dispari

//dichiaro variabili necessarie, ovvero chiedi numero, dispari e pari

// let askNumber = parseInt(prompt('inserisci 10 numeri dispari'))
// console.log(askNumber)

let askNumber


let arrayOdds = []
console.log(arrayOdds.length)

while (arrayOdds.length < 10 ) {
  askNumber = parseInt(prompt('inserisci 10 numeri dispari'))
  console.log(askNumber)

  if (isNaN(askNumber)) {
    // se NAN salto tutto il resto del codice e passo alla prossima iterazione del ciclo.
    continue
  }

  const resto = askNumber % 2 //numero dispari devo pusharlo in array

  if(resto === 0) {
    console.log('pari')
  } else {
    console.log('dispari')
    arrayOdds.push(askNumber)
  }
  
}

console.log(arrayOdds) 

//stampare risultato con un ciclo FOR--------

for(let i = 0; i < arrayOdds.length; i++) {
  const numeroCorrente = arrayOdds[i]
  console.log(numeroCorrente)
}






//ciclo for per stampare singolarmente ogni numero

// for (let i = 0; i < arrayOdds.length; i++) {
//   console.log(arrayOdds[i], 'dispari!')
// }








//CORREZIONE IN CLASSE SCOMMENTA QUI GIU---------------------------------------------


// //chiedere dei numeri dispari
// const listaNum = []


// while (listaNum.length < 10) {
//   console.log(listaNum)
//   //chiedere un numero all'utente
//   let askNum = parseInt(prompt('inserire un numero inter'))
//   console.log(askNum)

//   //se il numero e' dispari lo pusho dentro listaNumeri
//   const resto = askNum % 2 

//   //controlliamo se e' pari o dispari
//   if(resto === 0) {
//     console.log('pari')
//   } else {
//     console.log('dispari')
//     listaNum.push(askNum)
//   }  

// }
// //prende tutti i valori sui