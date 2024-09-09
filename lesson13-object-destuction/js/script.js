const user = {
  login: "test",
  email: "test@test.com",
  name: "John",
  password: "pass",
  address: {
    city: "Lviv",
    street: "Tarasa Shevchenka",
    houseNumber: 20,
  },
};

const {
  login,
  email,
  name: firstName,
  password,
  surname: lastName = "Doe",
  address: { city, street, houseNumber: house, osbb = false },
} = user;

console.log(login, firstName, lastName);
console.log(email, password);
console.log(user);
console.log(house);
console.log(street);
console.log(osbb);

const color = [138, 52, 89, 0.1];

let red, green, blue;

// [red, green, blue, alpha = 0.5] = color;

// [red, ...rest] = color;

[, green, blue] = color;

// const [red, green, blue] = color;

// console.log("our color has", red, "red");
// console.log(rest);
console.log("our color has", green, "green");
console.log("our color has", blue, "blue");
// console.log("alpha", alpha);

const etr = Object.entries(user);
console.log(etr);
const keys = [];
const values = [];
for (const prop of etr) {
  const [key, value] = prop;
  keys.push(key);
  values.push(value);
}

console.log(keys);
console.log(values);
console.log(user);
