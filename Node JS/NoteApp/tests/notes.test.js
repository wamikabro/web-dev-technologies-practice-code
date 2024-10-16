import { expect, jest } from "@jest/globals"; // we need to import jest globals in ES6

// Making a Mock for db.js's methods
// So that if I'll import db.js, it won't import actual but mocked version
jest.unstable_mockModule("../src/db.js", () => ({
  insertDB: jest.fn(), // do nothing but return spy to tell how many time the function got called
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

// importing the db.js but mocked one.
// Using await otherwise db.js won't be mocked.
// Also we're using import as function here
const { insertDB, getDB, saveDB } = await import("../src/db.js");

// Import notes based on mocked db.js that contain our helper functions
const { newNote, getAllNotes, removeNote } = await import("../src/notes.js");

// beforeEach method of JEST lets us reset everything for next test
beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
});

/* Write some tests */

test("newNote inserts data and returns it", async () => {
  var note = {
    content: "this is my note",
    id: 1,
    tags: ["hello"],
  };
  insertDB.mockResolvedValue(note);

  var result = await newNote(note.content, note.tags);
  expect(result.content).toEqual(note.content);
  expect(result.tags).toEqual(note.tags);
});
