import path from "node:path";

const basename = path.basename("C:\\temp\\myfile.html");
const specificWindowsBasename = path.win32.basename("C:\\temp\\myfile.html");
const basenameWithoutExtension = path.win32.basename(
  "C:\\temp\\myfile.html",
  ".html"
);

console.log("Basename: " + basename);
console.log("Windows Specific Basename: " + specificWindowsBasename);
console.log("Basename Without Extension: " + basenameWithoutExtension);
