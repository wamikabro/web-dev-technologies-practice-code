function helloModule(namee) {
  console.log("Hello " + namee);
}

console.log(module); // see information about this module

module.exports.helloModule = helloModule; // export helloModule function
// we could've just exported the single function by replacing exports object
// module.exports = helloModule
// so to call it from the app.js, we will have to directly use the
// variable thats holding it.

console.log(module); // check exports in module information now.
