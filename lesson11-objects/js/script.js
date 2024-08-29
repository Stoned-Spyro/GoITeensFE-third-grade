const nazar = {
  email: "nazar@gmail.com",
  age: 16,
  gender: "male",
  surname: "Руденко",
};

console.log(nazar);
console.log(nazar.job);
console.log(nazar);

delete nazar.surname;

nazar.age = 17;

console.log(nazar);

const city = "Lviv";

const hotel = {
  name: "Hotel Lviv",
  stars: 4,
  capacity: 300,
  city,
  greetingES5: function () {
    console.log("welcome");
  },
  greetingES6() {
    console.log("welcome");
  },
  getPrice() {
    return 150 * this.stars;
  },
  setPrice(price) {
    this.price = price;
  },
};

const property = "email";

const getKey = () => {
  return "age";
};
const person = {
  name: "Petro",
  birthDay() {
    this.age++;
    console.log(this.name, "celebrate birthday, his age now is", this.age);
  },
  [property]: "amalia@gmail.com",
  [getKey()]: 15,
};

console.log(person);

hotel.greetingES5();
hotel.greetingES6();
console.log(hotel.getPrice());
hotel.stars = 3;
console.log(hotel.getPrice());
const price = 300;
hotel.setPrice(price);
console.log(hotel);

const grandHotel = {
  ...hotel,
  capacity: 700,
  freeWifi: true,
};

grandHotel.stars = 5;
console.log(hotel);
console.log(grandHotel);
console.log(grandHotel.getPrice());

const students = [
  { name: "Amalia", age: "15", grade: "100" },
  { name: "Petro", age: "15", grade: "51" },
  { name: "Pavlo", age: "15", grade: "95" },
  { name: "Oleh", age: "15", grade: "60" },
  { name: "Andriy", age: "15", grade: "75" },
];

const getAverageGrade = (group) => {
  let sum = 0;
  for (const student of group) {
    sum += Number(student.grade);
  }
  return sum / group.length;
};

console.log(getAverageGrade(students));
person.birthDay();
person.birthDay();
person.birthDay();
person.birthDay();
person.birthDay();

const book = {
  title: "the clockwerk orange",
  author: "Entony Berdshesk",
  year: 1970,
  genre: "triller",
  getBookData() {
    console.log(
      `book title is: ${this.title},\nbook author is: ${this.author}, \nbook release year is: ${this.year}, \tbook genre is: ${this.genre} `
    );
  },
};

book.getBookData();
