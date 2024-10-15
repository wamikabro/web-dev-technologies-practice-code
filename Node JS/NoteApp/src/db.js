import fs from "node:fs/promises";

const DB_PATH = new URL("../db.json", import.meta.url);

// get what's in databse and parse it to js object
export async function getDB() {
  var db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
}

// save database object into json file after stringifying it
export async function saveDB(db) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2)); // space everything by 2 spaces
  return db;
}

// append into the array present inside the json file
// we don't wanna use fs.append because it will be appending the json file, not the array of course
export async function insertDB(data) {
  var db = await getDB(); // get the database object
  db.notes.push(data); // push the data in the notes array
  await saveDB(db); // store the manipulated db into json
  return data;
}
