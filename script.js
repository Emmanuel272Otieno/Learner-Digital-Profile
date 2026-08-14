const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");
const goalCount = document.getElementById("goalCount");

const techniqueBtn = document.getElementById("techniqueBtn");
const techniqueText = document.getElementById("techniqueText");

const techniques = [
  "Practice writing clean HTML.",
  "Use meaningful class names in CSS.",
  "Use JavaScript functions to organize your code.",
  "Test your website in the browser.",
  "Use comments to explain difficult code.",
  "Practice solving small coding problems.",
  "Keep your code properly formatted."
];

// Add a new goal
addGoalBtn.addEventListener("click", function () {

  const goal = goalInput.value.trim();

  if (goal === "") {
    alert("Please enter a coding goal.");
    return;
  }

  const newGoal = document.createElement("li");
  newGoal.textContent = goal;

  goalList.appendChild(newGoal);

  goalInput.value = "";

  updateGoalCount();
});

// Update number of goals
function updateGoalCount() {
  const numberOfGoals = goalList.children.length;
  goalCount.textContent = numberOfGoals;
}

// Display a random technique
techniqueBtn.addEventListener("click", function () {

  const randomNumber = Math.floor(Math.random() * techniques.length);

  techniqueText.textContent = techniques[randomNumber];
});