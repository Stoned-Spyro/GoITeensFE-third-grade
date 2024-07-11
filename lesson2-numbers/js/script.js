// const a = 3;
// const b = 5;

// console.log("чи a рівне b", a == b); //порівняння
// console.log("чи a не рівне b", a != b); //Не рівні

// const x = true;
// const y = 1;

// console.log("чи x рівне y", x == y); //Не строга рівність
// console.log("чи x не рівне y", x != y);

// console.log("чи x строго рівне y", x === y); //Строга рівність
// console.log("чи x строго не рівне y", x !== y);

// const c = 15;
// const d = 15;

// console.log("Чи c більше d", c > d);
// console.log("Чи c менше d", c < d);

// console.log("Чи c більше-рівне d", c >= d);
// console.log("Чи c менше-рівне d", c <= d);

// const x = 6;
// const y = 3;
// Перевірка на парність
// if (y % 2 === 0) {
//   console.log("число парне");
// } else {
//   console.log("число не парне");
// }

// console.log(2 ** 10);
// const num = 10;
// console.log(Math.sqrt(10));

// const str = "15px";
// console.log(str, typeof str);
// const num = Number(str);
// console.log(num, typeof num);

// const str = "15.23px25";
// console.log(str, typeof str);
// const num = Number.parseInt(str);
// console.log(num, typeof num);
// const num2 = Number.parseFloat(str);
// console.log(num2, typeof num2);

// const num3 = Number(str);
// console.log(Number.isNaN(num3)); //true
// console.log(Number.isNaN(num)); //false
// const x = 0.1 + 0.2;

// console.log(x === 0.3);
// console.log(x);

// console.log(0.1 * 10 + 0.2 * 10 === 0.3 * 10);

// console.log(Math.sqrt(9));
// console.log(Math.pow(2, 6));

// console.log(Math.max(-10, 4, 2, 1, -6));
// console.log(Math.min(10, 4, 2, 1, -6));

// const x = 10.23;
// const y = 12.75;
// const z = 10.5;

// console.log(Math.floor(x));
// console.log(Math.floor(y));
// console.log(Math.floor(z));

// console.log(Math.ceil(x));
// console.log(Math.ceil(y));
// console.log(Math.ceil(z));

// console.log(Math.round(x));
// console.log(Math.round(y));
// console.log(Math.round(z));

// const x = 2.12321313;

// console.log(x);

// console.log(x.toFixed(2));

const x = 2.5;
const y = 2.1;
const z = 2;

console.log(Number(x.toFixed(0)));
console.log(Number(y.toFixed(2)));
console.log(Number(z.toFixed(2)));

const cat1 = 3;
const cat2 = 4;

const sumOfCatExp = Math.pow(cat1,2) + Math.pow(cat2,2);

const gip = Math.sqrt(sumOfCatExp);

console.log(gip);
