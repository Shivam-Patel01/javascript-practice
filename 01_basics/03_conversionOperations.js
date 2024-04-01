let score = 33;
score = "33abc";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

score = null;
let valueInNumber2 = Number(score);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

/*
"33" => 33
"33abc" => NaN type of NaN is also number
true => 1
*/

let myNum = 1;
let booleanMyNum = Boolean(myNum);
// console.log(booleanMyNum);

let myStr = "";
let booleanMyStr = Boolean(myStr);
// console.log(booleanMyStr);

// 1 => true; 0 => false;
// "" => false
// "shiv" => true

let myNumber = 33;
let myStrNumber = String(myNumber);
// console.log(myStrNumber);
// console.log(typeof myStrNumber);


// *************************** Operations **********************
let positiveValue = 3;
let negativeValue = -positiveValue;
// console.log(negativeValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Shivam ";
let str2 = "Patel";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3+4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let x2 = 3;
const y2 = x2++;

console.log(`x:${x2}, y:${y2}`);

let preGameCounter = 100;
++preGameCounter;
// console.log(preGameCounter);

// link for ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment