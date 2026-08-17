<script src="script.js"></script>
const addGoalButton = document.getElementById("addGoal");
const goalList = document.getElementById("goalList");
const goalCount = document.getElementById("goalCount");

addGoalButton.addEventListener("click", function () {

    const newGoal = prompt("Enter your new coding goal:");

    if (newGoal && newGoal.trim() !== "") {

        const goal = document.createElement("div");

        goal.className = "goal";

        goal.textContent = "🚀 " + newGoal;

        goalList.appendChild(goal);

        goalCount.textContent =
            goalList.children.length;
    }

});

const showTechniqueButton =
    document.getElementById("showTechnique");

const techniqueText =
    document.getElementById("techniqueText");

const techniques = [
    "Practice solving small coding problems.",
    "Write a little JavaScript every day.",
    "Build small projects instead of only reading tutorials.",
    "Learn from your coding mistakes.",
    "Practice HTML and CSS by creating web pages."
];

showTechniqueButton.addEventListener("click", function () {

    const randomNumber =
        Math.floor(Math.random() * techniques.length);

    techniqueText.textContent =
        techniques[randomNumber];

});

