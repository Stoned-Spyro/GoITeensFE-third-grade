const repeat = function (n, callback) {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
};
const createIterationMessage = function (optionMessage = "") {
  const message = optionMessage;
  console.log(message);
};

const prettyLogValue = function (optionMessage = "") {
  console.log(`I am pretty message, iteration number \t: ${optionMessage}`);
};

const pow = function (num = 0) {
  console.log(2 ** num);
};

repeat(10, createIterationMessage);
console.log("-------------------------------------------------");
repeat(15, prettyLogValue);
console.log("--------------------------------------------------");
repeat(8, pow);
const filter = function (array, test) {
  let resultArray = [];
  for (const el of array) {
    const isPassed = test(el);

    if (isPassed) {
      resultArray.push(el);
    }
  }
  return resultArray;
};

// const filterNamesWithLengthMoreThenFour = function (value) {
//   return value.length > 4;
// };

// const filterNumberHigherThenTen = function (value) {

//   return value > 10;
// };

// const filterNumberEvenNumbers = function (value) {
//   return value % 2 === 0;
// };

const filterNamesWithLengthMoreThenFour = (value) => {
  return value.length > 4;
};

const namesArray = ["Amalia", "Oleksandr", "Oleh", "Pavlo", "Nazariy"];
const numbersArray = [15, 25, 100, 8, 19, 3, 90];
console.log(filterNamesWithLengthMoreThenFour("Oleh"));
const filteredNames = filter(namesArray, filterNamesWithLengthMoreThenFour);
console.log(filteredNames);
const filteredNumbers = filter(numbersArray, (el) => {
  return el > 10;
});
console.log(filteredNumbers);
const filteredEvenNumbers = filter(numbersArray, (el) => el % 2 === 0);
console.log(filteredEvenNumbers);
// const test = function() {
//   console.log("hello world");
// }

//let testVar = 10;
// console.log(innerVar);

// for (let index = 0; index < 10; index++) {
//   var innerVar = 10;
// }
// const test = () => {
//   const innerTest = function () {
//     console.log("hello from inner");
//   };
//   innerTest();
// };

// test();

const logger = (name) => {
  console.log("Hello,", name);
};

logger("Oleksii");
console.log(logger);

const numberGenerator = () => {
  const result = Math.floor(Math.random() * 10 + 1);
  const message = "Випадкове число: " + result;
  return message;
};

const myRandomNumber = numberGenerator();
console.log(myRandomNumber);

// const funcWithParameters = (...args) => {
//   for (const arg of args) {
//     console.log(arg);
//   }
// };

const funcWithParameters = function (...args) {
  let result = 0;
  for (const arg of arguments) {
    result += arg;
  }
  return result;
};

const arr = [15, 2, 4, 8];

// for (let num of arr) {
//   num = num * 2;
//   console.log(num);
// }

console.log(arr);
//console.log(funcWithParameters(10, 15, 25, 40, 100, 7, 2, 1));

// const stack = () => {
//   function innerStack() {
//     console.log(unknown);
//   }
//   innerStack();
// };

// stack();

const bar = function () {
  console.log("bar");
};

const baz = function () {
  console.log("baz");
};

const foo = function () {
  console.log("foo");
  bar();
  baz();
  console.log("End");
};
const varti = 10;
foo();
