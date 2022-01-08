const list1 = [
  1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 7, 7, 7, 7, 86, 8, 6, 7, 4, 2, 4, 1, 2,
];

const list1Count = {};

list1.map((element) => {
  if (list1Count[element]) {
    list1Count[element] += 1;
  } else {
    list1Count[element] = 1;
  }
});

const list1Array = Object.entries(list1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = list1Array[list1Array.length - 1];
