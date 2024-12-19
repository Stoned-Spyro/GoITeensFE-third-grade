const parent = document.getElementById("parent");
const child = document.getElementById("child");
const descendant = document.getElementById("descendant");

parent.addEventListener("click", (event) => {
  console.log("parent triggered");
  console.log(event.target);
  console.log(event.currentTarget);
});
child.addEventListener("click", (event) => {
  console.log("child triggered");
  console.log(event.target);
  console.log(event.currentTarget);
});
descendant.addEventListener("click", (event) => {
  console.log("descendant triggered");
  console.log(event.target);
  console.log(event.currentTarget);
});



const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')

const wrapper = document.getElementById('wrapper');

const buttonClickHandler = (event) => {
  console.log(event.target.innerText);
}


wrapper.addEventListener('click', buttonClickHandler)

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

const selectColor = (e) => {
  if(e.target.nodeName !== 'BUTTON') return;

  const selectedColor = e.target.dataset.color;
  output.textContent = `Selected Color: ${selectedColor}`;
  output.style.color = selectedColor;
}

colorPalette.addEventListener('click', selectColor);

const getRandomHex = () => {
  return Math.round(Math.random() * 256).toString(16).padStart(2,'0');
}

const getRandomColor =() =>{
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`
}

const createPalletItems = (count) => {
  const items = [];
  for(let i = 0; i<count; i++){
    const color = getRandomColor();
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.color = color;
    button.style.backgroundColor = color;
    button.classList.add('item');
    items.push(button);
  }
  colorPalette.append(...items);
}

createPalletItems(Math.round(Math.random() * 100));
