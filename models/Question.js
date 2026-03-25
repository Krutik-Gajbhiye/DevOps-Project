class Question {
    constructor(questionText, options, correctAnswer) {
        this.questionText = questionText;
        this.options = options; // Array of options
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(selectedOption) {
        return selectedOption === this.correctAnswer;
    }
}

module.exports = Question;