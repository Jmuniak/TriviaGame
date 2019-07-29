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
    //  When the submit answer button gets clicked, run the stop function.
    $("#submitAnswerBtn").on("click", stop);

    function timeUp() {
        // clearTimeout(timeRemaining);
        alert("Time Up!");
        stop();
        clearInterval(intervalId);
        startCountDown();
        // Move to next question....
    };
    function stop() {
        clearTimeout(timeRemaining);
        clearInterval(intervalId);
        alert("Time stopped"); // doesnt actually stop...
        console.log(seconds);

        startCountDown();
    };
    function clearClock() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        clearClock();
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


    let $timeRemaining = document.getElementById("timeRemaining");
    function startCountDown() {
        decrement();


    };

    // ===================================

    // Main startGame function
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

                //     function shuffle(array) {
                //     for (let i = array.length - 1; i > 0; i--) {
                //         let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
                //         [array[i], array[j]] = [array[j], array[i]]; // swap elements
                //     }
                // } 

                // need a click event to check their submitted answer against the correctanswer data
                // 


            });
        };


    });

    console.log(gameArray);

});

