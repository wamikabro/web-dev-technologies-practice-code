import { insertDB, getDB, saveDB } from "./db.js";

export async function newNote(note, tags = []) {
  var data = {
    tags,
    content: note,
    id: Date.now(),
  };
  await insertDB(data);
  return data;
}

export async function getAllNotes() {
  var { notes } = await getDB();
  return notes;
}

export async function findNotes(filterString) {
  var notes = await getAllNotes();
  return notes.filter((note) => {
    return note.content.toLowerCase().includes(filterString.toLowerCase());
  });
}

export async function removeNote(id) {
  var notes = await getAllNotes();
  var match = notes.find((note) => note.id === id);

  if (match) {
    var newNotes = notes.filter((note) => note.id !== id); // creating new array, and filtering out the removed note ;) wink
    await saveDB({ notes: newNotes });
    return id;
  }
}

export async function removeAllNotes() {
  return saveDB({ notes: [] }); // no need to add await since there's no code to run after that. so it works either way.
}
