// Short Document Ready
$(function () {
    // Make some lets here //

    // let questions = 0;
    // let answers = [];
    // let triviaData = [];



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
        clearTimeout(timeRemaining);
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
    let ajaxArray = [];
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
            }).then(function (startGame) {
                console.log(startGame.results);
                ajaxArray.push(startGame.results);
                // Woking up to here, hides the start button, shows the questionSection, runs the ajax, console.log the ajax response.
                let questionObj = $(ajaxArray); // transorming the array into an jQuery object
                console.log(questionObj);
                let questionCat = questionObj[0]; // Where this gets confusing again... from Yunus accessing the array when i created the array from the response.results created a key:0 + then the array
                console.log(questionCat);
                let question1 = questionCat[0].question; // creating a variable for question 1
                console.log(question1);
                // NEXT UP - figure out populating the answer buttons and refer to pseudo code
                let correctAnswer1 = questionCat[0].correct_answer;
                console.log(correctAnswer1);
                let incorrectAnswers1 = questionCat[0].incorrect_answers;
                console.log(incorrectAnswers1);


            });
        };
    });
    console.log(ajaxArray);

});

