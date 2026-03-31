let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#resetBtn");
let winContainer = document.querySelector(".winContainer");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");

let turnO = true; //playerO, playerX

const winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [1, 4, 7],
  [2, 4, 6],
  [6, 7, 8],
  [2, 5, 8],
];

// Pre-requiset Functions ~~~~~~~~~~~~~~~~~~

let btnDisable = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

let btnEnable = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  winContainer.classList.remove("hide");
  btnDisable();
};

const resetGame = () => {
  turnO = true;
  btnEnable();
  winContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Button Funtioning
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.style.color = "black";
      btn.innerText = "O";
      turnO = false;
    } else {
        btn.style.color = "red";
        btn.innerText = "X";
        turnO = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPattern) {
    pos1val = btns[pattern[0]].innerText;
    pos2val = btns[pattern[1]].innerText;
    pos3val = btns[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`Winner ${pos1val}`);
        showWinner(pos1val);
      }
    }
  }
};
