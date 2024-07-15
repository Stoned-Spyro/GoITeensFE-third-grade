let str = "Hello world";
console.log(str);
console.log((str[1] = "a"));
console.log(str);

const str2 = str + ", my name is Oleksii";
console.log(str2);
str = str + ", my name is Oleksii";
console.log(str);

console.log(str2.length);

console.log(str[str.length - 1]);

const upperCaseString = "JAVASCRIPT IS awesome";

console.log(upperCaseString.toLocaleLowerCase());

console.log(upperCaseString.toUpperCase());
const paragraph = "think Ruth's cat is cuter than your cat! cat";
console.log(paragraph.indexOf("cat John"));
console.log(paragraph.lastIndexOf("cat John"));
console.log(paragraph.includes("dog"));

console.log(paragraph.startsWith("thinks"));
console.log(paragraph.endsWith("cat"));

const strWithWhiteSpace = `\nhello`;
console.log(strWithWhiteSpace);
console.log(strWithWhiteSpace.trim());

const strPad = "hello";

console.log(strPad.padEnd(8, "!"));
console.log(strPad.padStart(8, "!"));
const min = "11";

console.log(min.padStart(2, "0"));

const age = 24;
const userName = "Oleksii";
const lastName = "Slavych";
const fullName = userName + " " + lastName;

const greetings = `Hello, my name is ${fullName}, i am ${age} years old`;
console.log(greetings);

console.log(1 + "1");

console.log(5 + 5 + "5");
