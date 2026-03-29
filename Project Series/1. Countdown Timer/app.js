let userInput = document.getElementById("user-input");

const  endTime = "18 October, 2026 6:00 PM";



document.querySelector("#end-time").innerText = endTime;
const inputs = document.getElementsByTagName("input");


const clock = () => {
    const end = new Date(endTime);
    const now = new Date();
    let diff = end - now;
    diff = Math.floor(diff / 1000);  //Total Seconds

    if(diff < 0) return;

    // Converting into days;
    inputs[1].value = Math.floor(diff / 3600 / 24);  //Days
    inputs[2].value = Math.floor(diff / 3600) % 24;  //hours
    inputs[3].value = Math.floor(diff / 60) % 60   //mins
    inputs[4].value = Math.floor(diff % 60) // Secs 


}
setInterval(() => {
    clock();
}, 1000)