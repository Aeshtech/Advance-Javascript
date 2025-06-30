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

const arr1 = [34, 7, 23, 32, 5, 62];
const arr2 = [14, 3, 87, 45, 22, 1];
const mergedArr = arr1.concat(arr2);
console.log("Before Sorting :", [...mergedArr]);
mergeSort(mergedArr, 0, mergedArr.length - 1);
console.log("After Sorting :", mergedArr);
