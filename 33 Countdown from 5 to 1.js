function countdown() {
  let i = 5;
  let interval = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) clearInterval(interval);
  }, 1000);
}
countdown();