//storing html elements into variables 

const quizCached = document.getElementById('quiz')
const resultCached = document.getElementById('result')
const submitBtn = document.getElementById('submit')


function quizLogic(){}
function theResult(){}

function score(){}

submitBtn.addEventListener('click', theResult);

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
    
    {
        question: "Which country has won the most number of world cups ?",
        answers: {
            a: "Brazil",
            b: "Germany",
            c: "Italy"

        }, rightAnswer: "a"

    },

    {
        question: "Which team has won the most nba titles upto this date?",
        answers:{
            a: "Lakers",
            b: "San Antonio Spurs",
            c: "Golden State Warriors"
        }, rightAnswer: "a"
    },
    {
            question: "How many oceans are there in this planet?",
        answers:{
        a: "6",
        b: "4",
        c: "5"
        }, rightAnswer: "c",
    },
]
