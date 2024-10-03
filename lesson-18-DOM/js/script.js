const calc = () => {
  const input1 = document.querySelector("#input1").value;
  const input2 = document.querySelector("#input2").value;
  const res = document.querySelector("#result");
  const div = document.querySelector("div");
  const firstInputValue = Number(input1);
  const secondInputValue = Number(input2);
  const result = firstInputValue + secondInputValue;
  div.appendChild(document.createElement("h1"));
  document.querySelector("h1").textContent = result;
};

const changeColor = () => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => (document.body.style.background = ""), 3000);
};
