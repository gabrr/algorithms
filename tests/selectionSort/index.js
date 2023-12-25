function selectionSort(array) {
  // Only change code below this line

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let index = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        index = j;
      }
    }

    array[index] = array[i];
    array[i] = min;
  }

  return array;
  // Only change code above this line
}

log(selectionSort([1, 3, 34, 12, 6, 9, 4]));
