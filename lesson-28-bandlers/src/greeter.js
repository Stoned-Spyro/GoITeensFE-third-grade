const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

const hello = () => helloMessage;
const goodbye = () => goodbyeMessage;

const greeter = (username) => {
  console.log(`${helloMessage} ${username}`);
};

// export { hello, goodbye };

// export default greeter;

module.exports = {
  hello,
  goodbye,
  greeter,
};
