import Question from "./question.js";
import Quiz from "./quiz.js";

const q1 = new Question(
    "What's 2 + 2",
    [2, 3, 4, 5],
    2

);
const q2 = new Question(
    "First president of US?",
    ["AL", "George", "Barack", "Johnny"],
    1
);

const qArray = [q1, q2];


const myQuiz = new Quiz(qArray);

console.log(myQuiz.questions)
console.log(myQuiz.getCurrentQuestion())

//button 
myQuiz.nextIndex();
console.log(myQuiz.getCurrentQuestion())