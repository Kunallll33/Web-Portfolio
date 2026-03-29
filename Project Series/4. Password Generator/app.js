const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abacdefghijklmnopqstuvwxyz";
const numberSet = "1234567890";
const symbol = "~!@#$%^&*()_+/";

//Create Random Data
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
} 


//Selectors
const passBox = document.getElementById("passBox");
const totalChar = document.getElementById("total-Char");
const upperInput = document.getElementById("upperCase");
const lowerInput = document.getElementById("lowerCase");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("specialSymbol");

//Generate Password
const generatePassword = (password = "") => {
    if(upperInput.checked) {
        password += getRandomData(upperSet);
    } 
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    } 
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    } 
    if (symbolInput.checked) {
        password += getRandomData(symbol);
    } 
    if(password.length < totalChar.value) {
        return generatePassword(password);
    }
    password = truncatePassword(password, totalChar.value);
    passBox.innerText = password;
}

//Generate Button
const genBtn = document.querySelector("#btn");
genBtn.addEventListener("click", () => {
    generatePassword();
})


//Truncate Password 
function truncatePassword(str, num) {
    if (str.length > num) {
        let subPassword = str.slice(0, num);
        return subPassword;
    } else {
        return str;
    }
} 