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
  console.log(cancelled);
} else {
  var num = Number(p);
  if (isNaN(num)) {
    console.log("Please enter a valid number");
  } else {
    if (num > 0) {
      let factors = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          factors++;
        }
      }
      console.log(factors);
    } else {
      console.log("Please enter postive number");
    }
  }
}
