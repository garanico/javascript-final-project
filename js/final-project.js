//Define blank crystal ball image
const startImage = document.getElementById("crystalBall");
crystalBall.src = "./img/crystal-ball.png";

//Create a variable button allows you to access the button 
let button = document.querySelector("button");

//Create variable answerDiv allows you to access the div where answers will be displayed
let answerDiv = document.querySelector("#answer");

//Create an image array for answers
let answer = [
'./img/ball-1.png',
'./img/ball-2.png',
'./img/ball-3.png',
'./img/ball-4.png',
'./img/ball-5.png',
'./img/ball-6.png',
'./img/ball-7.png',
'./img/ball-8.png',
'./img/ball-9.png'
];


//Confirms if content was entered into the text input field.
let getAnswer= button.addEventListener("click", function(){
    document.querySelector("questionBox"); 
    getAnswer = input.value;
     if(getAnswer == "")
     alert("What\'s your inquiry?");
     else{
         //Generate and display a random answer image from the array
    document.getElementById("crystalBall").src = (answer[Math.floor(Math.random() * answer.length)]);
    //clears text box after button click
   document.getElementById("input").value = "";
     }
 });

