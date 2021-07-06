//console.log("nima")

const quizCached = document.getElementById("#quiz")
const resultCached = document.getElementById("#results")
const submitCached = document.getElementById("#submit")
const endGameCached =  document.getElementById("#EndGame")


function quizLogic(){
    
}

function theResult()


//display quiz right away
quizLogic();

submitCached.addEventListener('click', theResult)


//showing the quiz questions

const quizQuestions = [
    {
        question: "What is the capital of Nepal ?",
        answers: {
        a: "Kathmandu",
        b: "Washington",
        c: "Kolkata"
             }, rightAnswer: "a"
    },

    {
        question: "Which one of them is one of the seven wonders of the world?",
        answers: {
            a: "Empire State Bulding",
            b: "Great wall of China",
            c: "lala land",
        }, rightAnswer: "b"

    },
   
]