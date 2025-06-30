function quickSort(arr, left, right) {
  if (left >= right) return; //base case
  //partition the arr such that, elements smaller than pivot are on the left side
  //and elements greater than the pivot are on the right side and return partition index
  const pi = partition(arr, left, right);
  quickSort(arr, left, pi - 1); //Recursively apply quicksort to the left subarray
  quickSort(arr, pi + 1, right); // Recursively apply quicksort to the right subarray
}

function partition(arr, left, right) {
  //select the last element as pivot
  const pivot = arr[right];
  // pointer where the next smaller/equal element should be placed
  let i = left;

  for (let j = left; j < right; j++) {
    //if any element found smaller/equal to pivot, Swap it with element at pointer i, and move i pointer ahead
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  //finally swap the pivot element with the element at i
  swap(arr, i, right);
  return i;
}

const swap = (arr, leftIdx, rightIdx) => {
  const temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
  return arr;
};

const arr = [34, 7, 23, 32, 5, 62, 14, -3, 87, -1, 45, 1, 22];
console.log("Before Sorting :", [...arr]);
quickSort(arr, 0, arr.length - 1);
console.log("After Sorting :", arr);
