//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
let personas = [
    { nombre: "Sofia", sexo: "F", edad: 28 },
    { nombre: "Pedro", sexo: "M", edad: 30 },
    { nombre: "Laura", sexo: "F", edad: 40 },
    { nombre: "Lucas", sexo: "M", edad: 15 },
    { nombre: "Maira", sexo: "F", edad: 28 }
  ];
  
  let sumaEdades = 0;
  let sumaEdadesMujeres = 0;
  let cantidadMujeres = 0;
  let mujerMayor = null;
  let hombreMenor = null;
  
  for (let i = 0; i < personas.length; i++) {
    sumaEdades += personas[i].edad;
  
    if (personas[i].sexo === "F") {
      sumaEdadesMujeres += personas[i].edad;
      cantidadMujeres++;
      if (mujerMayor === null || personas[i].edad > mujerMayor.edad) {
        mujerMayor = personas[i];
      }
    }
  
    if (personas[i].sexo === "M") {
      if (hombreMenor === null || personas[i].edad < hombreMenor.edad) {
        hombreMenor = personas[i];
      }
    }
  }
  
  let promedioGeneral = sumaEdades / personas.length;
  let promedioMujeres = sumaEdadesMujeres / cantidadMujeres;
  
  console.log("Promedio edad:", promedioGeneral);
  console.log("Mujer mayor edad:", mujerMayor.nombre);
  console.log("Hombre menor edad:", hombreMenor.nombre);
  console.log("Promedio edad mujeres:", promedioMujeres);