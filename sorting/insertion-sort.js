const arr = [3, 5, 90, -30, 4, 2, 1];
//in insertion sort we sort sort the array in phase by comparing element to its already sorted elements
console.log("Array before sorted = ", arr);
for (let i = 1; i < arr.length; i++) {
  const currElem = arr[i];
  for (let j = i - 1; j >= 0; j--) {
    if (currElem < arr[j]) {
      const temp = arr[j];
      arr[j] = currElem;
      arr[j + 1] = temp;
    }
  }
}

console.log("Array after sorted = ", arr);
