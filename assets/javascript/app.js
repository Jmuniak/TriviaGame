// Short Document Ready
$(function () {
    // Make some lets here //

    let questions = 0;
    let answers = [];
    let triviaData = [];

    //Timer code from Emily //
    let seconds = 30;
    let $timeRemaining = document.getElementById("timeRemaining");
    function startCountDown() {
        seconds--;
        $($timeRemaining).text(`Time Left: ${seconds}`);
        if (seconds === 0) {
            clearTimeout(timeRemaining);
            return false;
        }
        else {
            setTimeout(timeRemaining, 1000)
        }
    }
    let ajaxArray = [];
    let questionSection = document.getElementById("questionSection");
    // This click event runs the start game function. It hides the startButton on the HTML and then runs an AJAX Request
    $(document).on('click', '#startButton', function startGame() {
        $(this).hide();
        questionSection.classList.add("show-me");
        startCountDown();
        {
            var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (startGame) {
                console.log(startGame.results);
                ajaxArray.push(startGame.results);
                console.log(ajaxArray);
                // Woking up to here, hides the start button, shows the questionSection, runs the ajax, console.log the ajax response.
                let questionObj = $(ajaxArray); // transorming the array into an jQuery object
                console.log(questionObj);
                let qDcat = questionObj[0]; // from Yunus accessing the array when i created the array from the response.results created a key:0 + then the array
                console.log(qDcat);
                let question1 = qDcat[0].question; // creating a variable for question 1
                console.log(question1);


            });
        };
    });


});


        // From Bobby ====================
        // Not working, throwing a few errors about response, currentQuestionIndex, and potentially some jquery cdn issues===========
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

      // response.results.questions.forEach(elem => { })////////

                // make your functions require arguments and when you call them in your ajax response, pass the data inside
                // MY EXAMPLE: function addNumbers(a, b) { return a + b; ; } ..... x = addNumbers(1, 2);
                // so it looks like we get an object with a property of 'results' that contains an array of 10 objects
                // so i would make a fuction for a request for 10 questions for every new game. 
                // then I would push all 10 'results' into a global variable





