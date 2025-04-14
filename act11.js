//Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

let palabra = "factura";
let letras = {};
console.log("Las letras de la palabra " + palabra + " son: ");
for (let i = 0; i < palabra.length; i++) {
    if (letras[palabra[i]]) {
        letras[palabra[i]]++;
    } else {
        letras[palabra[i]] = 1;
    }
}
console.log(letras);