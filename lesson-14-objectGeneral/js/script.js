const name = "Oleksii";

const animal = {
  name: "Barsik",
  type: "Dog",
  breed: "Pug",
  age: 2,
  gender: "male",
  legs: 3,
  compareDog(dog2) {
    return (
      this.name === dog2.name &&
      this.type === dog2.type &&
      this.breed === dog2.breed &&
      this.age === dog2.age &&
      this.gender === dog2.gender
    );
  },
};

const animal2 = { ...animal, name: "Luna" };

const { name: dogName, type, breed, legs = 4 } = animal;

console.log(dogName);
console.log(type);
console.log(breed);
console.log(legs);

let a = 10;
let b = a;
b = 15;
// console.log(a, b);

// console.log(animal);
// console.log(animal2);
// animal.birthDay();
// animal2.birthDay();
// console.log(animal2);
// console.log(animal);

console.log(animal === animal2);
console.log(animal.compareDog(animal2));

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

const person = {
  name: "Amalia",
  age: 14,
  surname: "Savchenko",
  address: {
    city: "Vyshgorod",
    street: "Hrushevskogo",
    houseNumber: 25,
  },
};

const {
  name: amaliasName,
  age,
  surname,
  address: { city, street, houseNumber },
} = person;

console.log(amaliasName, age, surname, city, street, houseNumber);
