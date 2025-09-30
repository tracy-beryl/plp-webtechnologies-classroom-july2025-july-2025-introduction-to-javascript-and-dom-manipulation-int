
//  Basics


// Capture user details
let studentName = prompt("Enter your name:");
let score = prompt("Enter your score out of 100:");

// Simple conditional
if (score >= 50) {
  document.getElementById("statusMessage").textContent =
    `Welcome ${studentName}, you have passed the exam!`;
} else {
  document.getElementById("statusMessage").textContent =
    `Sorry ${studentName}, you did not pass. Keep trying!`;
}


// Functions


//  Check Pass/Fail
function checkPassStatus() {
  let result = (score >= 50) ? "PASS" : "FAIL";
  document.getElementById("passResult").textContent =
    `${studentName}, your status is: ${result}`;
}

// Calculate GPA
function calculateGPA() {
  let grades = [3.0, 3.5, 4.0, 2.8]; // Example grade points
  let total = 0;
  for (let g of grades) {
    total += g;
  }
  let gpa = (total / grades.length).toFixed(2);
  document.getElementById("gpaResult").textContent =
    `${studentName}, your GPA is: ${gpa}`;
}


// Loops


//  List Subjects using forEach
function listSubjects() {
  let subjects = ["Math", "Science", "History", "English"];
  let list = document.getElementById("subjectList");
  list.innerHTML = "";
  subjects.forEach(sub => {
    let li = document.createElement("li");
    li.textContent = sub;
    list.appendChild(li);
  });
}

// Countdown study hours using while loop
function countStudyHours() {
  let list = document.getElementById("studyList");
  list.innerHTML = "";
  let hours = 5;
  while (hours > 0) {
    let li = document.createElement("li");
    li.textContent = `${hours} hour(s) left to study`;
    list.appendChild(li);
    hours--;
  }
}


//  DOM Manipulation


//  Toggle Dark Mode
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

//  Add notes dynamically
function addNote() {
  let note = document.getElementById("noteInput").value;
  if (note.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = note;
    document.getElementById("notesList").appendChild(li);
    document.getElementById("noteInput").value = "";
  }
}

// Highlight GPA result
function highlightGPA() {
  let gpaText = document.getElementById("gpaResult");
  gpaText.style.backgroundColor = "yellow";
  gpaText.style.fontWeight = "bold";
}
