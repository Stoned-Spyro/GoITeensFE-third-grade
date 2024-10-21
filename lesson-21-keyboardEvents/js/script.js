// document.addEventListener("keydown", (event) => {
//   console.log("користувач натиснув кнопку");
//   console.log(event);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("користувач відпустив кнопку");
// });

const square = document.querySelector("#player");

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "KeyS") {
    event.preventDefault();
    console.log("користувач натиснув кнопку s");
  }
});

// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
//   console.log("користувач натиснув пкм  ");
// });
// square.addEventListener("mouseover", (event) => {
//   square.textContent = "мишка над елементом";
//   console.log("мишка зайшла на елементу");
// });
// square.addEventListener("mouseout", (event) => {
//   square.textContent = "мишка поза елементом";
//   console.log(event);
//   console.log("мишка вийшла з  елементу");
// });

const enemy = document.querySelector("#enemy");
const game = document.querySelector("#game");
const { height: gameH, widht: gameW } = game.getBoundingClientRect();

const movement = (element, speed) => {
  document.addEventListener("keydown", (event) => {
    let { x, y, height, width } = element.getBoundingClientRect();
    let {
      x: enemyX,
      y: enemyY,
      height: enemyHeight,
      width: enemyWidth,
    } = enemy.getBoundingClientRect();
    console.log(element.getBoundingClientRect());
    switch (event.code) {
      case "ArrowUp": {
        if (y > 10) {
          y -= speed;
          if (y + height >= enemy.y) {
            alert("Game over");
          }
        }
        break;
      }
      case "ArrowDown": {
        if (y < 500 - height) {
          y += speed;
        }
        break;
      }
      case "ArrowLeft": {
        if (x > 10) {
          x -= speed;
        }
        break;
      }
      case "ArrowRight": {
        if (x < 1000 - width) {
          if (x + width >= enemyX) {
            alert("Game over");
            return;
          }
          x += speed;
        }
        break;
      }
      default: {
        alert("невідома кнопка");
      }
    }
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
  });
};

movement(square, 10);
