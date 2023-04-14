var startBtn = document.querySelector("#start");
var questionElement = document.querySelector("#question");
var timer = document.querySelector("#Timer")
var nextbtn = document.querySelector("#next");
var answerButton = document.querySelector("#answer-buttons");
startBtn.addEventListener("click",startQuiz);
var questions = [ 
    {
        question: " Commonly used data types do not include?",
        answers: [
            {text: "Alerts" , correct: true},
            {text: "Booleans" , correct: false},
            {text: "numbers" , correct: false},
            {text: "Strings" , correct: false},
            

        ]

    },
    {
        question: "The condition of a if/else statement is encolsed in ___?",
        answers: [
            {text: "Quotes" , correct: false},
            {text: "Curly braces" , correct: false},
            {text: "parenthesis" , correct: true},
            {text: "square brakets" , correct: false},
        ]

    },
    {
        question: "Arrays in javascript can be used to store ___?",
        answers: [
            {text: "numbers and strings" , correct: false},
            {text: "other arrays" , correct: false},
            {text: "booleans ", correct: false},
            {text: "All of the above" , correct: true},
        ]

    }

   
]
var currentQindex = 0;
var score = 0;
var seconds = 60;
function startQuiz(){
    currentQindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
    setInterval(timers,1000);
    //console.log("hit")
    console.log (seconds)
};


function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQindex];
    var questionNo = currentQindex + 1;
    startBtn.style.display= 'none';
    
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    console.log(answer.text);
    console.log(button)
  });
  








}
function resetState(){
    nextbtn.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}



var timers = function timer1(){
    if (seconds > 0){
        seconds--;
    
    
    timer.innerHTML= "Timer: " + seconds;}
    else if (seconds == 0 ){
        alert("times up");
        console.log(seconds)
        
    }
};