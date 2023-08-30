var startBtn = document.querySelector("#start");
var questionElement = document.querySelector("#question");
var timer = document.querySelector("#Timer")
var nextbtn = document.querySelector('button[name="nextB"] ');
var answerButton = document.querySelector("#answer-buttons");
var answerState = document.querySelector("#qStatus");
let questionCount = document.querySelector(".questionCount")
let userInput = document.querySelector(".userInfo")
startBtn.addEventListener("click",startQuiz);
nextbtn.addEventListener("click",nextQuestion)
answerState.id = "hide"
var once = {
    once: true
}
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

let  timer2 = setInterval(timers,1000)

    function startQuiz(){
        currentQindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    
    showQuestion();
    //setInterval(timers,1000);
    
};
 

function showQuestion(){
    
    resetState();
    
    answerState.id = "hide"
    startBtn.id = "hide"
    var currentQuestion = questions[currentQindex];
    
   
    questionElement.innerHTML =  currentQuestion.question;
    

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.addEventListener('click',function(e) {
        clearInterval(timer2)
        if (this.value == "true" ){
            answerState.innerHTML = "Correct";
            resetState()
            score++;
            nextbtn.id = "show"
            
        } else {
            answerState.innerHTML = "Incorrect";
            resetState()
            nextbtn.id = "show"
        }
         answerState.id = "qStatus"


    }, once)
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.value = answer.correct;
    
    answerButton.appendChild(button);

    

   




  })};
  
function resetGame(){
    score = 0;
    currentQindex = 0;
}

function resetState(){
    seconds = 60;
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
        
        
    }
};

function endgame(){
    endScore =  (score / questions.length * 100).toFixed(2)
    answerState.innerHTML = `You scored: ${endScore}%`;
    nextbtn.id = "hide"
    questionElement.id = "hide";
    userInput.id = "show";
    questionCount.id =  "hide"
    

}
function nextQuestion(){
    currentQindex = currentQindex + 1;
    questionCount.innerHTML = `${currentQindex} / ${questions.length}  `
   if (currentQindex < questions.length){

    showQuestion()
   } else {
    endgame()
   }

    
}


let userScore = [];


// function userAnswer(){
//     if 

// }