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

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  console.log(key);
}
console.log('----------------------------------------------------------------')
for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;
  console.log(key);
}

const dogKeys = Object.keys(dog);
console.log(dogKeys);
