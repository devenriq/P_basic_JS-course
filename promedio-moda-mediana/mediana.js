function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}

const list1 = [6900, 500, 1000, 500000000];
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const list1Sorted = bubbleSort(list1);
console.log(list1Sorted);
const mitadLista1 = parseInt(list1.length / 2);

function calcularMediana() {
  let mediana;

  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      mediana = list1[mitadLista1];
    }
  }

  if (isEven(list1.length)) {
    const element1 = list1[mitadLista1];
    const element2 = list1[mitadLista1 - 1];
    const promElement1Element2 = calcularMediaAritmetica([element1, element2]);

    mediana = promElement1Element2;
  } else {
    mediana = list1[mitadLista1];
  }
  return mediana;
}
