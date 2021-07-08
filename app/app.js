(function(){
    function quizLogic(){
      const output = [];
  
          // Checking each questions and showing their output 
    quizQuestions.forEach(
        (element, idx) => {
  
          const answers = [];
  
          // storing list of answers
          for(theAns in element.answers){
  
            // here the radio button was added so that the user could select the answers
            answers.push(
              `<label>
                <input type="radio" name="question${idx}" value="${theAns}">
                ${theAns} :
                ${element.answers[theAns]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          // here also the class slide is created so that we can slide questions and answers in display
          output.push(
            `<div class="slide">
              <div class="question"> ${element.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizCached.innerHTML = output.join('');
    }
  
    function theResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizCached.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      quizQuestions.forEach( (element, idx) => {
  
        // find selected answer
        const answerContainer = answerContainers[idx];
        const selector = `input[name=question${idx}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === element.rightAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[idx].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[idx].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultCached.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    //   if (numCorrect >=3){
    //       scoreCached.innerHTML = console.log("You passed")
        
    //   }
    //   else{
    //       scoreCached.innerHTML = console.log("You failed")
    //   }
    }
  
    function showSlide(n) {
      slides[presentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      presentSlide = n;
      if(presentSlide === 0){
        previousBtn.style.display = 'none';
      }
      else{
        previousBtn.style.display = 'inline-block';
      }
      if(presentSlide === slides.length-1){
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
      }
      else{
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(presentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(presentSlide - 1);
    }
  
    // Variables for the DOM manupulation
    const quizCached = document.getElementById('quiz');
    const resultCached = document.getElementById('results');
    const submitBtn = document.getElementById('submit');
    //questions and answers for the game
    const quizQuestions = [
        {
            question: "What is the capital of United States ?",
            answers: {
            a: "Kathmandu",
            b: "Washington",
            c: "New York"
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
    
    quizLogic();
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let presentSlide = 0;
  
    // Show the first slide
    showSlide(presentSlide);
  
    // Event listeners
    submitBtn.addEventListener('click', theResults);
    previousBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);
  })();
  