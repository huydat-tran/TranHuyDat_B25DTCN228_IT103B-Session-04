let fizz = 0;
let buzz = 0;
let fizzBuzz = 0;

let fizzTotal = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    fizzBuzz++;
    console.log(`FizzBuzz`);
  } else if (i % 3 == 0) {
    fizz++;
    fizzTotal += i;
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    buzz++;
    console.log(`Buzz`);
  } else {
    console.log(`${i}`);
  }
}
console.log(`Tổng của tất cả các số in ra Fizz: ${fizzTotal}`);
