// 2. Check if a Number is Odd or Even
function assignSection(ticketNumber) {
  if (ticketNumber % 2 === 0) {
    return "Section A";
  } else {
    return "Section B";
  }
}
console.log(assignSection(15));