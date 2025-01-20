// const result = _.add(2, 5);
// console.log(result);

let vanillaCount = 0;

const output = document.querySelector("#output");
const button = document.querySelector("#button");

const clickCounter = () => {
  vanillaCount += 1;
  output.textContent = vanillaCount;
  console.log(vanillaCount);
};

const scrollCounter = () => {
  vanillaCount += 1;
  output.textContent = vanillaCount;
  console.log(vanillaCount);
};

// document.addEventListener("scroll", scrollCounter);

// document.addEventListener("scroll", _.throttle(scrollCounter, 300));

// button.addEventListener("click", clickCounter);
button.addEventListener(
  "click",
  _.debounce(clickCounter, 1000, {
    leading: true,
    trailing: false,
  })
);

