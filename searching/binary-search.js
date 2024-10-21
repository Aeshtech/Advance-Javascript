const binarySearch = (arr, target) => {
    const len = arr.length
    if (len <= 0) {
      return -1
    }
    let left = 0,
      right = len - 1
    while (left <= right) {
      let mid = Math.floor((left + right)/2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (target < arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return -1
  }
  
  const arr = [2, 4, 6, 8, 9, 11, 13, 15]
  const target = 15
  
  console.time();
  const result = binarySearch(arr, target)
  console.timeEnd();
  console.log(result);
  