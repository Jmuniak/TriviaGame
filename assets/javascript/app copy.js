// Short Document Ready
$(function () {


    // NEW CODE BELOW THIS LINE ======================================================================
    let currentQuestionIndex = 0;

    const displayQuestions = function (questions) {
        // by using the (questions) data we passed as an argument when the function is called, we can access the data inside the function
        // renamed this input data from 'response.results' to question to avoid variable shadowing.  
        console.log(questions[currentQuestionsIndex]);
    };

    const startGame = function () {
        $.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple', function (respone) {
            displayQuestions(respone.results)
        });
    };

    // Make some lets here //
    let questions = 0;
    let answers = [];
    let triviaData = [];

    // From Elias //
    // let currentAnswerSet = triviaData[currentQuestion].incorrect_answers;
    // currentAnswerSet.push(triviaData[currentQuestion].correct_answer);
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

    function startClock() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        startClock();
        seconds--;
        $($timeRemaining).html("<h5>" + "Time Left: " + seconds + "</h5>");
        //  Once seconds hits zero...
        if (seconds === 0) {
            //  ...run the timeUp function.
            timeUp();
            return false;
            console.log()
        }
        // else {
        //     setTimeout(timeRemaining, 15000)
        // };
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

    //Timer code from Emily //
    let seconds = 30;

    function startCountDown() {

        seconds--;

        $($timer).text(`Time Left: ${seconds}`);

        if (seconds === 0) {
            clearTimeout(timer);
            return false;
        }
        else {
            setTimeout(countdown, 1000)
        }
    }



    // Get question into h3 class="questionField"// 
    let $questionField = $(".questionField");
    // Get question from index 0 of response.results

    // AJAX request //

    // WORKING CODE at the console level //
    function getData() {
        var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // triviaData = response;
            console.log(response.results);
            console.log(response.results[0].question);
            $(".questionField").html(response.results[0].question);
            $(`.btn1`).html(response.results[`0`].incorrect_answers[0]);
            $(`.btn2`).html(response.results[`0`].incorrect_answers[1]);
            $(`.btn3`).html(response.results[`0`].incorrect_answers[2]);
            $(`.btn4`).html(response.results[`0`].correct_answer);

            // response.results.questions.forEach(elem => { })////////

            // make your functions require arguments and when you call them in your ajax response, pass the data inside
            // MY EXAMPLE: function addNumbers(a, b) { return a + b; ; } ..... x = addNumbers(1, 2);
            // so it looks like we get an object with a property of 'results' that contains an array of 10 objects
            // so i would make a fuction for a request for 10 questions for every new game. 
            // then I would push all 10 'results' into a global variable

            // Need a function for start btn click event that will call a few other functions into action.
            // 1st this should hide the start btn // This is working now //
            $(document).on('click', '#startButton', function startGame() {
                $(this).hide();
                // 2nd then call another function named showEverythingQuestion Section.
                // Now add code to show the question section here.....
                // 3rd it will also call the startCountDown function which will use a setTimer thing for 30 seconds.
                // question timmer, show only one question durring this timeout or until the user clicks a submitAnswerButton
                // startCountDown();
                // $("#countDown").append((seconds));
                // $(".submitAnswerButton");
            });

        });

    };
    getData();




    // Need a function for showEverythingQuestion Section //
    // 1st the showEverything function will pull the first question (or random question that hasn't been selected yet if I can figure that out) from the API to populate the question display field. (This is a big challenge)
    // 2nd it pull from API to populate the option btns.(This is a big challenge)
    // Performing GET requests to the API and logging the responses to the console

    // NEED TO Push all incorrect and correct answers to an OPTIONS array. or current answer set. 

    // NEED TO randomly assign btns1-4 from opptions array. (how do I do this? with a shuffle array function)
    // click handler function to stop timer and check if the active radio button when submitAnswer is clicked is the (response.results[`1`].correct_answer);
    // if yes, increase correct answer score, say congrats, and move to next questions 
    // if wrong t hen increase incorrect answer score, say the correct answer was actually, and move to next question.
    // let questions = ;
    // [(response.results[`1`].correct_answer) + (response.results[`1`].incorrect_answers[0, 1, 2])]

    // 3rd the showEverything function will also show the submitAnswer btn (maybe fade that in after 3 seconds or a nice animate effect)
    // });
    // Need a function that handles click events on the option BTN section
    // this will activate only one btn at a time, likely though Bootstrap radio button stuff. (only one button active at a time is important)
    // if the user clicks another button then change the focus to that new btn they selected. 





    // OLD CODE ATTEMPTS BELOW THIS LINE ========================================================================
    // Need a function for showEverythingQuestion Section
    // 1st the showEverything function will pull the first question (or random question that hasn't been selected yet if I can figure that out) from the API to populate the question display field. (This is a big challenge)
    $.ajax({
        url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[`1`]);
        console.log(response.results[`1`].correct_answer);
        console.log(response.results[`1`].incorrect_answers[0, 1, 2]);
        console.log(response.results[`1`].question);
        $(`.questionField`).html(response.results[`1`].question);
        // 2nd it pull from API to populate the option btns.(This is a big challenge)
        // Performing GET requests to the API and logging the responses to the console
        $(`.btn1`).html(response.results[`1`].incorrect_answers[0]);
        $(`.btn2`).html(response.results[`1`].incorrect_answers[1]);
        $(`.btn3`).html(response.results[`1`].incorrect_answers[2]);
        $(`.btn4`).html(response.results[`1`].correct_answer);
        // Need to fix the regex pieces
        // replace(response.results[`1`].incorrect_answers[0, 1, 2]) = "";

        // NEED TO Push all incorrect and correct answers to an OPTIONS array. 
        // NEED TO randomly assign btns1-4 from opptions array. (how do I do this? with a shuffle array function)
        // click handler function to stop timer and check if the active radio button when submitAnswer is clicked is the (response.results[`1`].correct_answer);
        // if yes, increase correct answer score, say congrats, and move to next questions 
        // if wrong t hen increase incorrect answer score, say the correct answer was actually, and move to next question.
        // let questions = ;
        // [(response.results[`1`].correct_answer) + (response.results[`1`].incorrect_answers[0, 1, 2])]

        // 3rd the showEverything function will also show the submitAnswer btn (maybe fade that in after 3 seconds or a nice animate effect)
        // });
        // Need a function that handles click events on the option BTN section
        // this will activate only one btn at a time, likely though Bootstrap radio button stuff. (only one button active at a time is important)
        // if the user clicks another button then change the focus to that new btn they selected. 

        // 2nd it pull from API to populate the option btns.(This is a big challenge)

        // NEED TO randomly assign btns1-4 from opptions array. (how do I do this? with a shuffle array function)
        // click handler function to stop timer and check if the active radio button when submitAnswer is clicked is the (response.results[`1`].correct_answer);
        // if yes, increase correct answer score, say congrats, and move to next questions 
        // if wrong t hen increase incorrect answer score, say the correct answer was actually, and move to next question.
        // let questions = ;
        // [(response.results[`1`].correct_answer) + (response.results[`1`].incorrect_answers[0, 1, 2])]

        // 3rd the showEverything function will also show the submitAnswer btn (maybe fade that in after 3 seconds or a nice animate effect)


        // Click Handler Function

        // If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
        // After a few seconds, display the next question -- do this without user input.
        // function answerChecker() {}
        // The scenario is similar for wrong answers and time - outs.
        // If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
        // If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question.


        // Need a function that handles the submitAnswer btn click event (very complex, can this be done easier?)
        // this function will do a number of things.
        // 1st it will stop the countDown timer.
        // 2nd it will check the submitted Answer against the API *how do I do this?*
        // 3rd it runs and if else or switch statement 
        // if correct then display a positive message
        // and add 1 to the correctGuess score
        // else it's incorrect and will display a message telling the user the correct answer *how do I do this?*
        // and add 1 to the incorrectGuess score
        // 4th it will call the nextQuestion function 

        // Need a function that moves to the nextQuestion
        // 1st start the countDown Timer
        // 2nd run the showEverythingQuestion function to reuse that and to populate the question field and option buttons.

        // On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
        // function finalScreen() {
        // count the number of correctGuesses, then append the html "correct guesses: correctGuesses".
        // same for incorrectGuesses
        // would you like to restart the game?(without reloading the page).




    });

});
