// const a = "";
// const b = "MyName";

// if (a) {
//   console.log("Умова а правдива");
// }
// if (b) {
//   console.log("Умова b правдива");
// }

// let user;

// if (!user) {
//   console.log(`Привіт, ${user} 1`);
// }

// user = "Андрій";

// if (user) {
//   console.log(`Привіт, ${user} 2`);
// }

// const a = "fda";
// const b = null;
// const c = true;
// const d = "Hello";
// const e = 12;

// // //console.log(Boolean(a && b && c && d && e > 10));

// if (a && b && c && d && e > 10) {
//   console.log("І умова істинна");
// }

// console.log(a || b || c || d || e);

// if (a || b || d || c || e) {
//   console.log("Або умова істинна");
// }

// a && b && console.log("Привіт 1");
// c && console.log("Привіт 2");

// const temp = a || d;

// console.log(temp);

// const t = true;
// const f = false;
// console.log(`!t = ${!t}`);
// console.log(`!f = ${!f}`);

// let user;

// if (!user) {
//   alert("Будь ласка, авторизуйтесь");
// }

// user = "Андрій";

// if (user) {
//   alert(`Привітю, ${user}`);
// }

const price = 3500;
let toPay;

// if (price >= 100 && price < 1000) {
//   toPay = price * 0.98;
// } else if (price >= 1000 && price < 3000) {
//   toPay = price * 0.9;
// } else if (price >= 3000) {
//   toPay = price * 0.7;
// } else {
//   toPay = price;
// }

// if (price >= 3000) {
//   toPay = price * 0.7;
// } else if (price >= 1000) {
//   toPay = price * 0.9;
// } else if (price >= 100) {
//   toPay = price * 0.98;
// } else {
//   toPay = price;
// }

// console.log(`Користувач повинен заплатити ${toPay}`);

// const x = 10;
// const y = 15;

// let biggerNumber;

// // if (x > y) {
// //   biggerNumber = x;
// //   console.log("x більше y");
// // } else {
// //   biggerNumber = y;
// //   console.log("y більше x");
// // }

// biggerNumber = x > y ? x : y;

// console.log(biggerNumber);
// console.log(x > y ? "x більше y" : "y більше рівне x");

const x1 = 10;
const x2 = 35;

const y1 = 25;
const y2 = 5;

// let biggerPair;

// biggerPair = x1 + x2 >= y1 + y2 ? x1 + x2 : y1 + y2;
// console.log(biggerPair);

console.log(x1 >= 10 && x2 <=30 ? 'x1 більше рівне 10, x2 менше рівне 30' : 'умова не виконалась')

console.log(x1 >= 10 && x1 <=30 && x2 >= 10 || x2 <=30 ? 'ікси лежать в проміжку від 10 до 30 включно' : 'ікси не лежать в проміжку від 10 до 30 включно')

const z = 10;

console.log(Boolean(z));
console.log(!!z)