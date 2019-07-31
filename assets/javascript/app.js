// Short Document Ready
$(function () {
    // Make some lets here //

    let questions = 0;
    let userAnswer;
    let triviaData = [];



    // Time related functions. 
    // Issues:
    // goes negative instead of stopping the clock.
    // needs a function for click handling to check the user's answer.
    // needs to have functionality to move to the next question and display properly.
    // =============working on timer=======================
    let $timeRemaining = $("#timeRemaining");
    let $submitAnswer = $("#submitAnswerBtn");
    let $startButton = $("#startButton");
    let seconds = 15;

    function countDown() {
        intervalId = setInterval(decrement, 1000);
        console.log("start interval counter");
    }

    function decrement() {
        seconds--;
        // console.log(seconds);
        if (seconds < 15) {
            // console.log(`We made it to the timereaming dom if`);
            $timeRemaining.html("<h5>" + "Time Left: " + seconds + "</h5>");
        }
        if (seconds < 1) {
            NewQuestion(gameArray);
        }
        // $submitAnswer.on("click", stop); // clicks multiple times.
    }

    function stop(results) {
        clearInterval(intervalId);
        console.log("stopped");
        $("#finalScore").text(`Your final score is ${score}/10`)
        if (results) {
            console.log("win");
            $("#finalScore").addClass(".show-me");
        }
        else {
            console.log("lose");
            questionSection.classList.add("hide-me")
        }

        // display the correct answer
        // wait 5 seconds but while it waits..
        // run NewQuestion();
        // hide the section Div;
        // show "total: " + score + "/10"(out of 10)
        // show startGamebtn


    }
    let score = 0;
    function guessCheck(data) {
        console.log(data);
        console.log("this is guess check");
        if (correctAnswer === data) {
            score++;
            NewQuestion(gameArray);
        }
        else {
            NewQuestion(gameArray);

        }
    }




    function NewQuestion(game) {
        if (gameArray.length > 0) {
            clearInterval(intervalId);
            seconds = 15;
            countDown();
            randomQuestion = Math.floor(Math.random() * game.length);
            console.log(game);
            console.log(game[randomQuestion]);
            thisQuestion = game[randomQuestion];
            $(`.questionField`).html(thisQuestion.question);
            correctAnswer = (thisQuestion.correct_answer);
            let random = Math.floor(Math.random() * 4) // instead of an array shuffle
            console.log(correctAnswer);
            answers = [];
            thisQuestion.incorrect_answers.forEach(element => {
                answers.push(element);
                console.log(element)
            });
            answers.splice(random, 0, correctAnswer);
            console.log(answers);
            $(`.answer1`).html(answers[0]).attr("data-value", answers[0]);
            $(`.answer2`).html(answers[1]).attr("data-value", answers[1]);
            $(`.answer3`).html(answers[2]).attr("data-value", answers[2]);
            $(`.answer4`).html(answers[3]).attr("data-value", answers[3]);

            gameArray.splice(randomQuestion, 1);
        }
        else {
            stop(true);
            questionSection.classList.remove("show-me");
            finalScore.classList.remove("hide-me");
        }
    }


    // Main startButton functions
    let randomQuestion;
    let thisQuestion = 0;
    let answers = [];
    let correctAnswer;
    let gameArray = [];
    let questionSection = document.getElementById("questionSection");
    let finalScore = document.getElementById("finalScore");
    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $startButton.on("click", function () {
        $(this).hide(); // hide the start button
        questionSection.classList.add("show-me"); // show the questionSection
        countDown(); // calls the CountDown Function to begin the timer
        // also need to navigate to index[0] and push out the data to the buttons
        {
            var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (renderGame) {
                // console.log(renderGame.results);
                gameArray = (renderGame.results);
                // console.log(renderGame);
                // console.log(gameArray[0].question)
                NewQuestion(gameArray)


                $(".btn").on('click', function () {
                    _this = $(this)
                    guessCheck(_this.attr("data-value"));
                    console.log(_this);

                })


                // Write a Readme(not started)


            });
        };


    });


});

