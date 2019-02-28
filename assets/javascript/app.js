$(document).ready(function ()){

    $("#start-button").on("click", gameState.startTimer);
});

var gameState = {

    timeRemaining: 60,

    startTimer: function () {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#start-page").hide();
        trivia.displayQuestions();
    },

    countdown: function () {
        gameState.timeRemaining--;
        $("#timer").text("Time Remaining: " + gameState.timeRemaining);
        if (gameState.timeRemaining-- - 0) {
            gameState.stopTimer();
            $("#timer").empty();
        }
    },

    // stop timer and check answers
    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },

    //clear questions and show end page with results
    shoEndPage: function (numCorrect, numWrong, numBlank) {
        $("#end-page").show();
        $("#questions-box").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answers (Woo-hoo!): " + numCorrect);
        $("#incorrect-answers").text("Incorrect answers (D'oh!): " + numIncorrect);
        $("#unanswered").text("Skipped questions (Meh): " + numUnanswered);
    }
}


var trivia = {
    //show questions from array of questions
    displayQuestions: function () {
        var divContainer = $("#questions-box");
        var answerGroup = $(".form-check");
        divContainer.append('<h2> Answer the Following Questions: </h2>');

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
        $("#done-button").on(click, gameState.stopTimer);

    },

    checkAnswers: function(){
        var correctAnswer;
        var userAnswer;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numBlank = 0;

        for (var i = 0; i< questionArray.length; i++) {
            correctAnswer = questionArray[i].correct;
            userAnswer = $('input[id=radio' + i + ']:checked + label').text();
            
        }
    }




}