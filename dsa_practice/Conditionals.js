// else comes only after if or if written gives error
const check = (a, b) => {
  if (a > b) {
    console.log(a + " is greater than " + b);
  } else {
    console.log(a + " is lesser than " + b);
  }
};

check(10, 12); //10 is lesser than 12
check(11, 9); // 11 is greater than 9

let age = Number(prompt("what is your age?"));

// valid age
if (isNaN(age)) {
  console.log("wrong input");
} else if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("You cannot vote");
}

/*Amount Discount
0-5000 0%
5001-7000 5%
7001-9000 10%
more than 9000 20%
*/

let amount = Number(prompt("Enter the amount to get discount amount"));
let discount;

if (amount > 0 && amount <= 5000) {
  discount = 0;
  console.log("Your discount is " + 0);
} else if (amount > 5000 && amount <= 7000) {
  discount = Math.floor((amount * 5) / 100);
  console.log("Your discount is " + discount);
} else if (amount > 7000 && amount <= 9000) {
  discount = Math.floor((amount * 10) / 100);
  console.log("Your discount is ", discount);
} else if (amount > 9000) {
  discount = Math.floor((amount * 20) / 100);
  console.log("Your discount is ", discount);
} else {
  console.log("Wrong input");
}

/* calculate electicity bill
Unit       price
upto 100   Rs 4.2/unit
101-200    Rs 6/unit
201-400    Rs 8/unit23
morethan 400 13/unit
*/

let units = Number(prompt("Enter number of units:"));
amount = 0;
if (units <= 100) {
  amount = units * 4;
  console.log("Pay " + amount);
} else if (units > 100 && units <= 200) {
  amount = (units - 100) * 6 + 100 * 4;
  console.log("Pay " + amount);
} else if (units > 200 && units <= 400) {
  amount = (units - 200) * 8 + 100 * 6 + 100 * 4;
  console.log("Pay " + amount);
} else if (units > 400) {
  amount = (units - 400) * 13 + 200 * 8 + 100 * 6 + 100 * 4;
  console.log("Pay " + amount);
} else {
  console.log("Enter correct input");
}

// Ternary operator "?:" = condition ? true code : false code
12 > 13 ? console.log("Hi") : console.log("Hello"); // Hello

// Nested ternary operator
let num = 0;
console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero"); // zero

//Switch case handling
//switch cant handle float value because its precision issues
//also used for multiple conditions same execution
let day = 2; // Tuesday

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid");
}

switch (
  true //Hello
) {
  case 19 > 6:
    console.log("Hello");
    break;
  case 10 > 5:
    console.log("hi");
    break;
  default:
    console.log("nothing");
}

num = 0.2 + 0.3; //b
num = 0.1 + 0.2; //c beacuse here num = 0.30000000000000004
num = Number(num.toFixed(1)); // a
console.log("num:", num);
switch (num) {
  case 0.3:
    console.log("a");
    break;
  case 0.5:
    console.log("b");
    break;
  default:
    console.log("c");
}
