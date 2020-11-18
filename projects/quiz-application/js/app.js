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
        "Who's the first president of US?",
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

    const listeners = _ => {
        nextButtonEl.addEventListener('click', function() {
            const selectedRadioElem = document.querySelector('input[name="choice"]:checked');

            if(selectedRadioElem) {
                const key = Number(selectedRadioElem.getAttribute('data-order'))
                quiz.guess(key);
                renderAll();
            }

            else {
                alert('Please, choose an option.');
            }
        })

        restartButtonEl.addEventListener('click', function() {
            //Reset the quiz
            quiz.reset();
            //RenderAll
            renderAll();
            //Restore tagline
            setValue(taglineEl,'Pick an option below!');
            //Restore the next button
            nextButtonEl.style.opacity = 1;
        })
    }


    //Render the question
    const setValue = (elem, value) => elem.innerHTML = value;

    const renderQuestion = _ => {
        const question = quiz.getCurrentQuestion().question;
        setValue(quizQuestionEl, question);
    }

    //Render choices elements
    const renderChoicesElements = _ => {
        let markup = "";
        const currentChoices = quiz.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            markup += `
            <li class="jabquiz__choice">
                <input type="radio" data-order="${index}" id="choice${index}" name="choice" class="jabquiz__input">
                <label for="choice${index}" class="jabquiz__label">
                    <i></i>
                    <span>${elem}</span>
                </label>
            </li>
            ` 
        })
        setValue(choicesEl, markup);
    }
    
    //Render tracker
    const renderTracker = _ => {
        const index = quiz.currentIndex;
        setValue(trackerEl, `${index + 1} of ${quiz.questions.length}`);
    }

    //Render progress
    const getPercentage = (num1, num2) => {
        return Math.round((num1 / num2) * 100);
    }

    const launch = (width, maxPercent) => {
        let loadingBar = setInterval(function() {
            if(width > maxPercent) {
                clearInterval(loadingBar);
            }
            else {
                width++;
                progressInnerEl.style.width = width + '%';
            }
        }, 3)
    }

    const renderProgress = _ => {
        //1. width
        const currentWidth = getPercentage(quiz.currentIndex, quiz.questions.length);
        //2. launch(0, width)
        launch(0, currentWidth);
    }

    const renderEndScreen = _ => {
        setValue(quizQuestionEl, `Great Job!`)
        setValue(taglineEl, `Completed!`)
        setValue(trackerEl, `Your score: ${getPercentage(quiz.score, quiz.questions.length)}%`)
        nextButtonEl.style.opacity = 0;
        renderProgress();
    }

    const renderAll = _ => {
        if (quiz.hasEnded()) {
            //renderEndScreen
            renderEndScreen()
        } 
        else {
            //1.render the question
            renderQuestion();
            //2.render the choices elements
            renderChoicesElements();
            //3.render tracker 
            renderTracker();
            //4.render progress
            renderProgress();

        }
    }

    return {
        renderAll: renderAll,
        listeners: listeners
    }

}

)();


App.renderAll();
App.listeners();