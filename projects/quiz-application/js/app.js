import Question from './question.js';
import Quiz from './quiz.js';

const App = (() => {
    //caching the DOM
    const quizEL = document.querySelector(".jabquiz")
    const quizQuestionEl = document.querySelector(".jabquiz__question")
    const trackerEl = document.querySelector(".jabquiz__tracker")
    const taglineEl = document.querySelector(".jabquiz__tagline")
    const choicesEl = document.querySelector(".jabquiz__choices")
    const progressInnerEl = document.querySelector(".progress__inner")
    const nextButtonEl = document.querySelector(".next")
    const restartButtonEl = document.querySelector(".restart")

    //creating the questions
    const q1 = new Question(
        "First Presidente of US?",
        ['Barack Obama', 'Abraham Lincoln', 'George Washington', 'Tony Robbins'],
        2
        )

    const q2 = new Question(
        "When was Javascript created?",
        ['June 1995', 'May 1995', 'July 1885', 'Sep 1996'],
        1
        )

    const q3 = new Question(
        "What does CSS stand for?",
        ['County Sheriff Service', 'Cascading Super Sheets', 'Cascading Style Sheets'],
        2
        )

    const q4 = new Question(
        "The full form of HTML is...",
        ['Hyper Text Markup Language', 'Hold the door', 'ERROR', 'Hypersonic'],
        0
        )

    const q5 = new Question(
        "console.log(typeof []) would return what?",
        ['Array', 'Object', 'null', 'String'],
        1
        )


    const quiz = new Quiz([q1, q2, q3, q4, q5]);

    console.log(quiz);
}

)();