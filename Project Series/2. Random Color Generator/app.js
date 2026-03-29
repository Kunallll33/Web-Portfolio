const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomColor;
    document.querySelector("h2").innerText = randomColor;
    
    // Send Hex code to user clipboard
    navigator.clipboard.writeText(randomColor);  
}


document.querySelector("button").addEventListener("click", getColor);
 