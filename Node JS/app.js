function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Wamique");

console.log(global); // global exists here instead of window

global.setTimeout(() => {
  console.log("setTimout ran.");
}, 2000); // 2000ms = 2 seconds delay
// or simply
// setTimeout();

var message = "I am stored locally.";

// global doesn't have message, because variables are local
// to the files where they're made
// unlike browser's window that could access variables too.
console.log(global.message);

console.log(message); // we're accessing it locally
