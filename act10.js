//Sumar solo los elementos pares de un array.

let numeros = [6, 3, 15, 8, 2, 10, 32, 12, 7,28];
let total = 0;
{
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      total += numeros[i];
    }
  }
}
  console.log(total);