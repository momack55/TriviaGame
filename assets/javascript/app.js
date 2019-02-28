$(document).ready(function () {
    //button to start game when user clicks
    $("#start-button").on("click", gameState.startTimer);
});

var gameState = {

    //set timer for 60 seconds
    timeRemaining: 40,

    //hide start & page start timer
    startTimer: function () {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#start-page").hide();
        trivia.displayQuestions();
    },
    //stop timer at 0
    countdown: function () {
        gameState.timeRemaining--;
        $("#timer").text("Time Remaining: " + gameState.timeRemaining);
        if (gameState.timeRemaining === 0) {
            gameState.stopTimer();
            $("#timer").empty();
        }
    },

    // stop timer & check answers
    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },

    //clear questions and show results page
    showEndPage: function (numCorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questions-box").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answers: " + numCorrect);
        $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
        $("#unanswered").text("Unanswered Questions: " + numUnanswered);
    }
}


var trivia = {

    //show questions from array of questions
    displayQuestions: function () {
        var divContainer = $("#questions-box");
        var answerGroup = $(".form-check");

        for (var i = 0; i < questionArray.length; i++) {

            divContainer.append('<div id="question">' + questionArray[i].question + '</div>');
            var answer1 = questionArray[i].answers[0];
            var answer2 = questionArray[i].answers[1];
            var answer3 = questionArray[i].answers[2];

            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');

        }

        var doneButton = '<button class= "btn btn-primary" id="done-button" type="submit">Done</button>';
        divContainer.append(doneButton);
        $("#done-button").on("click", gameState.stopTimer);

    },

    //check answers
    checkAnswers: function () {
        var correctAnswer;
        var userAnswer;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numUnanswered = 0;



        for (var i = 0; i < questionArray.length; i++) {
            correctAnswer = questionArray[i].correct;
            userAnswer = $('input[id=radio' + i + ']:checked + label').text();

            if (userAnswer === correctAnswer) {
                numCorrect++;
            } else if (userAnswer === "") {
                numUnanswered++;
            } else if (userAnswer !== correctAnswer) {
                {
                    numIncorrect++;
                }
            }
        }
        gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);

    },
}
// array of questions and answer options

var questionArray = [
    {
        question: "How many friends were there originally supposed to be?",
        answers: [ "6", "5", "4"],
        correct: "4"
    },
    {
        question: "Which actor auditioned for the role of Phoebe?",
        answers: ["Kathy Griffin", "Natalie Portman", "Charlize Theron"],
        correct: "Kathy Griffin"
    },
    {
        question: "Who is the only cast member that did not recieve an Emmy nod for her work on the show?",
        answers: ["Jennifer Anniston", "Courtney Cox", "Lisa Kudrow"],
        correct: "Courtney Cox"
    },
    {
        question: "How many times was Ross divorced?",
        answers: ["2", "4", "3"],
        correct: "3"
    },
    {
        question: "Who was the role of Ross originally written for? ",
        answers: ["Eric McCormick", "John Cryer", "David Schwimmer"],
        correct: "David Schwimmer"
    },
    {
        question: "Which actor played Rachel?",
        answers: ["Jennifer Anniston", "Courtney Cox", "Lisa Kudrow"],
        correct: "Jennifer Anniston"
    },
    {
        question: "Which Actor Played Monica?",
        answers: ["Jennifer Anniston", "Courtney Cox", "Lisa Kudrow"],
        correct: "Courtney Cox"
    },
    {
        question: "Which actor played Phoebe?",
        answers: ["Jennifer Anniston", "Courtney Cox", "Lisa Kudrow"],
        correct: "Lisa Kudrow"
    },
]