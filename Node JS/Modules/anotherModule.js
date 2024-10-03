function helloModule(namee) {
  console.log("Hello " + namee);
}

console.log(module); // see information about this module

module.exports.helloModule = helloModule; // export helloModule function

console.log(module); // check exports in module information now.
