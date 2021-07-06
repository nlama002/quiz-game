//console.log("nima")

const quizCached = document.getElementById("#quiz")
const resultCached = document.getElementById("#results")
const submitCached = document.getElementById("#submit")
const endGameCached =  document.getElementById("#EndGame")


function quizLogic(){
    const output = [];
    quizQuestions.forEach((quest, idx) => 
    {
        const ans = [];
        for (option in quest.answers) {
            ans.push(
                `<label>
                <input type = "radio" name="question${idx}" value = "${option}"> ${option}:
                ${quest.answers[option]}
                </label>`

            )

        }
        //adding the question and answer to the output
        output.push(
            `<div class = "question"> ${quest.question} </div>
            <div class = "answers">${ans.join('')} </div>`
        );
    })
        quizCached.innerHTML = output.join('');

    }

function theResult(){

}


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
    }
   
]