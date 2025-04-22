//Ingresar dos valores enteros y enumerar los elementos que los separan. 

function separarNumeros(n1, n2) {
    if (n1 < n2) {
        for (let i = n1 + 1; i < n2; i++) {
            console.log(i);
        }
    } else if (n1 > n2) {
        for (let i = n2 + 1; i < n1; i++) {
            console.log(i);
        }
    } else {
        console.log("Los números son iguales.");
    }
}
let n1 = 8;
let n2 = 20;
console.log("Los números que separan a " + n1 + " y " + n2 + " son: ");
if (n1 < n2) {
    for (let i = n1 + 1; i < n2; i++) {
        console.log(i);
    }
} else if (n1 > n2) {
    for (let i = n2 + 1; i < n1; i++) {
        console.log(i);
    }
}