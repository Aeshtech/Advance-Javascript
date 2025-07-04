//Insertion sort, sort the array by comparing a element in its already sorted elements and then pick next element until end

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

const arr = [34, 7, 23, 32, 5, 62, 14, -3, 87, -1, 45, 1, 22];
console.log("Before Sorting :", [...arr]);
quickSort(arr, 0, arr.length - 1);
console.log("After Sorting :", arr);
