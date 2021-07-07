//console.log("nima")

(function(){
    // Functions
    function quizLogic(){
      const output = [];
      questions.forEach(
        (currentQuestion, questionIdx) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(ans in currentQuestion.answers){
  
            // ...add an HTML radio button
          answers.push(
              `<label>
                <input type="radio" name="question${questionIdx}" value="${ans}">
                ${ans} :
                ${currentQuestion.answers[ans]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      grid.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = grid.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      questions.forEach( (currentQuestion, questionIdx) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionIdx];
        const selector = `input[name=question${questionIdx}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionIdx].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionIdx].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }
  
    
    function showNextSlide() {
      showSlide(currentSlide + 1);
    } 
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const grid = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const questions = [
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
   

    ];
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  
    quizLogic();

    
  })();
  