 //4. Palindrome Check
function isPalindrome(text) {
  let reversed = text.split("").reverse().join("");
  return text === reversed;
}
console.log(isPalindrome("madam"));