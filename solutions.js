// 1. Swap Two Variables
let product1 = "Phone";
let product2 = "Laptop";
let temp = product1;
product1 = product2;
product2 = temp;
console.log(product1, product2);

// 2. Check if a Number is Odd or Even
function assignSection(ticketNumber) {
  if (ticketNumber % 2 === 0) {
    return "Section A";
  } else {
    return "Section B";
  }
}
console.log(assignSection(15));

// 3. Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 4. Palindrome Check
function isPalindrome(text) {
  let reversed = text.split("").reverse().join("");
  return text === reversed;
}
console.log(isPalindrome("madam"));

// 5. Find the Largest of Three Numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
console.log(findLargest(10, 25, 15));

// 6. Fibonacci Sequence
function printFibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
printFibonacci(10);

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

// 8. Check Prime Number
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));

// 9. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("puzzle"));

// 10. Factorial Using a Loop
function factorialLoop(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
console.log(factorialLoop(6));

// 11. GCD of Two Numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(20, 12));

// 12. Check Perfect Number
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(isPerfect(28));

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

// 14. Remove Duplicates from Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 15. Sum of Elements in an Array
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumArray([10, 20, 30]));
