console.log("hi");

console.log(x);
var x; // can access before initialization

// console.log(y); // throws err
// let y; // can use only after initialization so it is better to use let instead of var

//sum and concatenation
let a = 10;
let b = 20;
let c = 10;
let d  = "1";
console.log("Sum:" + a+b); //Sum:1020 - addition only happens when there is number at both sides.
console.log("Sum:", a+b); //Sum: 30
console.log(a+b+" is sum"); //30 is sum
//sum of strings will be different it results 101 which is concatination
console.log(c+d, typeof(c+d)); //101 string

//Type coercion - converting a value from one type to another automatically (implicit - done by js engine ).
console.log("1"-1);//0
console.log(true + 1); //2

//Type casting or type conversion
console.log(typeof(String(100)));// string
console.log(Number("js")); // NaN

//destructuring
let [e, ...f] = [1, 2, 3, 4]
console.log(e, f); // 1 [ 2, 3, 4 ]


//Swap

//with var
let i = 10;
let j = 20;
let k;
console.log(i,j); // 10 20
k=i;
i=j;
j=k;
console.log(i,j); // 20 10

// without other var

//add and sub
let m = 10;
let n = 20;
console.log(m, n); // 10, 20
m = m + n;
n = m - n;
m = m - n;
console.log(m, n);

//destructuring
let g=10;
let h=20;
console.log(g, h); // 10 20
[g, h] = [h, g];
console.log(g, h); // 20 10

//math

// Arithematic operarators
a = 12;
b = 22;

console.log(a+b); //34
console.log(a-b);// -10
console.log(a*b);// 264
console.log(b/a); // 1.8333
console.log(Math.floor(b/a)); // 1
console.log(Math.floor(a/b)); // 0
console.log(b%a); // 10 - remainder
console.log(a%b); // 12 

c = 83;
console.log(c%10); //3
console.log(c%100); // 83
console.log(Math.floor(c/10)%10); // 8

//Relational operators - < > <= >= != = == ===

console.log(a>b);// false
console.log(a<b);// true
console.log(10>=10); // true
console.log(10>10) // false
console.log(11 != 10) // true
console.log("10" != 10); //false
console.log("10" !== 10); // true - type
console.log(a=10);// 10
console.log(String(a)==10); // true
console.log(a.toString()===10); //false

//logical operator && ||

console.log(a>b && a<b); // false
console.log(a>b || a<b); // true
console.log(true && "a"); // hi
console.log(false && "hi"); // false
console.log(true || a); //true
console.log(false || a); // 10

/* unary operators
++ increment post - a++ (use and change) pre - ++a(change and use)
-- decrement same
cannot apply unary operators on constant like 10++ */

c=10
a = c++;
console.log(a); //10
d=10;
b = ++d; 
console.log(b); //11
a = 10;
b = ++a;
c = a++;
console.log(a,b,c); // 12, 11, 11
// c= --(d++); // invalid

// Math functions
console.log(Math.round(10.3)); //10
console.log(Math.round(10.5)); //11 (for more than .5 it will be next number)
console.log(Math.floor(10.6)); //10 (anything in . then that number)
console.log(Math.ceil(10.1)); //11 (anything in . then next number)
console.log(Math.ceil(10)); //10
console.log(Math.trunc(18.98)); //18 (just removes decimal part)
console.log(Math.pow(2,5)) // 32 - 2^5
console.log(Math.sqrt(24)); // 4.898979485566356
console.log(Math.cbrt(27)); // 3
console.log(Math.abs(-10)); //10
console.log(Math.max(10, 10.3)); // 10.3
console.log(Math.min(6, 95, 0.8)); // 0.8
console.log(Math.random()); // between 0 to 1
console.log(Math.random()*20) // between 0 to 20
a = 189.39393
console.log(a.toFixed(3)); // 189.394 - returns as string

console.log(Math.floor((Math.random()*9000)+1000)); // generates 4 digit otp - 1000 to 10000 excluding 1000 and 10000

// area of circle
let r = 15;
console.log((2*Math.PI*r));





