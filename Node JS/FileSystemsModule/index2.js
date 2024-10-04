import * as fs from "node:fs/promises"; // to use promise

// Writing a file
try {
  await fs.writeFile("example.txt", "Hello, World!", "utf-8"); // Write data to the file
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing to the file:", error);
}

// Appending to a file
try {
  await fs.appendFile("example.txt", "\nAppended text!", "utf-8"); // Append data to the file
  console.log("Data appended successfully.");
} catch (error) {
  console.error("Error appending to the file:", error);
}

// Reading from a file
try {
  const data = await fs.readFile("example.txt", "utf-8"); // Read data from the file
  console.log("File content:", data);
} catch (error) {
  console.error("Error reading the file:", error);
}

// Renaming the file
try {
  await fs.rename("example.txt", "newExample.txt"); // Rename the file
  console.log("File renamed successfully.");
} catch (error) {
  console.error("Error renaming the file:", error);
}

// Just adding some delay before renaming back the file
// IGNORE IT
// ------------------------------------------
(function delay(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-wait: do nothing, just wait
  }
})(2000);
// ------------------------------------------

try {
  await fs.rename("newExample.txt", "example.txt"); // Rename the file
  console.log("File renamed back successfully.");
} catch (error) {
  console.error("Error renaming the file:", error);
}

// Deleting a file
try {
  await fs.unlink("randomFile.txt"); // Delete the file
  console.log("File deleted successfully.");
} catch (error) {
  console.error("Error deleting the file:");
}

// making a new directory
try {
  await fs.mkdir("newDirectory"); // Create a new directory
  console.log("Directory created successfully.");
} catch (error) {
  console.error("Error creating the directory:", error);
}

// read all the names from the directory
try {
  const files = await fs.readdir("."); // Read the current directory
  console.log("Directory contents:", files);
} catch (error) {
  console.error("Error reading the directory:", error);
}

// Just adding some delay before deleting the directory
// IGNORE IT
// ------------------------------------------
(function delay(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-wait: do nothing, just wait
  }
})(2000);
// ------------------------------------------

// deleting the newly created directory
try {
  await fs.rmdir("newDirectory"); // Delete the directory
  console.log("Directory deleted successfully.");
} catch (error) {
  console.error("Error deleting the directory:", error);
}

// check if file or directory exists
try {
  const stats = await fs.stat("example.txt"); // Get file stats
  console.log("File exists:", stats.isFile()); // Check if it is a file otherwise stats.isDirectory() for directory
} catch (error) {
  console.log("File does not exist.");
}
