let button = document.querySelector("button");
let questionField = document.querySelector("#question-box");
let answerDiv = document.querySelector("#answer");

let answer = ["Answer 1",
"Answer 2",
"Answer 3",
"Answer 4",
"Answer 5"];

//add a click event to the button
let displayAnswer = button.addEventListener("click", function(){
    //Generate random number from the number of items in the array
    answerDiv.innerText = (answer[Math.floor(Math.random() * answer.length)])
    });
    // console.log(displayAnswer);;

// console.log(displayAnswer[Math.floor(Math.random() * answer.length)])
