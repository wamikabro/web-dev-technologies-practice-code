// Module Wrapper Function is IIFE function (Immidiately Invoked Function Expression)
// It is Automatically created by the compiler while compiling the module.

// these are parameters of the wrapper function
// exports, require, and module are also its parameters
console.log(__filename);
console.log(__dirname);

// we can use any of these, since exports is the shortcut of module.exports
// exports = module.exports

// as we were directly changing the object stored inside module.exports
// module.exports = myNewFunction
// we can not directly say
// exports = myNewFunction

// because exports is not holding the function, but it's holding the reference
// to the module.exports

// in other words, exports is different variable, that's holding reference to
// module.exports object.

// by changing it, we will be simply changing the exports variable, not the exports object
// that's inside module (module.exports)
