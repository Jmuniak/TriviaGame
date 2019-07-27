// Short Document Ready
$(function () {

    // Need a function for start btn click event that will call a few other functions into action.
    // 1st this should hide the start btn
    // 2nd then call another function named showEverythingQuestion Section.
    // 3rd it will also call the startCountDown function which will use a setTimer thing for 30 seconds.


    // Need a function for showEverythingQuestion Section
    // 1st the showEverything function will pull the first question (or random question that hasn't been selected yet if I can figure that out) from the API to populate the question display field. (This is a big challenge)
    // $.ajax({
    //     url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`,
    //     method: "GET"
    // }).then(function (response) {
    // console.log(response);
    // console.log(response.results[`1`]);
    // console.log(response.results[`1`].correct_answer);
    // console.log(response.results[`1`].incorrect_answers[0, 1, 2]);
    // console.log(response.results[`1`].question);
    // $(`.questionField`).text(response.results[`1`].question);
    // 2nd it pull from API to populate the option btns.(This is a big challenge)
    // Performing GET requests to the API and logging the responses to the console
    // $(`.btn1`).text(response.results[`1`].incorrect_answers[0]);
    // $(`.btn2`).text(response.results[`1`].incorrect_answers[1]);
    // $(`.btn3`).text(response.results[`1`].incorrect_answers[2]);
    // $(`.btn4`).text(response.results[`1`].correct_answer);
    // Need to fix the regex pieces
    // replace(response.results[`1`].incorrect_answers[0, 1, 2]) = "";

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


    // ORIGINAL //
    // $.ajax({
    //     url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`,
    //     dataType: 'json',
    //     method: "GET"
    // }).then(function (response) {
    //     // let questionOptions = {
    //     //     "question 1": "(response.results[`0`].question",
    //     //     "correct answer": "",
    //     return (response.results);
    // });

    // WORKING CODE at the console level //
    function getdata() {
        var queryURL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // response.results.forEach(elem => {
            //     let responseArray = $(); ... 

            // })

        });
        // console.log(response.results[0].question);
    };
    getdata();
    // Not working at the global level
    console.log(response.results[0].question);
    console.log(response.results[0].correct_answer);
    console.log(response.results[0].incorrect_answers);
    // This almost pulls it but I can't figure out how to drill into what should be data.responseJSON.results...
    // Maybe because the multpiple child thing
    // need to filter the getdata to only get the values from the Json object that I specify 
    // Need to use .append instead .text to fix the &quot; issue

    // $.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple")
    //     .then(function(response) {
    //         console.log(response)

    //     }




    // let data = getdata();
    // let test = JSON.stringify(data)

    // };








});


