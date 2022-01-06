function calculoAlturaTriangulo(lado1, lado2, base) {
  const preRaiz = lado1 * lado2 - (base * base) / 4;
  const raiz = Math.sqrt(preRaiz);
  return raiz;
}

// sección de interacción con HTML

function alturaTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const input3 = document.getElementById("InputTriangulo3");
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  if (value1 === value2) {
    alert((answer = calculoAlturaTriangulo(value1, value2, value3)));
  } else {
    alert("no es un triángulo isosceles");
  }
}
