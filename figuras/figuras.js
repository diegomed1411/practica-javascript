//formulas cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado= (lado)=> lado*4;  

console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log("El área del cuadrado es: "+areaCuadrado+"cm2");

const areaCuadrado= (lado) => lado * lado;

console.groupEnd();

//formulas triangulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y la base "+baseTriangulo+ "cm" );

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
//console.log("El área del triangulo es de: "+areaTriangulo+"cm2");

const areaTriangulo = (base, altura) => base * altura / 2;

console.groupEnd();

//formulas circulo
console.group("Circulo");

const radioCirculo = 4;
//const diametroCirculo = radioCirculo*2;
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
//const perimetroCirculo = diametroCirculo * PI;
const perimetroCirculo = (radio) => diametroCirculo(radio)*PI;
//const areaCirculo = (radioCirculo*radioCirculo)*PI;
const areaCirculo = (radio) => radio * radio * PI


console.log("El radio del circulo es: "+radioCirculo+"cm")
console.log("El diametro del circulo es: "+diametroCirculo+"cm")
console.log("El perimetro del circulo es: "+perimetroCirculo+"cm")
console.log("El area del circulo es: "+areaCirculo+"cm2")
console.groupEnd()

//validacion de campos
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

// interaccion con HTML

// funciones de calculo de cuadrado 

function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valorInputCuadrado = inputCuadrado.value;
    if (isEmpty(valorInputCuadrado)) {
        alert("Debe ingresar la medida del lado");
    } else {
    resultadoCuadrado.innerHTML = "El perímetro es: "+perimetroCuadrado(valorInputCuadrado)+" cm";}
}

function calcularAreaCuadrado(){
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valorInputCuadrado = inputCuadrado.value;
    if (isEmpty(valorInputCuadrado)) {
        alert("Debe ingresar la medida del lado");
    } else {
    resultadoCuadrado.innerHTML = "El área es: "+ areaCuadrado(valorInputCuadrado)+" cm2";}
}

// funciones de calculo de triangulo 

const inputLadoUnoTriangulo = document.getElementById("InputLadoUnoTriangulo");
const valorLadoUnoTriangulo = inputLadoUnoTriangulo.value;
const inputLadoDosTriangulo = document.getElementById("InputLadoDosTriangulo");
const valorLadoDosTriangulo = inputLadoUnoTriangulo.value;
const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
const valorBaseTriangulo = inputBaseTriangulo.value;
const inputAlturaTriangulo = document.getElementById("InputAlturaTriangulo");
const valorAlturaTriangulo = inputAlturaTriangulo.value;

function calcularPerimetroTriangulo(){
const inputLadoUnoTriangulo = document.getElementById("InputLadoUnoTriangulo");
const valorLadoUnoTriangulo = parseFloat(inputLadoUnoTriangulo.value);
const inputLadoDosTriangulo = document.getElementById("InputLadoDosTriangulo");
const valorLadoDosTriangulo = parseFloat(inputLadoUnoTriangulo.value);
const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
const valorBaseTriangulo = parseFloat(inputBaseTriangulo.value);
    if (isEmpty(valorBaseTriangulo)|| isEmpty(valorLadoUnoTriangulo) || isEmpty(valorLadoDosTriangulo)) {
        alert("Debe ingresar la medida Lado 1, Lado 2 y Base");
    } else {
        resultadoTriangulo.innerHTML = "El perímetro es: "+ perimetroTriangulo(valorLadoUnoTriangulo, valorLadoDosTriangulo, valorBaseTriangulo)+" cm";}
}