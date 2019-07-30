// Short Document Ready
$(function () {
    // Make some lets here //

    let questions = 0;
    let thisQuestion = 0;
    let answers = [];
    let correctAnswer;
    let userAnswer;
    let triviaData = [];



    // Time related functions. 
    // Issues:
    // goes negative instead of stopping the clock.
    // needs a function for click handling to check the user's answer.
    // needs to have functionality to move to the next question and display properly.
    // =============working on timer=======================
    // countDown () {
    // seconds--;
    // if (seconds < 15) {
    // display the time.. $($timeRemaining).html("<h5>" + "Time Left: " + seconds + "</h5>");
    // }
    // if (seconds < 1 || user clicks submit) {
    // run stop();
    // }
    // }

    // stop() {
    // display the correct answer
    // wait 5 seconds but while it waits..
    // run guessCheck();
    // guessCheck () {
    // if (correct answer score++;)
    // if ( at end of qIndex.length) then run endGame(); 
    // else ( More in qIndex) then run nextQuestion();
    // }
    // }

    // nextQuestion () {
    // move to next index in qIndex;
    // reset seconds to 15;
    // run countDown();
    // }

    // endGame () {
    // hide the section Div;
    // show "total: " + score + "/10"(out of 10)
    // show startGame
    // }

    // ================================================================================================

    // NOT WORKING CODE BELOW
    // let $timeRemaining = document.getElementById("timeRemaining");
    // let seconds = 15;

    // function startCountDown() {
    //     decrement();


    // function stop() {
    //     clearTimeout(seconds);
    //     console.log("Time stopped"); // doesnt actually stop...
    //     console.log(seconds);
    //     // Move to next question.....

    //     startCountDown();
    // };
    // function clearClock() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }

    // function timeUp() {
    //     clearClock();
    //     $timeRemaining.hide();
    // }

    // function decrement() {
    //     clearClock();
    //     seconds--;
    //     $($timeRemaining).html("<h5>" + "Time Left: " + seconds + "</h5>");
    //     //  Once seconds hits zero...
    //     if (seconds === 0) {
    //         //  ...run the timeUp function.
    //         return false;
    //         timeUp();
    //     }
    //     else {
    //         setTimeout(timeRemaining, 15000)
    //     };
    // };

    // =================================================================



    // Main startButton functions


    let gameArray = [];
    let questionSection = document.getElementById("questionSection");
    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $(document).on('click', '#startButton', function startClock() {
        $(this).hide(); // hide the start button
        questionSection.classList.add("show-me"); // show the questionSection
        countDown(); // calls the CountDown Function to begin the timer
        // also need to navigate to index[0]
        {
            var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (renderGame) {
                console.log(renderGame.results);
                gameArray = (renderGame.results);
                console.log(renderGame);
                console.log(gameArray[0].question)
                $(`.questionField`).html(gameArray[thisQuestion].question); // need to increment on this.
                correctAnswer = (gameArray[thisQuestion].correct_answer);
                console.log(correctAnswer);
                answers.push(correctAnswer);
                gameArray[thisQuestion].incorrect_answers.forEach(element => {
                    answers.push(element);
                });
                console.log(answers);
                $(`.answer1`).html(answers[0]);
                $(`.answer2`).html(answers[1]);
                $(`.answer3`).html(answers[2]);
                $(`.answer4`).html(answers[3]);
                // need to shuffle the answers array before hitting html
                // need to reset values of the answer btns before moving to next question

                //     function shuffle(array) // might not be the best way to do this. I think 
                // {
                //     for (let i = array.length - 1; i > 0; i--) {
                //         let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
                //         [array[i], array[j]] = [array[j], array[i]]; // swap elements
                //     }
                // } 


                //                 Write a Readme(not started)


            });
        };


    });


});

