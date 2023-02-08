//CREA ARRAY CON 10 ELEMENTI

let carArray = [
  'ferrari',
  'lamborghini',
  'bmw',
  'audi',
  'ford',
  'subaru',
  'mercedes',
  'smart',
  'toyota',
  'fiat'
]

// far si che casualmente cambino posizione tra di loro

// creare ciclo infinito che cambia ogni volta posizione

// creare ciclo for, che per ogni indice gli riassegni la posizione
randomNumber = (Math.ceil(Math.random() * 10))
console.log(randomNumber)

for (let i = 0 ; i < 11 ; i++) {

  const fromArray = carArray.indexOf('ferrari');

  const toArray = randomNumber;

  
}
