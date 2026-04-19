const API_URL = "http://localhost:3000";

async function loadNotes() {
  try {
    const response = await fetch(`${API_URL}/notes`);
    const notes = await response.json();

    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    notes.forEach(note => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${note.content}</p>
        <button onclick="deleteNote(${note.id})">Delete</button>
        <hr>
      `;
      notesList.appendChild(div);
    });
  } catch (error) {
    console.log("Load error:", error);
  }
}

async function addNote() {
  try {
    const noteInput = document.getElementById("noteInput");
    const content = noteInput.value;

    if (!content.trim()) return;

    await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    });

    noteInput.value = "";
    await loadNotes();
  } catch (error) {
    console.log("Add error:", error);
  }
}

async function deleteNote(id) {
  try {
    await fetch(`${API_URL}/notes/${id}`, {
      method: "DELETE"
    });

    await loadNotes();
  } catch (error) {
    console.log("Delete error:", error);
  }
}

window.onload = loadNotes;