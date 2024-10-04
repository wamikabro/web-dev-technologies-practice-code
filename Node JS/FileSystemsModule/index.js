import * as fs from "node:fs"; // to use closure
import * as fsp from "node:fs/promises"; // to use promise

// Using Promise
try {
  await fsp.unlink("book.js");
  console.log("Successfully Deleted the given file using Promise");
} catch (error) {
  console.error(error);
}

// Using Closure
fs.unlink("book1.js", (error) => {
  if (error) throw error;
  console.log("Successfully Deleted the given file using Closure");
});
