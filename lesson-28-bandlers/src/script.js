// import greeter, { goodbye, hello } from "./greeter.js";

const { hello, goodbye, greeter } = require("./greeter");

console.log(hello());
console.log(goodbye());

greeter("Oleksii");

