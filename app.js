const questions = [
    "Our Class Sir name?",
    "Where is smit located?",
    "Smit is also on bahadurabad?",
    "pakistan biggest city??",
    "Java is Scriptive Language?"
];

const answers = [
    "Abdullah Ansari",
    "Paposh",
    "yes",
    "Karachi",
    "Yes"
];


let correctAnswers = 0;
let wrongAnswers = 0;


for (let i = 0; i < questions.length; i++) {
    
    let userAnswer = prompt(questions[i]);

    // Check if the user's answer is correct
    if (userAnswer === answers[i]) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
}

// Calculate total score
const totalQuestions = questions.length;
const scorePercentage = (correctAnswers / totalQuestions) * 100;

// Display the user's total score
alert(`You answered ${correctAnswers} questions correctly and ${wrongAnswers} questions incorrectly.`);
alert(`Your score is ${scorePercentage.toFixed(2)}%.`);

// Feedback based on the score
if (scorePercentage >= 90) {
    alert("Grade: A - Excellent job!");
} else if (scorePercentage >= 80) {
    alert("Grade: B - Great work!");
} else if (scorePercentage >= 70) {
    alert("Grade: C - Good effort!");
} else if (scorePercentage >= 60) {
    alert("Grade: D - You passed!");
} else {
    alert("Grade: F - Better luck next time!");
}