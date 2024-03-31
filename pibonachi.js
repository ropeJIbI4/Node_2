
const PI = Math.PI;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return pibonacci(n - 1) * PI + pibonacci(n - 2) * PI;
}
console.log(pibonacci(randomNumber(0, 10)));