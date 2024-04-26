import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const questions = [
  {
      question: "What is the union operator ⋃ used for if sets A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8} are given?",
      choices: [
          { text: "Intersection of sets A and B", isCorrect: false },
          { text: "Union of sets A and B", isCorrect: true },
          { text: "Difference of sets A and B", isCorrect: false },
          { text: "Intersection of sets A and B", isCorrect: false }
      ]
  },
  {
      question: "In a set, if the number of elements is 128, how many multiple subsets are there?",
      choices: [
          { text: "2^128", isCorrect: true },
          { text: "128!", isCorrect: false },
          { text: "128^2", isCorrect: false },
          { text: "2 × 128", isCorrect: false }
      ]
  },
  {
      question: "What does the intersection operator ⋂ represent?",
      choices: [
          { text: "Intersection of sets", isCorrect: true },
          { text: "Union of sets", isCorrect: false },
          { text: "Difference of sets", isCorrect: false },
          { text: "Intersection of sets", isCorrect: false }
      ]
  },
  {
      question: "If n(A) = 10, n(B) = 15, and n(A ⋃ B) = 20, what is n(A ⋂ B)?",
      choices: [
          { text: "5", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "15", isCorrect: false },
          { text: "20", isCorrect: false }
      ]
  },
  {
      question: "If set A = {x ∈ Z | 1 ≤ x ≤ 10}, how many members are there in this set?",
      choices: [
          { text: "9", isCorrect: false },
          { text: "10", isCorrect: true },
          { text: "11", isCorrect: false },
          { text: "12", isCorrect: false }
      ]
  },
  {
      question: "If set A = {x ∈ R | x^2 - 4x + 3 = 0}, what are the members of set A?",
      choices: [
          { text: "{1, 3}", isCorrect: true },
          { text: "{1, 2}", isCorrect: false },
          { text: "{2, 3}", isCorrect: false },
          { text: "{3, 4}", isCorrect: false }
      ]
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const ShowScore = document.getElementById('score')
let score = 0
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement!.textContent = currentQuestion.question;
  choicesElement!.innerHTML = "";
  currentQuestion.choices.forEach(choice => {
      const choiceElement = document.createElement("button");
      choiceElement.textContent = choice.text;
      choiceElement.classList.add("choice");
      choiceElement.addEventListener("click", () => checkAnswer(choice.isCorrect));
      choicesElement!.appendChild(choiceElement);
  });

}

function checkAnswer(isCorrect : boolean) {
  if (isCorrect) {
    Toastify({
      text: "Correct answer!",
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
      
      ShowScore!.innerText = `Score: ${score += 1}`

  } else {
    Toastify({
      text: "Wrong answer. Try again!",
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
      
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion();
  } else {
      alert("Quiz finished!");
      // Here you can add code for what to do when quiz finishes
  }
}

nextButton!.addEventListener("click", displayQuestion);

// Display the first question when the page loads
displayQuestion();
