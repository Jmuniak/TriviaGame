// Short Document Ready
$(function () {
    // Make some lets here //

    let questions = 0;
    let answers = [];
    let triviaData = [];
    let questionSection = document.getElementById("questionSection");

    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $(document).on('click', '#startButton', function startGame() {
        $(this).hide();
        questionSection.classList.add("show-me");
        {
            var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (startGame) {
                console.log(startGame.results);
                createCategory(response); //create category from the response

                questionArray.push(response.results); //Add the data to a question array
            });
            // Woking up to here, hides the start button, shows the questionSection, runs the ajax, console.log the ajax response.
            // Not woking yet
            let questions = function (questions) {
                console.log(questions);
            }

        });

};
        // startGame();



        // From Bobby ======Not working, throwing a few errors about response, currentQuestionIndex, and potentially some jquery cdn issues===========
        // const displayQuestions = function (questions) {
        //     // by using the (questions) data we passed as an argument when the function is called, we can access the data inside the function
        //     // renamed this input data from 'response.results' to question to avoid variable shadowing.  
        //     console.log(questions[currentQuestionsIndex]);
        // };

        // const startGame = function () {
        //     $.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple', function (response) {
        //         displayQuestions(response.results)

        //     });
        //     console.log(response.results);
        // };
        // startGame();
        // From Bobby =======================================

        // /////////////////////////////////////////////////////////////////////////
        // Older code, gets the console log to work ============= 
        // Needs to be fixed with the input from Bobby(see slack), Elias(see slack and app copy.js file), and Emily(see slack)

        // WORKING CODE at the console level //
        // function getData() {
        //     var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {

        //         // triviaData = response;
        //         console.log(response.results);


        //         // response.results.questions.forEach(elem => { })////////

        //         // make your functions require arguments and when you call them in your ajax response, pass the data inside
        //         // MY EXAMPLE: function addNumbers(a, b) { return a + b; ; } ..... x = addNumbers(1, 2);
        //         // so it looks like we get an object with a property of 'results' that contains an array of 10 objects
        //         // so i would make a fuction for a request for 10 questions for every new game. 
        //         // then I would push all 10 'results' into a global variable

        //         // Need a function for start btn click event that will call a few other functions into action.
        //         // 1st this should hide the start btn // This is working now //
        //         $(document).on('click', '#startButton', function startGame() {
        //             $(this).hide();
        //             // 2nd then call another function named showEverythingQuestion Section.
        //             // Now add code to show the question section here.....
        //             // 3rd it will also call the startCountDown function which will use a setTimer thing for 30 seconds.
        //             // question timmer, show only one question durring this timeout or until the user clicks a submitAnswerButton
        //             // startCountDown();
        //             // $("#countDown").append((seconds));
        //             // $(".submitAnswerButton");
        //         });

        //     });

        // };
        // getData();




    });
});

