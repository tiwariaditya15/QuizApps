var readlineSync = require("readline-sync");
var score = 0;
// var highScore = 5;
// var highScoreHolder = "Aditya Tiwari";

var highScores = [
  {
    score: 5,
    name: "Aditya"
  }
];

var name = readlineSync.question("Whats your name? ");
if(name === ""){
  name = "Unknown";
}

function setHighScore(){
  global.highScores.push({  score: global.score, name: global.name});
  if(global.highScores[0].score <= global.score){
    console.log(`Hurray! We've got new highscorer ${global.name}.`);
    setScoreBoard();
  }else{
    setScoreBoard();
  }
}

var setScoreBoard = () => {
    console.log(`\n~~~~~~~~~~~~~~Score Board~~~~~~~~~~~~~~~~~~~~~~\n`);
    for(var i = 0;i < global.highScores.length; i++){
      console.log(`${i + 1}. ${global.highScores[i].name} - ${global.highScores[i].score}`);
    }
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
};

var putQuestion = (questionObject, score) => {
  console.log(questionObject.question);
  putOptions(questionObject.options);
  var input = readlineSync.question("\nAnswer-");
  if(questionObject.options[input - 1].toLowerCase() === questionObject.answer.toLowerCase())
        global.score++;   
  console.log("----------------------------------------------");
}

var putOptions = (optionsArray) => {
    for(var i = 0;i < optionsArray.length; i++){
      console.log(`\n [${i+1}] - ${optionsArray[i]}`);
    }
    console.log("\n");
}

var questions = [
  {
    question: "What is my hobby?",
    answer: "swimming",
    options: ["Swimming", "Tennis", "Squash", "Gym"]
  },
  {
    question: "How old am I?",
    answer: "21",
    options: ["20", "21", "22", "23"]
  },
  {
    question: "What language do I love?",
    answer: "js",
    options: ["java", "js", "nodejs", "reactjs"]
  },
  {
    question: "Where do I live??",
    answer: "mumbai",
    options: ["delhi", "pune", "mumbai", "banglore"]
  },
  {
    question: "What's my favourite fruit?",
    answer: "avocado",
    options: ["Watermelon", "Dragon Fruit", "Grapes", "Avocado"]
  }
];

console.log(`Welcome ${name} to this quiz app.\nWe need you to answer some questions about Aditya Tiwari and see how well you know him.`);
console.log("----------------------------------------------");
console.log(`Highscore - ${highScores[0].score} by ${highScores[0].name}`);
console.log("----------------------------------------------");

for(var iterator = 0;iterator < questions.length;iterator++){
      putQuestion(questions[iterator], score);
}

console.log(`Your score is ${score} points.`);

setHighScore();