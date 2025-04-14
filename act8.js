//Mostrar los multiplos de 2 y 3 menores a 100.

console.log("Los multiplos de 2 y 3 menores a 100 son: ");
for (let i = 1; i < 100; i++) 
    if (i % 2 == 0) {
        console.log(i);
    } else if (i % 3 == 0) {
        console.log(i);
    }