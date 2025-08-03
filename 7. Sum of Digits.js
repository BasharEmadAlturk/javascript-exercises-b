// 7. Sum of Digits
function sumDigits(num) {
  let sum = 0;
  let digits = num.toString();
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}
console.log(sumDigits(1234));