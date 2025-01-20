
const menuData = {
  title: "Our products",
  items: [
    {
      price: 30,
      name: "Apple",
      amount: 5,
    },
    {
      price: 45,
      name: "Orange",
      amount: 2,
    },
    {
      price: 25,
      name: "watermellon",
      amount: 1,
    },
    {
      price: 5,
      name: "cucumber",
      amount: 40,
    },
    {
      price: 100,
      name: "Pineapple",
      amount: 2,
    },
  ],
};

const source = document.getElementById("main-template").innerHTML.trim();
const template = Handlebars.compile(source);

const markup = template(menuData);

// console.log(markup);

const container = document.querySelector("#container");
container.innerHTML = markup;
