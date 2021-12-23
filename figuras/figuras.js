//formulas cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado *4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado+"cm2");

console.groupEnd();

//formulas triangulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y la base "+baseTriangulo+ "cm" );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es: "+perimetroTriangulo+"cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triangulo es de: "+areaTriangulo+"cm2");

console.groupEnd();

//formulas circulo
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log("El radio del circulo es: "+radioCirculo+"cm")
console.log("El diametro del circulo es: "+diametroCirculo+"cm")
console.log("El perimetro del circulo es: "+perimetroCirculo+"cm")
console.log("El area del circulo es: "+areaCirculo+"cm2")
console.groupEnd()

