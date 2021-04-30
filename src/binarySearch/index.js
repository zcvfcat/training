const binarySearch = (arr, target) => {
  arr.sort((a, b) => a - b);

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target < arr[middleIndex]) endIndex = middleIndex - 1;
    else if (arr[middleIndex] < target) startIndex = middleIndex + 1;
    else return middleIndex;
  }
  return false;
};

console.log(binarySearch([1, 5, 3, 7, 50, 23, 456, 678, 789, 1256, 4567, 111], 789));
