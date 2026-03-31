let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let registerBtn = document.getElementById("register");
let loginBtn = document.getElementById("login");
let message = document.querySelector(".message");

registerBtn.addEventListener("click", () => {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    
    if(!username || !password){
        message.innerText = "Please Enter Both Username and Password Both";
        return;
    }
    
    let user = {
        user: username,
        pass: password
    }
    
    localStorage.setItem("user", JSON.stringify(user));
    message.innerText = "User registered successfully"; 
    usernameInput.value = "";
    passwordInput.value = "";


})

loginBtn.addEventListener("click", () => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);

    
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    
    if(!username || !password){
        message.innerText = "Please Enter both Username and Password";
        return;
    }

    if(!storedUser){
        message.innerText = "No user found. Please register yourself";
        return;
    }

    if(storedUser.user === username && storedUser.pass === password){
        message.innerText = "Login Successful";
    } else {
        message.innerText = "Invalid Credentials";
    }
})