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
