[451, 2, 65, 4, 7, 98, 2, 3, 1];

function selectionSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}

selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
