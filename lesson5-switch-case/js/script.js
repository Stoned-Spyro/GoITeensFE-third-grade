// Pro Vip Premium Novice - можливі варіанти підписки

// const subscribe = "Vip 2";

// switch (subscribe) {
//   case "Pro": {
//     console.log("Вітаю, у вас Про підписка, вам доступна знижка 10%");
//     break;
//   }
//   case "Vip 2": {
//     console.log("Вітаю, у вас Віп підписка, вам доступна знижка 20%");
//     break;
//   }
//   case "Premium": {
//     console.log("Вітаю, у вас Преміум підписка, вам доступна знижка 30%");
//     break;
//   }
//   case "Novice": {
//     console.log("Вітаю, у вас підписка для новачків, у вас немає знижки");
//      break;
//   }
//   default:
//     console.log("На жаль, ви не є нашим клієнтом");
// }
// const price = 3500;
// let toPay;

// if (price >= 100 && price < 1000) {
//   toPay = price * 0.98;
// } else if (price >= 1000 && price < 3000) {
//   toPay = price * 0.9;
// } else if (price >= 3000) {
//   toPay = price * 0.7;
// } else {
//   toPay = price;
// }
// if (price >= 3000) {
//   toPay = price * 0.7;
// } else if (price >= 1000) {
//   toPay = price * 0.9;
// } else if (price >= 100) {
//   toPay = price * 0.98;
// } else {
//   toPay = price;
// }

// switch(price){
//   case(price >= 100): {
//     toPay = price * 0.98;
//     break;
//   }
//   case(price >= 1000): {
//     toPay = price * 0.9;
//     break;
//   }
//   case(price>=3000):{
//     toPay = price * 0.7;
//     break;
//   }
//   default: toPay = price;
// }

// console.log(`Користувач повинен заплатити ${toPay}`);

// function greetings() {
//   const age = document.getElementById("age-input").value;
//   const name = document.getElementById("name-input").value;
//   let message;
//   if (age !== "" && name !== "") {
//     if (age <= 14) {
//       message = `вибачте, ${name}, на жаль ви не можете користуватись нашим сайтом :C`;
//     } else if (age >= 14 && age <= 18) {
//       message = `вітаю на сайті, ${name}, гарного кристування!`;
//     } else {
//       message = `${name}, ви все ще достатньо дорослий!`;
//     }
//   } else {
//     message = "будь ласка, введіть дані";
//   }
//   document.getElementById("result").innerText = message;
// }

// function calc() {
//   const x = Number(document.querySelector("#input-x").value);
//   const y = Number(document.querySelector("#input-y").value);

//   const result = x + y;

//   document.querySelector("#result2").value = result;
// }
var innerVar;
let x = 10;
if (true) {
  let inner = 15;
  let x = 25;
  console.log("!", x);
  if (true) {
    let inner2 = 25;
    var innerVar = 30;
    console.log(inner);
    console.log(inner2);
    console.log(x);
    console.log('%',eval(x));
  }
}

console.log(innerVar);
