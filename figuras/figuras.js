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

