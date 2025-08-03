// 13. LCM of Two Numbers
function lcm(a, b) {
  let max = a > b ? a : b;
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}
console.log(lcm(4, 6));