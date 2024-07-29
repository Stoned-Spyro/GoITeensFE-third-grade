// let i = 1;

// while (i <= 10) {
//   console.log(`Число: ${i}`);
//   i++;
// }

// const pass = "abcd";
// let userInput;
// do {
//   userInput = prompt("Введіть пароль");
// } while (userInput !== pass);

// do {
//   console.log("hello");
// } while (false);

let maxNumber = 20;

// for (let i = 1; i <= 10; i += 2) {
//   console.log(`Число: ${i}`);
// }

// for (i = 0; i <= maxNumber; i++) {
//   if (i % 2 === 0) {
//     console.log("число є парним", i);
//   }
// }

function logLetters() {
  const userInput = document.getElementById("user-input").value;
  console.log(userInput);
  for (let i = 0; i < userInput.length; i++) {
    console.log(userInput[i]);
  }
}

const number = 15;

for (let i = 0; i <= number; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Число не парне", i);
}

for (let i = 0; i <= number; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

let totalSalary = 0;
let i = 0;
const salaryArr = [250, 180, 2050, 5432, 12, 4141];

// while (i < salaryArr.length) {
//   totalSalary += salaryArr[i];
//   console.log(totalSalary);
//   i++;
// }
// console.log(totalSalary);

for (let j = 1; j <= 10; j++) {
  console.log(`7 * ${j} = ${7 * j}`);
}

while (i * 2 <= 20) {
  console.log(i);
  i++;
}

const min = 0;
const max = 100;
let sum = 0;
let k = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(sum);
//   }
//   if (sum >= 1700) {
//     break;
//   }
// }

// while (k <= max && sum <= 1700) {
//   if (k % 2 === 0) {
//     sum += k;
//     console.log(sum);
//   }
//   k++;
// }

let credits = 3321;
const pricePerPazzles = 150;

do {
  const userInp = Number(prompt("введіть кількість"));
  if (credits - pricePerPazzles * userInp < 0) {
    console.log("У вас недостатньо коштів");
    break;
  }
  credits -= pricePerPazzles * userInp;
  console.log("залишилось:", credits, "кредитів");
} while (credits >= 0);

console.log(credits);

for(;;){
  
}