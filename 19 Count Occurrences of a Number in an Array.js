function countOccurrences(arr, number) {
  return arr.filter(value => value === number).length;
}
console.log(countOccurrences([1, 2, 2, 3], 2)); // Output: 2
