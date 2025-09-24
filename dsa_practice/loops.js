// loops to reduce the lines of code
//for while do-while

//for (start; end; change){}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

//20-10  reverse loop
for (i = 20; i > 9; i--) {
  console.log(i);
}

//1-10
for (i = 1; i <= 10; i++) {
  console.log(i);
}
console.log(i); // i incremented to 11 and gets fail
// i is initialized, then condition is checked, then block executes, then increment happens again from condition executes in loop,

// for (i = 0; i < 10; ) {
//   console.log(i);
// }
// for(i=0;;){}
// for(;;){console.log("hello")}
// all cases are valid but runs for infinite times like i will be 0 always and since 0 is less than 10 it gets keeps on running

//sum of n natural numbers
let sum = 0;
// let n = Number(prompt("Enter number:"));
let n = 100;
for (let i = 1; i < n + 1; i++) {
  sum = sum + i;
}
console.log("sum:" + sum);

//factorial fact*i and initialize fact=1

//factors of a number
var p = prompt("Ener your number");
if (p === null) {
  console.log("cancelled");
} else {
  var num = Number(p);
  if (isNaN(num)) {
    console.log("Please enter a valid number");
  } else {
    if (num > 0) {
      let factors = 1; // for num itself
      for (let i = 1; i <= Math.floor(num / 2); i++) {
        // numbers after n/2 will never be factors.
        if (num % i === 0) {
          factors++;
          console.log(i);
        }
      }
      console.log(num);
      console.log(factors);
    } else {
      console.log("Please enter postive number");
    }
  }
}

//prime - no factors
let isPrime = true;
for (let i = 2; i <= Math.floor(num / 2); i++) {
  // numbers after n/2 will never be factors.
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

function isPrimeNumber(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
} // another optimised solution

// Break and continue
// break - breaks the loop and goes out of loop
// continue - skip the loop until next iteration

for (let i = 1; i < 20; i++) {
  if (i === 11) break;
  else console.log(i);
} // prints until 10

for (let i = 1; i < 20; i++) {
  if (i === 11) continue;
  else console.log(i);
} // prints until 19 except 11 i.e, skips 11

//while loop
// start
// while(end/condition){
//   code
//   change
// } - using while loop when iterations are not known

// var input = prompt("enter anything(write exit for close)");

// while (input !== "exit") {
//   input = prompt("enter anything(write exit for close)");
// }

//sum of digits using while

let d = 3452;
let sd = 0;
while (d > 0) {
  sd += d % 10;
  d = Math.floor(d / 10);
}
console.log(sd);

//reverse of a number
d = 3452;
let rev = 0;
while (d > 0) {
  let rem = d % 10;
  rev = rev * 10 + rem;
  d = Math.floor(d / 10);
}
console.log(rev);

//strong number
let sn = 0;
d = 40585;
let a = d;
while (d > 0) {
  let rem = d % 10;
  let factorial = 1;
  for (i = 1; i <= rem; i++) {
    factorial = factorial * i;
  }
  sn += factorial;
  d = Math.floor(d / 10);
}
if (sn === a) {
  console.log("is strong number");
} else {
  console.log("is not strong number");
}

//do while - exit control
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

//guess the number
let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;
while (guess !== random) {
  guess = Number(prompt("Guess the number:"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("try 1-100");
    continue;
  }
  if (guess > random) {
    console.log("high");
  } else if (guess < random) {
    console.log("low");
  } else {
    console.log("Congrats", random);
  }
}
