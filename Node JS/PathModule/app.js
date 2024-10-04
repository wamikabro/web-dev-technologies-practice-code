import path from "node:path";

const basename = path.basename("C:\\temp\\myfile.html");
const specificWindowsBasename = path.win32.basename("C:\\temp\\myfile.html"); // to be specifc, otherwise it automatically recognizes
const basenameWithoutExtension = path.win32.basename(
  "C:\\temp\\myfile.html",
  ".html"
);
const basenameSuffixCaseSensitive = path.win32.basename(
  "C:\\foo.HTML",
  ".html"
); // it is case sensitive, it will only look for .html not .HTML so it won't remove it.

console.log("Basename: " + basename);
console.log("Windows Specific Basename: " + specificWindowsBasename);
console.log("Basename Without Extension: " + basenameWithoutExtension);
console.log(
  "Basename Suffix is Case Sensitive: " + basenameSuffixCaseSensitive
);

console.log(path.dirname("/foo/bar/baz/asdf/quux")); // Returns: '/foo/bar/baz/asdf')

console.log(path.extname("index.html")); // '.html'
console.log(path.extname("index.coffee.md")); // '.md'
console.log(path.extname("index.")); // '.'
console.log(path.extname("index")); // ''
console.log(path.extname(".index")); // ''
console.log(path.extname(".index.md")); // '.md'

console.log(
  path.format({
    dir: "C:\\path\\dir",
    base: "file.txt",
  })
); // 'C:\\path\\dir\\file.txt'

console.log(path.isAbsolute("//server")); // true
console.log(path.isAbsolute("\\\\server")); // true
console.log(path.isAbsolute("C:/foo/..")); // true
console.log(path.isAbsolute("C:\\foo\\..")); // true
console.log(path.isAbsolute("bar\\baz")); // false
console.log(path.isAbsolute("bar/baz")); // false
console.log(path.isAbsolute(".")); // false

console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
// Returns: '/foo/bar/baz/asdf'

try {
  console.log(path.join("foo", {}, "bar"));
  // This will throw an error: 'TypeError: Path must be a string. Received {}'
} catch (error) {
  console.log(error.message); // Log the error message
}

// Normalize the first path
console.log(path.normalize("C:\\temp\\\\foo\\bar\\..\\"));
// Returns: 'C:\\temp\\foo\\'

// Normalize the second path using win32
console.log(path.win32.normalize("C:////temp\\\\/\\/\\/foo/bar"));
// Returns: 'C:\\temp\\foo\\bar'
// console.log(path.normalize("C:////temp\\\\/\\/\\/foo/bar")); // direct way on windows

// Parse the path
const parsedPath = path.parse("C:\\path\\dir\\file.txt"); // returns an object

// Log the parsed result
console.log(parsedPath);
// Returns:
// {
//   root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }
