let n: number = Number(prompt("ingrese la longitud del array"));
let array: number[] = new Array(n);
let i: number = 0;
let array2: number[] = new Array(n);

function cargarArreglo() {
  for (i = 0; i < n; i++) {
    array[i] = Number(
      prompt(
        "ingrese el valor de V1 que desea almacenar en la posicion: " + (i + 1)
      )
    );
    array2[i] = Number(
      prompt(
        "ingrese el valor de V2 que desea almacenar en la posicion: " + (i + 1)
      )
    );
  }
}
function mostrarArreglo() {
  for (i = 0; i < n; i++) {
    console.log("usted cargo en la posicion " + (i + 1), "el valor" + array[i]);
  }
}

function mostarArregloInvertido() {
  for (i = n - 1; i >= 0; i--) {
    console.log(array[i]);
    console.log(array2[i]);
  }
}

cargarArreglo();
mostrarArreglo();
mostarArregloInvertido();
