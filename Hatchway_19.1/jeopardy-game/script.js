const board = document.getElementById("board");
const modal = document.getElementById("modal");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-answer");

let currentQuestion = null;

function createBoard() {
  questions.forEach(q => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = `$${q.value}`;
    tile.dataset.question = q.question;
    tile.dataset.answer = q.answer.toLowerCase();
    tile.dataset.value = q.value;
    tile.addEventListener("click", handleTileClick);
    board.appendChild(tile);
  });
}

function handleTileClick(e) {
  const tile = e.currentTarget;
  if (tile.classList.contains("used")) return;

  currentQuestion = tile;
  questionText.textContent = tile.dataset.question;
  answerInput.value = "";
  modal.classList.remove("hidden");
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = currentQuestion.dataset.answer;

  if (userAnswer === correctAnswer) {
    alert("✅ Correct!");
  } else {
    alert(`❌ Incorrect! Correct answer: ${correctAnswer}`);
  }

  currentQuestion.classList.add("used");
  currentQuestion.textContent = "";
  currentQuestion.removeEventListener("click", handleTileClick);
  modal.classList.add("hidden");
});

createBoard();
