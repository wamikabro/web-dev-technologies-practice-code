#!/usr/bin/env node
let note = process.argv[2]; // after path and file name, the 3rd is the argument so argv[2]
const newNote = {
  id: Date.now(),
  note,
};

console.log(newNote);

export { note };
