// DEPENDENCIES
var inquirer = require("inquirer");
var colors = require("colors");
// REQUIRED
var BasicCard = require("./BasicCard");
var theQuestions = require("./questions.json");

// START THE GAME
playBasicCard();

function playBasicCard() {

// SETUP A VARIABLE TO PUSH EACH QUESTION INTO THE ARRAY
var loadArray;

// SETUP AN ARRARY FOR THE LIST OF QUESTIONS
var questionArr = [];
// DO A LOOP THAT GETS EACH QUESTION FROM OUR JSON FILE AND PUTS IT INTO AN ARRAY
for (var i = 0; i < theQuestions.length; i++) {
    // HERE'S WHERE WE PULL OUR EXPORT FROM BASICCARD.JS THAT STORES THE FRONT AND BACK VARIABLE
    loadArray = new BasicCard(theQuestions[i].front, theQuestions[i].back);

    // LOAD UP THE QUESTION INTO OUR QUESTION ARRAY
    questionArr.push(loadArray);
  }

// SETUP VARIABLES FOR THE NUMBER OF CORRECT ANSWERS AND THE QUESTION NUMBER COUNTER
var numberCorrect = 0;
var questionNumber = 0;

// NOW LETS LOAD UP THE NUMBER CORRECT, QUESTION ARRAY, AND QUESTION NUMBER INTO THE startBasicCard FUNCTION
startBasicCard(numberCorrect, questionArr, questionNumber); // ALL OF THE QUESTIONS ARE PACKED INTO THAT ONE LITTLE WORD "questionArr"

// BOOM
//  |
//  |
//  V
// THE FUNCTION GRABS THE 2 VARIABLES AND 1 ARRAY OUT OF THIN AIR AND WE CAN FINALLY START THE GAME
function startBasicCard(numberCorrect, questionArr, questionNumber) {

    if (questionNumber < questionArr.length) {

      askQuestion(questionArr, questionNumber, numberCorrect);

function askQuestion(questionArr, questionNumber, numberCorrect) {
  var basic = questionArr[questionNumber];

     // COLLECT YOUR ANSWER FROM INQUIRER
            inquirer.prompt([{

                        type: "input",
                        name: "text",
                        message: basic.front + "\nTYPE YOUR ANSWER:".yellow

            }]).then(function(myInput) {
  
    if (myInput.text.toUpperCase() === basic.back.toUpperCase()) {
     // INCREASE NUMBER CORRECT   
      numberCorrect++;
      console.log("--------- CORRECT ---------".green);
    } 
    else {
      console.log("--------- WRONG ---------".red);
      console.log("THE ANSWER IS: ".red + basic.back);
    }
    // MAKE A SPACER LINE THEN UP THE QUESTION COUNT
      console.log("");
      questionNumber++;

    if (questionNumber < questionArr.length) {
        // WE'VE STILL GOT MORE QUESTIONS SO WE FIRE UP THE ASK QUESTION FUNCTION AGAIN
        askQuestion(questionArr, questionNumber, numberCorrect);

    } else {
        // THAT'S ALL THE QUESTION WE'VE GOT
        var numberWrong = (questionArr.length - numberCorrect);
            // I SAY IF YOU GET MORE RIGHT THAN WRONG YOU WIN!
                if (numberCorrect > numberWrong) {
                console.log("--------- YOU WON! ---------".green);
                console.log("NUMBER CORRECT:".green, numberCorrect);
                console.log("NUMBER WRONG:".red, numberWrong);
                } else {
                console.log("--------- YOU LOSE! ---------".red);
                console.log("NUMBER WRONG:".red, numberWrong);
                console.log("NUMBER CORRECT:".green, numberCorrect);
                }
    }

  }); // END FUNCTION(ANSWER)
} // END ASK QUESTION FUNCTION

        } // END OF IF STATEMENT FOR CURRENT ARRAY
    } // END OF START BASIC CARD FUNCTION
} // END OF PLAY BASIC CARD FUNCTION
