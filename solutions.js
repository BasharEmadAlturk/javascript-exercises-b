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

//  Question 16: Find the Maximum Number in an Array
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([2, 4, 9, 1])); // Output: 9

//  Question 17: Find the Minimum Number in an Array
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([2, 4, 9, 1])); // Output: 1

//  Question 18: Find Common Elements Between Two Arrays
function findCommon(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(findCommon([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

//  Question 19: Count Occurrences of a Number in an Array
function countOccurrences(arr, number) {
  return arr.filter(value => value === number).length;
}
console.log(countOccurrences([1, 2, 2, 3], 2)); // Output: 2

// Question 20: Find the Index of a Specific Number in an Array
function findIndex(arr, number) {
  return arr.indexOf(number);
}
console.log(findIndex([10, 20, 30], 20)); // Output: 1

//  Question 21: Sort Array in Ascending Order
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAscending([4, 1, 3])); // Output: [1, 3, 4]

//  Question 22: Convert String to Array
function stringToArray(str) {
  return str.split('');
}
console.log(stringToArray("hello")); // Output: ['h', 'e', 'l', 'l', 'o']

//  Question 23: Convert Array to String
function arrayToString(arr) {
  return arr.join('');
}
console.log(arrayToString(['h', 'e', 'l', 'l', 'o'])); // Output: "hello"

//  Question 24: Get the Length of a String
function getStringLength(str) {
  return str.length;
}
console.log(getStringLength("hello")); // Output: 5

//  Question 25: Convert String to Uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("hello")); // Output: "HELLO"

// Question 26: Convert String to Lowercase
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase("HELLO")); // Output: "hello"

//  Question 27: Check if String Contains a Substring
function containsSubstring(str, sub) {
  return str.includes(sub);
}
console.log(containsSubstring("hello world", "world")); // Output: true

//  Question 28: Remove Whitespace from Start and End of a String
function trimString(str) {
  return str.trim();
}
console.log(trimString("  hello  ")); // Output: "hello"

//  Question 29: Get Character at Specific Index
function getCharAt(str, index) {
  return str.charAt(index);
}
console.log(getCharAt("hello", 1)); // Output: "e"

//  Question 30: Check if String Starts With a Specific Word
function startsWith(str, word) {
  return str.startsWith(word);
}
console.log(startsWith("hello world", "hello")); // Output: true

//  Question 31: Check if String Ends With a Specific Word
function endsWith(str, word) {
  return str.endsWith(word);
}
console.log(endsWith("hello world", "world")); // Output: true

//  Question 32: Extract Substring
function getSubstring(str, start, end) {
  return str.substring(start, end);
}
console.log(getSubstring("hello", 1, 4)); // Output: "ell"

//  Question 33: Countdown from 5 to 1
function countdown() {
  let i = 5;
  let interval = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) clearInterval(interval);
  }, 1000);
}
countdown();

//  Question 34: Generate a Random Number Between 0 and 1
function getRandomNumber() {
  return Math.random();
}
console.log(getRandomNumber());

//  Question 35: Convert Number to String
function numberToString(num) {
  return num.toString();
}
console.log(numberToString(123)); // Output: "123"

//  Question 36: Convert String to Number
function stringToNumber(str) {
  return Number(str);
}
console.log(stringToNumber("123")); // Output: 123

//  Question 37: Get Current Date and Time
function getCurrentDate() {
  return new Date();
}
console.log(getCurrentDate());

//  Question 38: Get the Day of the Week
function getDayName() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return days[today];
}
console.log(getDayName());

//  Question 39: Check if Array Contains a Specific Value
function containsValue(arr, value) {
  return arr.includes(value);
}
console.log(containsValue([1, 2, 3], 2)); // Output: true

//  Question 40: Get the Length of an Array
function getArrayLength(arr) {
  return arr.length;
}
console.log(getArrayLength([1, 2, 3])); // Output: 3

