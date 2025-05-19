//binary search recursive
const binarySearch = (arr, target) => {
  const len = arr.length;
  if (len <= 0) {
    return -1;
  }
  let left = 0,
    right = len - 1;
  return binarySearchRecursive(arr, target, left, right);
};

const binarySearchRecursive = (arr, target, left, right) => {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
};
