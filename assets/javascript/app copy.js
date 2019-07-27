// Short Document Ready
$(function () {


    // Need a function for start btn click event that will call a few other functions into action.
    // 1st this should hide the start btn
    // 2nd then call another function named showEverythingQuestion Section.
    // 3rd it will also call the startCountDown function which will use a setTimer thing for 30 seconds.

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
        $(`.questionField`).text(response.results[`1`].question);
        // 2nd it pull from API to populate the option btns.(This is a big challenge)
        // Performing GET requests to the API and logging the responses to the console
        $(`.btn1`).text(response.results[`1`].incorrect_answers[0]);
        $(`.btn2`).text(response.results[`1`].incorrect_answers[1]);
        $(`.btn3`).text(response.results[`1`].incorrect_answers[2]);
        $(`.btn4`).text(response.results[`1`].correct_answer);
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

        // 10:38 trying to create an array from the API Response
        $.ajax({
            url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`,
            dataType: 'json',
            method: "GET"
        }).then(function (response) {
            // let questionOptions = {
            //     "question 1": "(response.results[`0`].question",
            //     "correct answer": "",
            console.log(response.results);
        });
        // options.push(`(response.results[`1`].incorrect_answers[0]), (response.results[`1`].incorrect_answers[1]), (response.results[`1`].incorrect_answers[2]), (response.results[`1`].correct_answer);`);

        // console.log(questionOptions);

        // console.log(options);
        // console.log(response.results[`1`].correct_answer);
        // console.log(response.results[`1`].incorrect_answers[0, 1, 2]);
        // console.log(response.results[`1`].question);
        // $(`.questionField`).text
        // 2nd it pull from API to populate the option btns.(This is a big challenge)
        // Performing GET requests to the API and logging the responses to the console
        // $(`.btn1`).text(response.results[`1`].incorrect_answers[0]);
        // $(`.btn2`).text(response.results[`1`].incorrect_answers[1]);
        // $(`.btn3`).text(response.results[`1`].incorrect_answers[2]);
        // $(`.btn4`).text(response.results[`1`].correct_answer);
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




        // WORKING ON THIS 10:09pm
        // Click Handler Function
        // function handleClick() {
        // something smart to handle clicks and make sure they select one answer from buttons 1-4 and then click submitAnswerButton
        // $(`container.optionsBtns`).hasClass(`active`).on(`click`){
        // if $(this) === (response.results[`1`].correct_answer) then log correct
        // else $(this) != (response.results[`1`].correct_answer) then log incorrect
        // }
        // Just for noww...
        // if ($(`.btn4`) === 
        // }
        // If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
        // After a few seconds, display the next question -- do this without user input.
        // function answerChecker() {


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



        // result["0"];



        // question timmer, show only one question durring this timeout or until the user clicks a submitAnswerButton
        // $(div.countDown).setTimeout;
        // $(div.submitAnswerButton);



        // On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
        // function finalScreen() {
        // count the number of correctGuesses, then append the html "correct guesses: correctGuesses".
        // same for incorrectGuesses
        // would you like to restart the game?(without reloading the page).




    });

    // let correctScore = correctGuess total;
    // let incorrectScore = incorrectGuess total;

    // the count down object
    // let countDown = {
    //     time: 0,
    //     correctGuess: 0,
    //     incorrectGuess: 0,
    // }


    // API for Medium level multipule choice video game questions src= https://opentdb.com/api_config.php
    // https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple


    // starting the game
    // $("#startButton").on('click', function () {
    // $("#startButton").slideToggle(300);
    // countDown.setTimeout(() => {
    // }, 30000);
    // });
    // startGame();
    // use jQuery to manipulate the HTML, start the timer, produce a question, populate the buttons with answers.


    // };

    // };

});
