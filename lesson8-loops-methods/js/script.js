const str = "JavaScript is a awesome is language";
let arrayFromString = str.split(" ");
arrayFromString[3] = "cool"; // [JavaScript, is, a, cool, is, language]
console.log(arrayFromString);
const newStr = arrayFromString.join(" ");
console.log(newStr);

console.log(arrayFromString.indexOf("is", 2));

let counter = 0;
for (let i = 0; i < arrayFromString.length; i++) {
  if (arrayFromString[i] === "is") {
    console.log('Було знайдено слово "is", його індекс: ', i);
    counter++;
  }
}

// function customIndexOf(arr, str, fromIndex = 0) {
//   let arrayOfIndexes = [];
//   for (let i = fromIndex; i < arr.length; i++) {
//     if (arr[i] === str) {
//       arrayOfIndexes.push(i);
//     }
//   }
//   if (arrayOfIndexes.length === 0) {
//     return -1;
//   }
//   return arrayOfIndexes;
// }

// console.log(arrayFromString.includes("is"));

const users = ["Amalia", "Pavlo", "Oleksandr", "Oleskii"];

console.log(users);
//Добавляння і видалення з кінця
users.push("Nazariy", "Andriy", "Oleh");
console.log(users);
let deleted = users.pop();
deleted = "Olena";
console.log(deleted);
console.log(users);
//Добавляння і видалення з початку
console.log(users.shift());
console.log(users);
users.unshift("Amalia", "Maksim");
console.log(users);

console.log(users.slice(-2));

console.log(users);

users.splice(1, 3);
console.log(users);

users.splice(1, 3, "Dima", "Serhiy", "Maria");
console.log(users);

const str1 = "Hello, ";
const str2 = "World";

console.log(str1.concat(str2));

const usersList1 = ["Dima", "Serhiy", "Maria "];
const usersList2 = ["Amalia", "Pavlo", "Oleksandr"];

const allUsers = usersList1.concat(usersList2);

console.log(allUsers);
