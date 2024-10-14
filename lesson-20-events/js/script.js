const but = document.querySelector("#main-button");
const header = document.querySelector("#my-header");
const input = document.querySelector("#my-input");
const form = document.querySelector("#my-form");
const anchor = document.querySelector("#my-anchor");
const result = document.querySelector("#result");
let count = 0;

const clickEventHandler = () => {
  console.log("Hello world");
};

const increment = () => {
  count++;
  console.log(count);
};

const onInputFocus = (event) => {
  // console.log("user focused on input");
  // confirm("Are you sure you want to type something)");
  // input.removeEventListener("focus", onInputFocus);
  result.textContent = event.target.value;
  console.log(event);
  console.log(event.target.value);
};

const onAnchorClick = (event) => {
  console.log("anchor was clicked");
};

const onFormSubmit = (event) => {
  event.preventDefault();
  if (input.value === "") {
    input.focus();
    return;
  }
  console.log(input.value);
};

but.addEventListener("click", clickEventHandler);
but.addEventListener("mouseleave", increment);

input.addEventListener("input", onInputFocus);

form.addEventListener("submit", onFormSubmit);
anchor.addEventListener("click", onAnchorClick);
