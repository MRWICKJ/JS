let num = 7;
let isPrime = true;

if (num < 2) {
  isPrime = false;
}

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
