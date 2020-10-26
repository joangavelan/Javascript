import Question from './question.js';
import Quiz from './quiz.js';

const q1 = new Question("What's 2 + 2", [2, 3, 4, 5], 0); 
const q2 = new Question("First President of US?", ['AL', 'George', 'Barrack', 'Johnny'], 1); 
const q3 = new Question("Which of these animals is a carnivore", ['Turtle', 'Lion', 'Fish'], 1);   

const qArray = [q1, q2, q3];
const myQuiz = new Quiz(qArray);

console.log(myQuiz.getCurrentQuestion());

myQuiz.nextQuestion();

console.log(myQuiz.getCurrentQuestion());

myQuiz.previousQuestion();

console.log(myQuiz.getCurrentQuestion());

myQuiz.nextQuestion();
myQuiz.nextQuestion();

console.log(myQuiz.getCurrentQuestion());

myQuiz.nextQuestion();

console.log(myQuiz.hasEnded());




