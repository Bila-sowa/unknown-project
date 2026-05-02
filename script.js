var PL = "Programming Language:";
var PLs = ["Python", "JavaScript", "C++","C#","Html","CSS","C","Typescript"];
console.log(PL);
console.log(PLs);
console.warn("This is beta version of the website, so there may be some bugs. If you find any, please report them to us.");
console.error("This website stopped working, because of some errors. Please try again later.");

// -------------------------------------------------------------------------------------------------------------------------------

// var num1 = 15;
// var num2 = 7;
// num1 *= 10;

// var res = num1 - num2;

// // console.log("Result:" + res);
// console.log("Result: " + (num1 - num2));
// console.log("Result: " + (num1 + num2));
// console.log("Result: " + (num1 * num2));
// console.log("Result: " + (num1 / num2));
// console.log("Result: " + (num1 % num2));


// var num3 = 5;
// var num4 = ("10");
// console.log(num3 + Number(num4));



Math.random();
console.log("Random Number: " + Math.random());


var pi = Math.PI;
console.log("Number pi: " + pi);

var e = Math.E;
console.log("Number E: " + e);

var min = Math.min(5, 10, 15);
console.log("Minimum: " + min);

var max = Math.max(5, 10, 15);
console.log("Maximum: " + max);

var infinity = Infinity;
console.log("Infinity: " + infinity);


// var number1 = 14;

// var number2 = 3;

// if (number1 == 14) {
//     console.log("Number 1 is equal to 14");
// }
// // else if = elif(python)
// else if (number1 > 14) {
//     console.log("Number 1 is greater than 14");
// }
// else {
//     console.log("Number 1 is less than 14");
// }

// age = input("Please enter your age: ");
var age;
var is18yearsold;



if (age >= 18) {
    is18yearsold = true;
}
else {
    is18yearsold = false;
}

if (is18yearsold || age >= 18) {
    console.log("You are 18 years old or older, you can enter the website.");
}
else {
    console.log("You are not 18 years old, you cannot enter the website.");
}

word = "Hello";

switch (word) {
    case "Hello":
        console.log("You said Hello");
        break;
    case "Hi":
        console.log("You said Hi");
        break;
    case "Hey":
        console.log("You said Hey");
        break;
    case "word":
        console.log("You said word");
        break;
    default:
        console.log("You said something else");
        break;
}