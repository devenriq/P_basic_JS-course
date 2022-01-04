//código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`El área de mi cuadrado es: ${areaCuadrada} cm^2`);
console.groupEnd();

//código del triángulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  `los lados del triángulo miden: ${baseTriangulo} cm,
  ${ladoTriangulo1} cm y
  ${ladoTriangulo2} cm`
);
console.log(`La altura del triánculo es ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del cuadrado es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

//radio

const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo} cm`);

//diametro

const radioDiametro = radioCirculo * 2;
console.log(`El diametro del círculo es: ${radioDiametro} cm`);

//PI

const PI = Math.PI;

//circunferencia

const perimetroCirculo = radioDiametro * PI;
console.log(`La circunferencia del círculo es: ${perimetroCirculo} cm`);

//área

const areaCirculo = PI * radioCirculo * radioCirculo;
console.log(`El área del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();
