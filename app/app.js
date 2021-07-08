//storing html elements into variables 

const quizCached = document.getElementById('quiz')
const resultCached = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const previousBtn = document.getElementsById('previous')
const nextBtn =  document.getElementsById('next')
const slideCached = document.querySelectorAll('.slide')

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

function quizLogic(){

    const output = []
    // checking each questions and showing their output

    quizQuestions.forEach((element,idx) => {
        const answers = [];
        // here we store the list of answers
        for (theAns in element.answers){
            answers.push(
                `<label>
                 <input type ='radio' name='question${idx}' value='${theAns}'>${theAns}:
                ${element.answer[theAns]}
                </label>`
            );
        }
        
        output.push(
            `<div class = "slide">
                <div class='question'> ${element.question}</div>
                <div class = 'answers'>${answers.join('')}</div>
            </div>`
        )
})
        quizCached.innerHTML = output.join('')

    
}

function theResult(){
    const allAnswers = quizCached.querySelectorAll('.answers')

    //tracking the users answers and initializing to 0
    let totCorrect = 0;

    quizQuestions.forEach((element,idx)=>{
        // to get the selected answer from user // idx here is question number
        const eachAnswer = allAnswers[idx]

        // Css selector to check which radio button was checked
        const selector = `input[name=question${idx}]:checked`;
        const theUserAnswer = (eachAnswer.querySelector(selector) || {}).value


        //to check if the answer is correct 

        if (theUserAnswer === element.rightAnswer){
            totCorrect++
            allAnswers[idx].style.color = 'green'

        }
        else{
            allAnswers[idx].style.color ='red'
        }


    })
    resultCached.innerHTML = `${totCorrect} out of ${quizQuestions.length}`

}

let presentSlide = 0;
function slideClass(a){
    // hiding the present slide by removing the active slide

    slideCached[presentSlide].classList.remove('active-slide')
    //showing the new slide by adding the active slide
    slideCached[a].classList.add('active-slide')
    //updating the slide number
    presentSlide = a

    //this condition hides the previous slide button if we onto
    //next slide button
    if (presentSlide === 0){
        previousBtn.style.display = 'none'
    }
    else{
        previousBtn.style.display= 'inline-block'

    //this slide shows the submit button if we are on the last slide
    }
    if (presentSlide === slideCached.length-1){
        nextBtn.style.display='none'
        submitBtn.style.display ='inline-block'
    }
    else{
        nextBtn.style.display ='inline-block'
        submitBtn.style.display='none'
    }
    
}
