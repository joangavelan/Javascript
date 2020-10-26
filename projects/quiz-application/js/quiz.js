export default function Quiz(questions) {
    this.questions = questions
    this.score = 0
    this.currentIndex = 0
}

//Display current question 
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentIndex];
}

//Next question
Quiz.prototype.nextQuestion = function() {
    return this.currentIndex++;
}

//Previous question
Quiz.prototype.previousQuestion = function() {
    return this.currentIndex--;
}

//Checks if the game has ended
Quiz.prototype.hasEnded = function() {
    return this.currentIndex === this.questions.length;
}

//If the answer is correct score goes up 
Quiz.prototype.guess = function(userGuess) {
    const currentQuestion = this.questions[this.currentIndex];

    if(currentQuestion.isCorrect(userGuess)) {
        this.score++;
    }

    this.nextQuestion();
} 