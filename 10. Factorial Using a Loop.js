// 10. Factorial Using a Loop
function factorialLoop(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
console.log(factorialLoop(6));