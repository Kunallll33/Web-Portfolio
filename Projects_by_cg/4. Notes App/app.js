let noteBtn = document.getElementById("addBtn");
let notesContainer = document.querySelector(".notes-container");


// Auto Saving Notes 
const saveNotes = () => {
    let notes = document.querySelectorAll("p");
    let data = [];

    notes.forEach((note) => {
        data.push(note.innerText);
    });

    localStorage.setItem("notes", JSON.stringify(data));
}

noteBtn.addEventListener("click", () => {
    const notes = document.createElement("div");
    notes.classList.add("notes");

    let text = document.createElement("p");
    text.contentEditable = true;
    text.classList.add("text");

    //Delete Button
    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.addEventListener("click", () => {
        notes.remove();
        saveNotes();
        return;
    })


    text.addEventListener("input", saveNotes);
    notes.appendChild(text);
    notesContainer.appendChild(notes).appendChild(delBtn);
})



function loadNotes() {
    let back = JSON.parse(localStorage.getItem("notes"));
    
    if (!back) return;
    
    back.forEach((note) => {
        
        let newDiv = document.createElement("div");
        
        //Delete Button
        let delBtn = document.createElement("button");
        delBtn.classList.add("delBtn");
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.addEventListener("click", () => {
            newDiv.remove();
            saveNotes();
            return;
        });


        let newP = document.createElement("p");
        newP.contentEditable = true;
        newP.innerText = note;
        newP.setAttribute('class', 'text');

        newDiv.classList.add("notes");
        newDiv.appendChild(newP);
        notesContainer.appendChild(newDiv).appendChild(delBtn);
    })
}

loadNotes();


