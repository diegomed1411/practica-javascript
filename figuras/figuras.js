//funciones de calculo de areas y perimetros
const perimetroCuadrado= (lado)=> lado*4;  
const areaCuadrado= (lado) => lado * lado;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => base * altura / 2;

const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
//const perimetroCirculo = diametroCirculo * PI;
const perimetroCirculo = (radio) => diametroCirculo(radio)*PI;
//const areaCirculo = (radioCirculo*radioCirculo)*PI;
const areaCirculo = (radio) => radio * radio * PI


//----------------------------------------------------------------------------------------------------
//validacion de campos
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0 || isNaN(val)) ? true : false;
}

// ----------------------------------------------------------------------------------------------------
// interaccion con HTML

// funciones de calculo de cuadrado 


function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valorInputCuadrado = inputCuadrado.value;
    if (isEmpty(valorInputCuadrado)) {
        alert("Debe ingresar la medida del lado");
    } else {
    resultadoCuadrado.innerHTML = "El perímetro es: "+perimetroCuadrado(valorInputCuadrado).toFixed(2)+" cm";}
}

function calcularAreaCuadrado(){
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valorInputCuadrado = inputCuadrado.value;
    if (isEmpty(valorInputCuadrado)) {
        alert("Debe ingresar la medida del lado");
    } else {
    resultadoCuadrado.innerHTML = "El área es: "+ areaCuadrado(valorInputCuadrado).toFixed(2)+" cm2";}
}

// funciones de calculo de triangulo 


function calcularPerimetroTriangulo(){
const inputLadoUnoTriangulo = document.getElementById("InputLadoUnoTriangulo");
const valorLadoUnoTriangulo = parseFloat(inputLadoUnoTriangulo.value);
const inputLadoDosTriangulo = document.getElementById("InputLadoDosTriangulo");
const valorLadoDosTriangulo = parseFloat(inputLadoDosTriangulo.value);
const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
const valorBaseTriangulo = parseFloat(inputBaseTriangulo.value);

if (isEmpty(valorLadoUnoTriangulo) || isEmpty(valorLadoDosTriangulo) || isEmpty(valorBaseTriangulo)) {
        alert("Debe ingresar la medida Lado 1, Lado 2 y Base");
} else {
    resultadoTriangulo.innerHTML = "El perímetro es: "+ perimetroTriangulo(valorLadoUnoTriangulo, valorLadoDosTriangulo, valorBaseTriangulo).toFixed(2)+" cm";}
}

function calcularAreaTriangulo(){
const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
const valorBaseTriangulo = inputBaseTriangulo.value;
const inputAlturaTriangulo = document.getElementById("InputAlturaTriangulo");
const valorAlturaTriangulo = inputAlturaTriangulo.value;

if (isEmpty(valorBaseTriangulo) || isEmpty(valorAlturaTriangulo)) {
    alert("Debe ingresar la medida de Base y Altura");
} else {
resultadoTriangulo.innerHTML = "El área es: "+ areaTriangulo(valorBaseTriangulo, valorAlturaTriangulo).toFixed(2)+" cm2";}

}

//funciones circulo

function calcularPerimetroCirculo(){
    const inputRadioCirculo = document.getElementById("InputCirculo");
    const valorRadioCirculo = inputRadioCirculo.value;

    if (isEmpty(valorRadioCirculo)){
        alert("Debe ingresar la medida del radio")
    } else {
        resultadoCirculo.innerHTML = "El perímetro es: "+ perimetroCirculo(valorRadioCirculo).toFixed(2)+" cm"
    }
}

function calcularAreaCirculo(){
    const inputRadioCirculo = document.getElementById("InputCirculo");
    const valorRadioCirculo = inputRadioCirculo.value;

    if (isEmpty(valorRadioCirculo)){
        alert("Debe ingresar la medida del radio")
    } else {
        resultadoCirculo.innerHTML = "El área es: "+ areaCirculo(valorRadioCirculo).toFixed(2)+" cm2"
    }
}