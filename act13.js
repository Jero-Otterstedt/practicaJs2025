//Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.

let personas = [
    { nombre: "Sofia", sexo: "F", edad: 28 },
    { nombre: "Pedro", sexo: "M", edad: 30 },
    { nombre: "Laura", sexo: "F", edad: 40 },
    { nombre: "Lucas", sexo: "M", edad: 15 },
    { nombre: "Maira", sexo: "F", edad: 28 },
    
  ];

  function calcularPromedioGeneral(personas) {
    let sumaEdades = 0;
    for (let i = 0; i < personas.length; i++) {
        sumaEdades += personas[i].edad;
    }
    return sumaEdades / personas.length;
}
console.log("Promedio edad:", calcularPromedioGeneral(personas));

function encontrarMujerMayor(personas) {
    let mujerMayor = null;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "F") {
            if (mujerMayor === null || personas[i].edad > mujerMayor.edad) {
                mujerMayor = personas[i];
            }
        }
    }
    return mujerMayor.nombre;
}
console.log("Mujer mayor edad:", encontrarMujerMayor(personas));

function calcularPromedioMujeres(personas) {
    let sumaEdadesMujeres = 0;
    let cantidadMujeres = 0;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "F") {
            sumaEdadesMujeres += personas[i].edad;
            cantidadMujeres++;
        }
    }
    return sumaEdadesMujeres / cantidadMujeres;
}
console.log("Promedio edad mujeres:", calcularPromedioMujeres(personas));

function encontrarHombreMenor(personas) {
    let hombreMenor = null;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "M") {
            if (hombreMenor === null || personas[i].edad < hombreMenor.edad) {
                hombreMenor = personas[i];
            }
        }
    }
    return hombreMenor.nombre;
}
console.log("Hombre menor edad:", encontrarHombreMenor(personas));