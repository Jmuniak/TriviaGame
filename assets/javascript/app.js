// Short Document Ready
$(function () {

    // let questions = [];
    // let correctScore = 0;
    // let incorrectScore = 0;

    // the count down object
    let countDown = {
        time: 0,
        correctGuess: 0,
        incorrectGuess: 0,
    }


    // API for Medium level multipul choice video game questions src= https://opentdb.com/api_config.php
    // https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple


    // starting the game
    $("#startButton").click(function () {
        $(this).toggle(1000);
        countDown.setTimeout(() => {
        }, 30000);
    }); startGame();
    // use jQuery to manipulate the HTML, start the timer, produce a question, populate the buttons with answers.
};

// question timmer, show only one question durring this timeout or until the user clicks a submitAnswerButton
// $(div.countDown).setTimeout;
// $(div.submitAnswerButton);

// Click Handler Function
function handleClick() {
    // something smart to handle clicks and make sure they select one answer from buttons 1-4 and then click submitAnswerButton
    // If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
    // After a few seconds, display the next question -- do this without user input.
    function answerChecker() {

    }
}


// The scenario is similar for wrong answers and time - outs.
// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
function finalScreen() {
    // count the number of correctGuesses, then append the html "correct guesses: correctGuesses".
    // same for incorrectGuesses
    // would you like to restart the game?(without reloading the page).

};


});