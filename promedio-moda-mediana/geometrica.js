const list1 = [
  1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 7, 7, 7, 7, 86, 8, 6, 7, 4, 2, 4, 1, 2,
];

const list2 = [1.2, 1.15, 1.33, 1.25];

function resultadoMultiplicacion(arr) {
  const multiplicado = arr.reduce((contador = 1, numero) => {
    return (contador *= numero);
  });
  return multiplicado;
}

function mediaGeometrica(arr) {
  const multiplicado = resultadoMultiplicacion(arr);
  const exponente = 1 / arr.length;
  const geometrica = Math.pow(multiplicado, exponente);
  return geometrica;
}

console.log(mediaGeometrica(list2));
