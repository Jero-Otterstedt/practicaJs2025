// Ingresar tres valores e indicar cual es el mayor y cual el menor.

function mayorMenor(a, b, c) {
     const mayor = Math.max(a, b, c);
     const menor = Math.min(a, b, c);
     console.log("El mayor es " + mayor + " y el menor es " + menor);
}
let n1 = 8;
let n2 = 3;
let n3 = 6;

if (n1 >= n2 & n1 >= n3 & n2 >= n3) {
    console.log("El mayor es " + n1 + " y el menor es " + n3)}
else if (n1 >= n2 & n1 >= n3 & n3 >= n2)
     console.log("El mayor es " + n1 + " y el menor es " + n2)

else if (n2 >= n1 & n2 >= n3 & n1 >= n3) 
     console.log("El mayor es " + n2 + " y el menor es " + n3)
else if (n2 >= n1 & n2 >= n3 & n3 >= n1)
     console.log("El mayor es " + n2 + " y el menor es " + n1)

else if (n3 >= n1 & n3 >= n2 & n1 >= n2) 
     console.log("El mayor es " + n3 + " y el menor es " + n2)
else if (n3 >= n1 & n3 >= n2 & n2 >= n1)
     console.log("El mayor es " + n3 + " y el menor es " + n1)