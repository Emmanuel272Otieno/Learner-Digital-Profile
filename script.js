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
// ============================
// CODING GOALS
// ============================

const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");
const goalCount = document.getElementById("goalCount");


function updateGoalCount() {

    if (goalList && goalCount) {

        goalCount.textContent =
            goalList.children.length;

    }

}


function addGoal() {

    if (!goalInput || !goalList) {
        return;
    }

    const goal =
        goalInput.value.trim();


    if (goal === "") {

        alert("Please enter a coding goal.");

        return;

    }


    const newGoal =
        document.createElement("li");

    newGoal.textContent = goal;

    goalList.appendChild(newGoal);

    goalInput.value = "";

    updateGoalCount();

}


if (addGoalBtn) {

    addGoalBtn.addEventListener(
        "click",
        addGoal
    );

}


if (goalInput) {

    goalInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                addGoal();

            }

        }
    );

}


// ============================
// TECHNIQUE OF THE DAY
// ============================

const techniqueBtn =
    document.getElementById("techniqueBtn");

const techniqueText =
    document.getElementById("techniqueText");


const techniques = [

    "Practice solving small coding problems.",

    "Practice writing clean HTML.",

    "Learn one new CSS property today.",

    "Practice JavaScript functions.",

    "Build a small website.",

    "Practice debugging your code.",

    "Try creating a responsive webpage."

];


if (techniqueBtn && techniqueText) {

    techniqueBtn.addEventListener(
        "click",
        function() {

            const randomNumber =
                Math.floor(
                    Math.random() * techniques.length
                );

            techniqueText.textContent =
                techniques[randomNumber];

        }
    );

}


// ============================
// IMAGE SEARCH
// ============================

const searchInput =
    document.getElementById("searchInput");

const imageCards =
    document.querySelectorAll(".image-card");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const search =
                searchInput.value
                .toLowerCase();


            imageCards.forEach(
                function(card) {

                    const text =
                        card.textContent
                        .toLowerCase();


                    if (
                        text.includes(search)
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


// ============================
// IMAGE POPUP
// ============================

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");

const viewButtons =
    document.querySelectorAll(".view-btn");


viewButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                modalImage.src =
                    button.dataset.image;

                modalImage.alt =
                    button.dataset.title;

                modalTitle.textContent =
                    button.dataset.title;

                modal.style.display =
                    "flex";

            }
        );

    }
);


if (closeModal) {

    closeModal.addEventListener(
        "click",
        function() {

            modal.style.display =
                "none";

        }
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                modal.style.display =
                    "none";

            }

        }
    );

}


// ============================
// CONTACT FORM
// ============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            formMessage.textContent =
                "Thank you! Your message has been received.";


            contactForm.reset();

        }
    );

}