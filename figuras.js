//código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log(`El área de mi cuadrado es: ${areaCuadrada} cm^2`);
console.groupEnd();

//código del triángulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   `los lados del triángulo miden: ${baseTriangulo} cm,
//   ${ladoTriangulo1} cm y
//   ${ladoTriangulo2} cm`
// );

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log(`La altura del triánculo es ${alturaTriangulo}`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El área del cuadrado es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

//radio

// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo} cm`);

//diametro

// const radioDiametro = radioCirculo * 2;
// console.log(`El diametro del círculo es: ${radioDiametro} cm`);

function diametroCirculo(radio) {
  return radio * 2;
}

//PI

const PI = Math.PI;

//circunferencia

// const perimetroCirculo = radioDiametro * PI;
// console.log(`La circunferencia del círculo es: ${perimetroCirculo} cm`);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//área

function areaCirculo(radio) {
  return radio * radio * PI;
}

// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log(`El área del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();

// sección de interacción con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
