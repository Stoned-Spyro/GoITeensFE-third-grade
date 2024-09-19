// let sum = 0;

// for(let i = 0; i < 10; i++) {
//     sum += i
// }

// console.log(sum)

const array = [-1, -2, -3, -10, -4, -5, -5, -6];
const newArr = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] !== 4) {
//     newArr.push(array[i]);
//   }
// }
// // console.log(array);
// console.log(newArr);

const dirtyFunction = (arr, multiplier) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;
  }
};
const clearFunction = (arr, multiplier) => {
  const tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    const res = arr[i] * multiplier;
    tempArray.push(res);
  }
  return tempArray;
};
console.log(array);
//dirtyFunction(array, 4);
const newArray = clearFunction(array, 4);

const filteredArray = array.filter((num) => num >= 2 && num < 5);
console.log(filteredArray);

const resultArray = array.map((e) => e * 4);

const users = [
  { email: "test@test.com", password: "12345", isAdmin: false },
  { email: "john@test.com", password: "42141", isAdmin: false },
  { email: "amalia@gmail.com", password: "312321424", isAdmin: true },
  { email: "sasha@ukr.net", password: "3214214124", isAdmin: true },
  { email: "nazar@gmail.com", password: "qwerty", isAdmin: true },
];

const usersEmails = users.map((user, index) => {
  return {
    id: index + 1,
    ...user,
  };
});

const admins = users.filter((user) => user.isAdmin);
console.log(admins);
console.log(usersEmails);

const firstAdmin = users.find((user) => user.isAdmin);

const haveNegativeNumber = array.some((element) => element < 0);
console.log("have negatives?", haveNegativeNumber);
const isNegativesArray = array.every((element) => element < 0);
console.log(firstAdmin);
console.log("are all elements negative?", isNegativesArray);
// let sum = 0;

// function sumNumber(num) {
//     return sum += num
// }

// console.log(sum);
