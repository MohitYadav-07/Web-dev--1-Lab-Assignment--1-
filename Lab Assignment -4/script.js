const quizQuestions = [
  { question: "What does JS stands for?", answer: "javascript" },
  { question: "Which symbol starts a single-line comment in JavaScript?", answer: "//" },
  { question: "Which keyword declares a variable?", answer: "var" },
  { question: "JavaScript runs in the…", answer: "browser" },
  { question: "Which value means “nothing” in JavaScript?", answer: "null" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);
    if (userAnswer !== null) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert("Your final score is: " + score + " / " + quizQuestions.length);
}

runQuiz();