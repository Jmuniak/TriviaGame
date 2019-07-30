// Short Document Ready
$(function () {
    // Make some lets here //

    let questions = 0;
    let thisQuestion = 0;
    let answers = [];
    let correctAnswer;
    let userAnswer;
    let triviaData = [];



    // Time related functions. NEEDS HELP ============================
    // Issues:
    // goes negative instead of stopping the clock.
    // needs a function for click handling to check the user's answer.
    // needs to have functionality to move to the next question and display properly.
    let seconds = 15;
    let intervalId;
    let $timeRemaining = document.getElementById("timeRemaining");

    function startCountDown() {
        decrement();

    };
    //  When the submit answer button gets clicked, run the stop function.
    $("#submitAnswerBtn").on("click", clearClock);

    function timeUp() {  // throws errors but does stop at 0....
        clearTimeout(timeRemaining);
        console.log("Time Up!");
        clearClock();
        clearInterval(intervalId);

        // then 
        // Move to next question....
        // startCountDown();
    };

    // function stop() { // doesnt actually stop...
    //     clearTimeout(timeRemaining);
    //     clearInterval(intervalId);
    //     console.log("Time stopped"); 
    //     console.log(seconds);
    //     startCountDown();
    // };

    function clearClock() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        // clearClock();
        seconds--;
        $($timeRemaining).html("<h5>" + "Time Left: " + seconds + "</h5>");
        //  Once seconds hits zero...
        if (seconds === 0) {
            //  ...run the timeUp function.
            timeUp();

            return false;
        }
        else {
            setTimeout(timeRemaining, 15000)
        };
    };


    // =============working on timer=======================


    // let $timeRemaining = document.getElementById("timeRemaining");
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

    // };

    // =================================================================



    // Main startGame functions

    // function correctGuess () {

    // }

    // function incorrectGuess () {

    // }



    let gameArray = [];
    let questionSection = document.getElementById("questionSection");
    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $(document).on('click', '#startButton', function startGame() {
        $(this).hide(); // hide the start button
        questionSection.classList.add("show-me"); // show the questionSection
        startCountDown(); // calls the startCountDown Function to begin the timer
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

                // need a click event to check their submitted answer against the correctanswer data
                // Function clickHandler for answer btns () (Not started)
                //                 Reset timer and wait 7 seconds before starting to count down again.
                //                 Check what answer btn was clicked. (Not started)
                //                 Run and if else to check against the correct answer data value for that Question. (Not started)	
                // 	Count their score for correct answers, increment the global var Score if correct.. (Not started)	
                // 	Display correct answer for 7 seconds or if they got it right do something fun.
                // 	After the 7 seconds, for loop to move onto the next question in the array without user input. (This is tough)
                //                 Populate question and answer options again. (Not started)
                //                 Else run EndGame if the array length has been reached.

                //                 Function EndGame()(Not started)
                //                 Reset Timer.
                //                 Display correct answer score to the user.
                //                 Display PlayAgain ? btn.

                // Function PlayAgain btn()(Not started)
                //                 Calls the startGame btn function again without refreshing the page.
                //                 Essentially is the StartGame Btn but it will say play again at this point instead of start game.

                //                 Write a Readme(not started)


            });
        };


    });


});

