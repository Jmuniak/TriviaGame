// Short Document Ready
$(function () {


    let $timeRemaining = $("#timeRemaining");
    let $startButton = $("#startButton");
    let score = 0;
    let seconds = 15;
    let randomQuestion;
    let thisQuestion = 0;
    let answers = [];
    let correctAnswer;
    let gameArray = [];
    let $questionSection = $("#questionSection");
    let $finalScore = $("#finalScore");

    function countDown() {
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        seconds--;
        if (seconds < 15) {
            $timeRemaining.html(`<h5>Time Left: ${seconds}</h5>`);
        }
        if (seconds < 1) {
            newQuestion(gameArray);
        }
    };

    function stop(results) {
        clearInterval(intervalId);
        console.log("stopped");
        $("#finalScore").text(`Your final score is ${score}/10`)
        if (results) {
            // console.log("win");
            $finalScore.addClass(".show-me");
        }
        else {
            // console.log("lose");
            $questionSection.addClass("hide-me")
        }
    };

    function guessCheck(data) {
        // console.log(data);
        // console.log("this is guess check");
        if (correctAnswer === data) {
            score++;
            newQuestion(gameArray);
        }
        // Add
        // hide the section Div;
        // display the correct answer inbetween questions
        // wait 5 seconds but while it waits run NewQuestion
        else {
            newQuestion(gameArray);
        }
    };

    function newQuestion(game) {
        if (gameArray.length > 0) {
            clearInterval(intervalId);
            seconds = 15;
            countDown();
            randomQuestion = Math.floor(Math.random() * game.length);
            // console.log(game);
            // console.log(game[randomQuestion]);
            thisQuestion = game[randomQuestion];
            $(`.questionField`).html(thisQuestion.question);
            correctAnswer = (thisQuestion.correct_answer);
            let random = Math.floor(Math.random() * 4) // instead of an array shuffle
            // console.log(correctAnswer);
            answers = [];
            thisQuestion.incorrect_answers.forEach(element => {
                answers.push(element);
                // console.log(element);
            });
            answers.splice(random, 0, correctAnswer);
            // console.log(answers);
            $(`.answer1`).html(answers[0]).attr("data-value", answers[0]);
            $(`.answer2`).html(answers[1]).attr("data-value", answers[1]);
            $(`.answer3`).html(answers[2]).attr("data-value", answers[2]);
            $(`.answer4`).html(answers[3]).attr("data-value", answers[3]);
            gameArray.splice(randomQuestion, 1);
        }
        else {
            stop(true);
            $questionSection.removeClass("show-me");
            $finalScore.removeClass("hide-me");
            $startButton.show();
        }
    };

    // Main startButton functions

    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $startButton.on("click", function () {
        $(this).hide();
        score = 0;
        gameArray = [];
        answers = [];
        $finalScore.addClass("hide-me");
        $questionSection.addClass("show-me");
        countDown();
        {
            let queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (renderGame) {
                gameArray = (renderGame.results);
                newQuestion(gameArray)
                $(".btn").on('click', function () {
                    _this = $(this)
                    guessCheck(_this.attr("data-value"));
                    // console.log(_this);
                });
            });
        };
    });
});

