let input = document.getElementById("input");
let btn = document.getElementById("addBtn");
let list = document.getElementById("list");


const saveTasks = () => {
    let tasks = [];
    let listItems = document.querySelectorAll("li");
    
    listItems.forEach((item) => {
        tasks.push(item.firstChild.textContent);
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}

const loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks === null) return;
    
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerText = task;
        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete-Btn");
        
        delBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });
        
        li.appendChild(delBtn);
        list.appendChild(li);
    });
};

loadTasks();

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter Task in Input Box")
    } else {

        let value = input.value;

        //Inserting data to list item
        let li = document.createElement("li");
        li.innerText = value;


        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete-Btn");

        delBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        })

        //Inserting Text and deleteBtn in list item
        list.appendChild(li);
        li.appendChild(delBtn);

        saveTasks();
        input.value = "";
    }
})



