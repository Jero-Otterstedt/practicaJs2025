//Obtener la suma de los elementos de un array.

function sumarElementosArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

let numeros = [7, 5, 9, 3, 8];
let total = 0;
for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log(total);