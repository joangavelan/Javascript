export default function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

//What question is this
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentIndex];
}

//Next question
Quiz.prototype.nextIndex = function() {
    this.currentIndex++;
}

//Quiz ended
Quiz.prototype.hasEnded = function() {
    return this.currentIndex === this.questions.length;
}

//Guess
Quiz.prototype.guess = function(userGuess) {
    const currentQuestion = this.questions[this.currentIndex];
    if(currentQuestion.isCorrect(userGuess)) {
        this.score++;
    }

    this.nextIndex();
}