const quickSort = (arr, left, right) => {
  //Do quickSort recursively on partitions until left greater than or equal to right index;
  if (left < right) {
    //Partition the given array in such a way so that all smaller or equal elements should be in left
    //patition of pivot and all greater elements should be right partition of the array
    const pivotIdx = partition(arr, left, right);
    //recursively invoke the quickSort on left partition execluding pivot itself
    quickSort(arr, left, pivotIdx - 1);
    //recursively invoke the quickSort on right partition execluding pivot itself
    quickSort(arr, pivotIdx + 1, right);
  }
};

const partition = (arr, left, right) => {
  //select last element as pivot
  const pivot = arr[right];
  //special pointer to tell the right place for elements
  let i = left - 1;
  //run loop until left less than right index;
  for (let j = left; j < right; j++) {
    //if current element is
    if (arr[j] < pivot) {
      i++; //increament the i
      //excluding unnecessary swap operation for the same index of i and j
      if (i !== j) swap(arr, i, j);
    }
  }
  //now swap the pivot element to its right position which is i+1;
  swap(arr, i + 1, right);
  return i + 1;
};

const swap = (arr, leftIdx, rightIdx) => {
  const temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
  return arr;
};

const array = [5, 8, 1, 3, 7, 9, 4, 2, -1, 0];
console.log("Array before sorting = ", array);
const right = array.length - 1;
quickSort(array, 0, right);
console.log("Array after sorting = ", array);
