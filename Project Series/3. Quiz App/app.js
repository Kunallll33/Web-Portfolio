const questions = [
  {
    Que: "Which of the following is a markup language?",
    a: "HTML",
    b: "JavaScript",
    c: "PHP",
    d: "CSS",
    correct: "a",
  },
  {
    Que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the year",
    correct: "b",
  },
  {
    Que: "What does CSS stands for?",
    a: "HTML",
    b: "JS",
    c: "PHP",
    d: "Casceding Style Sheets",
    correct: "d",
  },
  {
    Que: "Which of the following is a markup language?",
    a: "HTML",
    b: "JavaScript",
    c: "PHP",
    d: "CSS",
    correct: "a",
  },
];

let index = 0;
let right = 0,
  wrong = 0;
let total = questions.length;
const optionInputs = document.querySelectorAll(".options");
const queBox = document.getElementById("queBox");

const loadQuestion = () => {
  const data = questions[index];

  if (index === total) {
    return endQuiz();
  }
  reset();

  queBox.innerText = `${index + 1}. ${data.Que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const summitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();

  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((inputs) => {
    inputs.checked = false;
  });
};

const endQuiz = () => {
  
  document.getElementById("box1").innerHTML = `
  <div style="text-align:center">
   <h3>Thank you for playing</h3>
   <h2> ${right} / ${total} are correct </h2>
   `;
};

loadQuestion();
