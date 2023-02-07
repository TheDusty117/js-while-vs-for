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
arrPosition = (Math.ceil(Math.random() * 10))
console.log(arrPosition)

for (let i = 0 ; i < carArray.length ; i++) {
  const splice = carArray.splice(arrPosition, arrPosition)

  console.log(carArray)
}
