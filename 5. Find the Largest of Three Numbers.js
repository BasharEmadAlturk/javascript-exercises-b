//5. Find the Largest of Three Numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
console.log(findLargest(10, 25, 15));
