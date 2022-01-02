const lista1 = [
  250, 240, 10000, 3, 100, 200, 300, 500, 600, 80000000, 5, 50, 60, 100, 100,200,200
];

// funciones para calculo de promedio o media aritmetica
function sumaElementosLista(lista) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sumaLista = lista.reduce(reducer);
  return sumaLista;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = sumaElementosLista(lista);
  const mediaAritmetica = sumaLista / lista.length;
  return mediaAritmetica;
}

//funciones para el calculo de la mediana
function posicionElementosCentrales(lista) {
  if (lista.length % 2 == 0) {
    posicion = [lista.length / 2 - 1, lista.length / 2];
  } else {
    posicion = [Math.floor(lista.length / 2)];
  }
  return posicion;
}

function calcularMediana(lista) {
  const listaOrdenada = lista.sort((a, b) => a - b);
  const posicion = posicionElementosCentrales(listaOrdenada);
  let sumaElementosCentrales = 0;
  posicion.forEach((element) => {
    sumaElementosCentrales = sumaElementosCentrales + listaOrdenada[element];
  });
  const mediana = sumaElementosCentrales / posicion.length;
  return mediana;
}

//funciones para el calculo de la moda

function contarElementoLista(lista) {
  const listaCount = {};
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  return listaCount;
}



function calcularModa (lista){
    //pasar objeto a array
    const repetitionsList = Object.entries(contarElementoLista(lista)).sort((a, b) => b[1] - a[1]);
    const maxRepeticiones = repetitionsList[0][1]
    const listaElementosModa = repetitionsList.filter(elemento => elemento[1]===maxRepeticiones)
    return listaElementosModa
}

// Interactuando con HTML ----------------------------------------------------------------------------------------
function procesarPromedio() {
    const inputNumeros = document.getElementById("InputNumeros").value
    const inputArray = inputNumeros.split(',')
    const inputArrayNumbers = inputArray.map((element) => parseFloat(element))
    resultado.innerHTML= "El promedio de la lista es: "+calcularMediaAritmetica(inputArrayNumbers)
    
}

function procesarMediana(){
    const inputNumeros = document.getElementById("InputNumeros").value
    const inputArray = inputNumeros.split(',')
    const inputArrayNumbers = inputArray.map((element) => parseFloat(element))
    resultado.innerHTML= "La mediana de la lista es: "+calcularMediana(inputArrayNumbers)
}

function procesarModa(){
    const inputNumeros = document.getElementById("InputNumeros").value
    const inputArray = inputNumeros.split(',')
    const inputArrayNumbers = inputArray.map((element) => parseFloat(element))
    const modaInputArray = calcularModa(inputArrayNumbers)
    const listaNumerosModa = modaInputArray.map((element)=> element[0])
    const cantidadMax = modaInputArray[0][1]
    resultado.innerHTML= "La moda de la lista es: "+listaNumerosModa+" y se repitió "+cantidadMax+" veces"
}
