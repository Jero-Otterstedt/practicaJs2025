//Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.

function divisoresRango(min, max, div) {
    for (let i = min; i <= max; i++) {
      if (i % div === 0) {
        console.log(i);
      }
    }
  }
  
  divisoresRango(1, 20, 5)
  