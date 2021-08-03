//define blank crystal ball image
const startImage = document.getElementById("crystalBall");

crystalBall.src = "./img/crystal-ball.png";

//allows you to access the button 
let button = document.querySelector("button");

//allows you to access the text box
let questionField = document.querySelector("#question-box");

//allows you to access the div where answers are displayed
let answerDiv = document.querySelector("#answer");

//create an image array for answers
let answer = ['./img/magic8ball-1.png',
'./img/magic8ball-2.png',
'./img/magic8ball-3.png'];

//add a click event to the button
let displayAnswer = button.addEventListener("click", function(){
    //Generate and display a random answer image from the array
    document.getElementById("crystalBall").src = (answer[Math.floor(Math.random() * answer.length)])
    });


