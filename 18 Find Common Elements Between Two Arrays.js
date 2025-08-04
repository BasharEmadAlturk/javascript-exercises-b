function findCommon(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(findCommon([1, 2, 3], [2, 3, 4])); // Output: [2, 3]