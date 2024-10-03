// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Barsik";

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.hasOwnProperty("legs"));
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.legs);
// console.log(dog.name);

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key);
// }
// console.log("----------------------------------------------------------------");
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// const dogKeys = Object.keys(dog);
// console.log(dogKeys);

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

class User {
  #name;
  #email;
  #role;

  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
    READER: "reader",
  };
  static #listOfEmails = [];

  static #isEmailTaken(email) {
    return this.#listOfEmails.includes(email);
  }

  static getUsedEmails() {
    return this.#listOfEmails;
  }

  constructor({ name, email, role }) {
    if (User.#isEmailTaken(email))
      throw new Error("User with such email already exists");
    this.#name = name;
    this.#email = email;
    this.#role = role;
    User.#listOfEmails.push(email);
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    this.#role = role;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
      throw new Error("Incorect email");
    this.#email = email;
  }
  set name(name) {
    if (name.length <= 2) throw new Error("Impossible name");
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

// const nazar = new User('Nazar', 'nazar@gmail.com');
// console.log(nazar);

// const pavlo = new User("Pavlo", "pavlo@gmail.com");
// console.log(pavlo);

// const oleksandr = new User("Oleksandr", "oleksandr@gmail.com");

// console.log(oleksandr);
// nazar.email = "nazar2@gmail.com";
// console.log(nazar);

const nazar = new User({
  email: "nazar@gmail.com",
  name: "Nazar",
  role: User.Roles.ADMIN,
});
console.log(nazar);

const pavlo = new User({
  name: "Pavlo",
  email: "pavlo@gmail.com",
  role: User.Roles.READER,
});
pavlo.email = "dsadsad@gmail.com";
console.log(pavlo);
console.log(pavlo.email);

const oleksandr = new User({
  name: "Oleksandr",
  email: "oleksandr@gmail.com",
  role: User.Roles.EDITOR,
});
console.log(oleksandr);

console.log(oleksandr.name);
console.log(oleksandr.email);

// nazar.setName("Oleksiy");
// const oleksii = new User({
//   name: "Oleksii",
//   email: "oleksandr@gmail.com",
//   role: User.Roles.EDITOR,
// });
// console.log(User.getUsedEmails());

class Parent {
  #age;
  name;
  surname;
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.#age = age;
  }

  toString() {
    return `Це людина з ім'я: ${this.name} та прізвищем ${this.surname}, вік: ${
      this.#age
    }`;
  }
}

const parent = new Parent("Oleksii", "Slavych", 24);

console.log(parent.toString());

class Child extends Parent {
  address;
  constructor(name, surname, age, address) {
    super(name, surname, age);
    this.address = address;
  }
  test() {
    console.log("test");
  }
}

const child = new Child("Pavlo", "Pysarenko", 17, "Lviv");
console.log(parent);
console.log(child);
console.log(child.toString());
child.test();
parent.test();