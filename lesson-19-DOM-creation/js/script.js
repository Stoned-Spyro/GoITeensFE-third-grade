const heading = document.createElement("h1");
console.log(heading);

heading.textContent = "Hello i am your first heading";

console.log(heading);

const image = document.createElement("img");
image.src =
  "https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A=";
image.alt = "Nature";
console.log(image);

const container = document.querySelector("#container");
const innerElement = document.querySelector("#container > h1");
console.log(container);
// container.append(heading, image);
// container.prepend(heading, image);

// innerElement.before(heading, image);

// container.appendChild(heading);
// container.insertBefore(heading);
// innerElement.remove();

const elements = ["first element", "second element", "third element"];
const fruits = ["apple", "bannana", "oranges", "cherry"];

let tempVariable = container.innerHTML;

// const elementsCreator = (elements, tag, wrapper) => {
//   let newElement = `<${wrapper}>`;

//   for (const element of elements) {
//     newElement += `<${tag}>${element}</${tag}>`;
//   }

//   newElement += `</${wrapper}>`;
//   return newElement;
// };

// const createdElement = elementsCreator(elements, "li", "ul");
// const fruitsList = elementsCreator(fruits, "li", "ul");
const newList = document.createElement("ul");

// container.insertAdjacentHTML("beforebegin", createdElement);
// container.insertAdjacentHTML("afterend", fruitsList);

for (let fruit of fruits) {
  const newListItem = document.createElement("li");
  newListItem.textContent = fruit;
  newList.insertAdjacentElement("afterbegin", newListItem);
}

container.appendChild(newList);

const imagePath = image.getAttribute("src");
console.log(imagePath);

container.insertAdjacentHTML(
  "beforeend",
  `<a href="${imagePath}">Click me</a>`
);

console.log(image.attributes);
const myInput = document.querySelector('*[data-meaning = "my paragraph"]');
console.log(myInput);
