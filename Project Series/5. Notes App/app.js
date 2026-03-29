const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");



const saveNotes = () => {
  const data = [];
  const notes = document.querySelectorAll(".note textarea");

  notes.forEach((note) => {
    data.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(data));
};




addBtn.addEventListener("click", function () {
  addNote();
});

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="toolBar">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea name="" id="textBox"></textarea>`;

  //Appending Note to main
  main.appendChild(note);

  //Functioning of Trash button
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
  });

  //Functioning of Save Button
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
};
