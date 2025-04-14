//Filtrar los elementos de un array de números para obtener solo los pares.

let numeros13 = [1, 4, 7, 8, 10, 15];
for (let i = 0; i < numeros13.length; i++) {
  if (numeros13[i] % 2 === 0) {
    console.log(numeros13[i]);
  }
}
