function mergeSort(arr, left, right) {
  if (left >= right) return; //base case when single element left in hypothetical arr
  const mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  const merged = [];
  let i = left,
    j = mid + 1;

  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      merged.push(arr[i]);
      i++;
    } else {
      merged.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    merged.push(arr[i]);
    i++;
  }
  while (j <= right) {
    merged.push(arr[j]);
    j++;
  }

  for (let k = 0; k < merged.length; k++) {
    arr[left + k] = merged[k];
  }
}

const arr = [34, 7, 23, 32, 5, 62, 14, -3, 87, -1, 45, 1, 22];
console.log("Before Sorting :", [...arr]);
mergeSort(arr, 0, arr.length - 1);
console.log("After Sorting :", arr);
