let arr1 = [1, 13.12, "Oleksiy", 6, 7, true, false];
let arr2 = [1, 10, 20, 15, 6, 7];
// console.log(arr1);
// arr1.length = 3;
// console.log(arr1);
// console.log(arr1[2]);

// arr1[2] = arr1[4];
// console.log(arr1);

// for (let i = 0; i < arr1.length; i++) {
//   console.log(`елемент масиву за індексов: ${i} = ${arr1[i]}`);
// }

// for (let element of arr1) {
//   // console.log("елемент масиву:", element);
//   element = element + "abc";
//   console.log(element);
// }

// let sum = 0;

// for (let number of arr2) {
//   sum += number;
//   number += 10;
// }

// for (let index = 0; index < arr2.length; index++) {
//   let number = arr2[index];
//   number += 10;
//   arr2[index] = number;
//   console.log(number);
// }
// console.log(arr2);

// console.log(arr1);
// console.log("Масив: ", arr2);
// console.log("cума: ", sum);

// for(let i = 0; i < arr2.length; i++){
//   arr2[i] *= 3
// }

// console.log('новий масив чисел', arr2)

const users = [
  "Oleksii",
  "Amalia",
  "Oleksandr",
  "Denis",
  "Pavlo",
  "Andriy",
  "Amalia",
  "Amalia",
  "Nazariy",
];

function search() {
  const userInput = document.getElementById("user-input").value;
  let message = `Користувача з іменем ${userInput} немає в базі даних`;
  // for (const user of users) {
  //   if (user === userInput) {
  //     message = `Користувач з іменем ${userInput} існує в базі даних!`;
  //     console.log(user);
  //     break;
  //   } else {
  //     message = `Користувача з іменем ${userInput} немає в базі даних`;
  //   }
  // }
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i] === userInput) {
      message = `Користувач з іменем ${userInput} існує в базі даних!`;
      count++;
      console.log(users[i]);
    }
    //console.log(users[i]);
  }
  console.log(message);
  console.log("Кілість користувачів з таким іменем:", count);
}

// const ticTacToe = [
//   ["0", "0", "X"],
//   ["0", "X", "0"],
//   ["X", "0", "0"],
// ];

const matrix = [
  [15, 2, 3],
  [10, 8, 7],
  [11, 19, 5],
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) { 
  console.log("Рядок матриці: ", matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Значення рядка [${i}][${j}] = ${matrix[i][j]}`);
    sum += matrix[i][j];
  }
}

console.log(sum);
