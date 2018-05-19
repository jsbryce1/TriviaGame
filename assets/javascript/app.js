

//## questions to be ised in the game
var questions = [{
    question: " what is the largest city in the world? ",
    answers: [" Tokyo ", " New York ", " Hong Kong "],
    correctAnswer: " Tokyo "
}, {
    question: " what is the area of Tokyo popular for anime, video games, manga, etc. ",
    answers: [" Kyoto ", " osaka ", " akihabara "],
    correctAnswer: " akihabara "
}, {
    question: " When you first meet a Japanese person, you should call them by their _____ name. ",
    answers: [" first ", " last ", " middle "],
    correctAnswer: " last "
}, {
    question: " Is it acceptable to slurp noodles in japan? ",
    answers: [" yes ", " no ", " sometimes "],
    correctAnswer: " yes "
}, {
    question: " The deeper the bow, the more _____ it is ",
    answers: [" rude ", " polite ", " sinister "],
    correctAnswer: " polite "
}, {
    question: " If someone at your school is your senpai, then they are probably ____ than you ",
    answers: [" older ", " younger ", " taller "],
    correctAnswer: " older "
}, {
    question: " what is Japanese rice wine called? ",
    answers: [" Saki", " sako ", " sake "],
    true: " sake "
}]

$("#start").on("click", function () {
    answers.start();
})

$(document).on("click", "#end", function () {
    answers.results();
})
console.log(questions)
//## keeps track of correct and incorrect answers, sets and decresese the timer by one second.
var answers = {
    incorrect: 0,
    correct: 0,
    counter: 30,
    //## decrease the counter by one and changes the number
    timer: function () {
        answers.counter--;
        $("#counter").html(answers.counter);
        if (answers.counter === 0) {
            answers.results();
        }
    },
    start: function () {
        //## sets the timer
        timer = setInterval(answers.timer, 1000);
        $("#container").prepend("<h3>Countdown: <span id='counter'> 30 </span> Seconds </h3> ");
        //## removes the start button after its pressed 
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#container").append('<h2>' + questions[i].question + '</h2>');
            for (var p = 0; p < questions[i].answers.length; p++) {
               //## adds the radio type to each question and the value of the answer
                $("#container").append('<input id="counter" type="radio" name="question' + '-' + i + '" value="' +
                    questions[i].answers[p] + '">' + questions[i].answers[p]);
            }
        }
    },
//## look through the element in the questions, checks for correct or incorrect answer and adds 1 to the score.
  results: function () {

      $.each($("input[name='question-0']:checked"), function () {
          if ($(this).val() == questions[0].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-1']:checked"), function () {
          if ($(this).val() == questions[1].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-2']:checked"), function () {
          if ($(this).val() == questions[2].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-3']:checked"), function () {
          if ($(this).val() == questions[3].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-4']:checked"), function () {
          if ($(this).val() == questions[4].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-5']:checked"), function () {
          if ($(this).val() == questions[5].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      $.each($("input[name='question-6']:checked"), function () {
          if ($(this).val() == questions[6].correctAnswer) {
              answers.correct++;
          } else {
              answers.incorrect++;
          }
      });
      this.endResult();

  },
    //## displays the final results of the guesses
    endResult: function () {

        $("#container").html("<h2>Result! </h2>");
        $("#container").append("<h3>Legit answers = " + this.correct + ", Max = 7 </h3>");
        $("#container").append("<h3>Un Legit Answers: " + this.incorrect + " </h3>");



    }

}
//## refreshes the entire page to start over.
$('#reload').click(function () {
    location.reload();
});