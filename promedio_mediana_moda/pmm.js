const lista1 = [
    250, 240, 10000, 3, 100, 200, 300, 500, 600, 80000000, 5, 50, 60, 100, 100
];


// funciones para calculo de promedio o media aritmetica
function sumaElementosLista(lista){
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const sumaLista = lista.reduce(reducer);    
    return sumaLista;
};

function calcularMediaAritmetica(lista){
    const sumaLista = sumaElementosLista(lista)    
    const mediaAritmetica = sumaLista / lista.length
    return mediaAritmetica
};


//funciones para el calculo de la mediana 
function posicionElementosCentrales (lista){
    if (lista.length % 2 == 0){
        posicion = [(lista.length/2) -1, lista.length/2]
    } else {
        posicion = [Math.floor(lista.length/2)]
    }
    return posicion 
}


function calcularMediana (lista){
    const listaOrdenada = lista.sort((a,b)=>a-b)
    const posicion = posicionElementosCentrales(listaOrdenada)
    let sumaElementosCentrales = 0
    posicion.forEach(element => {
        sumaElementosCentrales = sumaElementosCentrales + listaOrdenada[element]
    });
    const mediana = sumaElementosCentrales / posicion.length
    return mediana
}

//funciones para el calculo de la moda
