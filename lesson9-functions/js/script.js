function greeting() {
  console.log("Hello world");
}
// greeting();

const greeting2 = function () {
  console.log("Hello world");
};

greeting2();

function sum(a = 0, b = 0, c = 0) {
  const result = a + b + c;
  return result;
  const result2 = a * b * c;
  console.log(result2);
}

const funcResult = sum(15, 12, 8);
console.log(funcResult);

function checkUserRole(role) {
  let result;
  if (role === "admin") {
    result = "У вас всі права!";
    return result;
  }
  if (role === "moderator") {
    result = "Ви можете міняти контент";
    return result;
  }
  if (role === "user") {
    result = "Ви можете переглядати вміст сайду";
    return result;
  }

  return "Невідомий користувач";
  // if (role === "admin") {
  //   console.log("У вас всі права!");
  // } else if (role === "moderator") {
  //   console.log("Ви можете міняти контент");
  // } else if (role === "user") {
  //   console.log("Ви можете переглядати вміст сайду");
  // } else {
  //   console.log("Невідома роль");
  // }
}

console.log(checkUserRole("moderator"));

console.log(sum(15, undefined, 25));

hoistFunction();

// console.log(test);

// const test = 5;

function hoistFunction() {
  console.log("Я була викликана");
}

testFunc();

const testFunc = function () {
  console.log("Я також була викликаною");
};

const sum2 = function (b, a, ...args) {
  let result = 0;
  args.splice(0, 0, 14, 51, 61, 13);
  for (const argument of args) {
    result += argument;
  }
  console.log(a, b);
  return result;
};

const log = function (...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`Елемент ${i + 1}: ${args[i]}`);
  }
};

log(15, true, "Олексій", "Микола");
const array = [15, true, "Олексій", "Микола"];
log(...array);

function some(m, x = 5, y = 10, z = 15) {
  y = undefined;
  console.log(" m", m, "x", x, "y", y, "z", z);
  return x + y + z + m;
}

console.log(some(3, 7, undefined, 5));
