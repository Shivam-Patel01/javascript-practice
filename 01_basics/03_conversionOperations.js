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
console.log(myStrNumber);
console.log(typeof myStrNumber);