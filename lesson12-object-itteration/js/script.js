const feedbacks = {
  good: 7,
  neutral: 5,
  negative: 2,
  user: "John",
};

const filteredFeedbacks = { ...feedbacks };

console.log(filteredFeedbacks === feedbacks);

let sumOfFeedbacks = 0;

for (const key in filteredFeedbacks) {
  console.log("Key:", key);
  console.log("Value:", filteredFeedbacks[key]);
  sumOfFeedbacks += filteredFeedbacks[key];
}

console.log(`We have ${sumOfFeedbacks} feedbacks in total`);

const keys = Object.keys(feedbacks);
console.log(keys);
const values = Object.values(feedbacks);
console.log(values);
const entries = Object.entries(feedbacks);
console.log(entries);

for (const val of values) {
  console.log(val);
}

const users = ["Amalia", "Nazariy", "Pavlo", "Oleksandr"];
const newUsers = [...users];
newUsers.push("Oleksii");

console.log(users);
console.log(newUsers);

const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];
const completeHouses = [...houses, "Targarien"];
console.log(houses);
console.log(completeHouses);

const fisrtBatch = ["Arryn", "Frey", "Greyjoy"];
const secondBatch = ["Stark", "Lannister", "Tyrell"];

const competed = [...fisrtBatch, ...secondBatch];
console.log(competed);

const newHouses = [...houses.slice(0, 4), "New House", ...houses.slice(5)];

console.log(newHouses);

const a = { x: 1, y: 2, j: { h: 3, g: 8 } };
const b = { x: 0, z: 5, j: { i: 2, k: 9 } };

const c = Object.assign({}, a, b);

console.log(c);

const c2 = { ...a, ...b };

console.log(c2);

const user = {
  email: "test@test.com",
  name: "JOhn",
  password: "pass",
};

const password = "pass2";

const newUser = {
  ...user,
  password,
  surname: "Doe",
};

console.log("user", user);
console.log("user2", newUser);

const lion = { legs: 4, hasTail: true };
const eagle = { canFly: true, goodVision: true };

const chimera = {
  ...lion,
  ...eagle,
};

console.log(chimera);
let testObj2 = {
  test2: "test2",
};
const testFunc = (a) => {
  a = testObj2;
};

let testVar = 5;
let testObj = {
  test: "test",
};

testFunc(testObj);
console.log(testObj);

let baseA = 5;
let baseB = baseA;

console.log("a: ", baseA);
console.log("b: ", baseB);

baseA = 10;

console.log("a: ", baseA);
console.log("b: ", baseB);

const objA = ["Ajax"];
const objB = objA;

console.log("a: ", objA);
console.log("b: ", objB);

objA.push("Poly");

console.log("a: ", objA);
console.log("b: ", objB);

objB.push("Mango");

console.log("a: ", objA);
console.log("b: ", objB);

const arr = [4, 51, 5, 2, 75, 3, 41];

console.log(Math.min(...arr));
