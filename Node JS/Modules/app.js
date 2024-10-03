// best practice: don't store it in var or let. So we don't accidently change
const anotherModule = require("./anotherModule"); // or we can use full name ./anotherModule.js

console.log(anotherModule); // see what we've received

anotherModule.helloModule("Wamique"); // use the function that we've recieved
