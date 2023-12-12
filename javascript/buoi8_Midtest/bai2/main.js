const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];
const container = document.querySelector(".quiz-container");
const btnRandom = document.getElementById("btn");
function renderQuiz() {
  let html = "";
  quizes.forEach((quiz) => {
    html += `<div class="quiz-item">
                      <h3>Câu ${quiz.id} : ${quiz.question}</h3>
                      <div class="quiz-answer">
                          ${renderAnswers(quiz.answers, quiz.id)}
                      </div>
                  </div>`;
  });
  container.innerHTML = html;
}
function renderAnswers(answers, quizId) {
    let html = "";
    answers.forEach((answer) => {
      html += `<div class="quiz-answer-item">
                        <input type="radio" name="quiz-${quizId}">
                        <label>${answer}</label>
                    </div>`;
    });
    return html;
  }
  
  btnRandom.addEventListener("click", () => {
    const item = document.querySelectorAll(".quiz-item");
    item.forEach((element) => {
      const quizAnswerItem = element.querySelectorAll(".quiz-answer-item");
      const randonNumber = Math.floor(Math.random() * quizAnswerItem.length);
      quizAnswerItem[randonNumber].querySelector("input").checked = true;
    });
  });
  renderQuiz();
  