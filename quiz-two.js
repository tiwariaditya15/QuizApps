var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

var highScores = [
  {
    score: 10,
    name: "Aditya"
  }
];


var name = readlineSync.question(chalk.yellow("Whats your name? "));
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
    console.log(chalk.yellow(`\n~~~~~~~~~~~~~~Score Board~~~~~~~~~~~~~~~~~~~~~~\n`));
    for(var i = 0;i < global.highScores.length; i++){
      console.log(chalk.bgYellow(`${i + 1}. ${global.highScores[i].name} - ${global.highScores[i].score}`));
    }
    console.log(chalk.yellow(`\n~~~~~~~~~~~~~~Score Board~~~~~~~~~~~~~~~~~~~~~~\n`));
};

var putQuestion = (questionObject, score) => {
  console.log(chalk.blue(questionObject.question));
  putOptions(questionObject.options);
  var input = readlineSync.question("\nAnswer-");
  if(input === "") input 
  if(questionObject.options[input - 1].toLowerCase() === questionObject.answer.toLowerCase()){
        global.score++;
        console.log(chalk.green(`\nRight answer!`));
        console.log(`\nScore - ${global.score}`);
  }else{
    global.score--;
    console.log(chalk.red(`\nWrong answer!\nExpected answer-${questionObject.answer}`));
    console.log(`\nScore - ${global.score}`);
  }   
  console.log(chalk.magenta("----------------------------------------------"));
}

var putOptions = (optionsArray) => {
    for(var i = 0;i < optionsArray.length; i++){
      console.log(chalk.blue(`\n [${i+1}] - ${optionsArray[i]}`));
    }
    console.log("\n");
}

var questions = [
  {
    question: "What was profession of Harvey Spectre?",
    options: ["Basketball Player", "District Attorney", "Attorney", "Associate"],
    answer: "attorney"
  },
  {
    question: "Who was Louis Litt?",
    options: ["Janitor", "Land Lord", "Managing Partner", "Interior Designer"],
    answer: "managing partner"
  },
  {
    question: "Who was Rachels' father?",
    options: ["Mike Ross", "Robert Zane", "Sean Cahill", "He is not shown in series"],
    answer: "Robert Zane"
  },
  {
    question: "What was name of uni whose degre Mike Ross faked??",
    options: ["Havard University", "MIT", "Stanford University", "Columbia University"],
    answer: "Havard University"
  },
  {
    question: "What was relation of Daniel Hardman with Pearson Spetcre Litt?",
    options: ["Current managing Partner", "Ex managing partner", "Member of Board", "Land Lord"],
    answer: "ex managing partner"
  },
  {
    question: "Where was Pearson Spectre Litt?",
    options: ["Texas", "Manhatten", "Pennsylvania", "Georgia"],
    answer: "Manhatten"
  },
  {
    question: "Where did mike teach when he got out of prison?",
    options: ["School", "Church", "University", "Home School"],
    answer: "church"
  },
  {
    question: "Who was harveys' secretary?",
    options: ["Jessica Pearson", "katrina Bennett", "Donna Paulsen", "Rachel Zane"],
    answer: "donna paulsen"
  },
  {
    question: "Who helped harvey to free mike?",
    options: ["Louis Litt", "Sean Cahill", "Cameron Dennis", "Alex Williams"],
    answer: "sean cahill"
  },
  {
    question: "How many seasons does suits have?",
    options: ["7", "8", "9", "10"],
    answer: "9"
  },
];

var questionsForLevelTwo = [
  {
    question: "Who was Frank Underwood?",
    options: ["Democrat", "Republican", "Secretary Of State", "President"],
    answer: "Democrat"
  },
  {
    question: "Where was Peter Russo from?",
    options: ["Washington", "Michigan", "Pennsylvania", "Atlanta"],
    answer: "Pennsylvania"
  },
  {
    question: "What was name of Franks' wife?",
    options: ["Zoe Barnes", "Cathrine Durant", "Claire Underwood", "Linda Vasquez"],
    answer: "Claire Underwood"
  },
  {
    question: "Where was Zoe Barnes working when she left The Heralds?",
    options: ["CNN", "Slugline", "Vice News", "The New York Times"],
    answer: "Slugline"
  },
  {
    question: "Who used to take care of Franks' shady political ideas including him?",
    options: ["Peter Russo", "Doug Stamper", "Meechum", "Remy Danton"],
    answer: "Doug Stamper"
  }
];

console.log(chalk.magenta(`Welcome ${name} to this quiz app.`));

console.log(chalk.bgCyan("\n---------------------RULES--------------------"));
console.log(chalk.cyan("\n1. Each right answer gives 1 mark.\n2. Each wrong answer deducts 1 mark.\n3. Once you score more than 7 in Suits quiz, We take you to another quiz based on HOUSE OF CARDS."));
console.log(chalk.bgCyan("\n----------------------------------------------"));

console.log(chalk.yellow("\n----------------------------------------------"));
console.log(chalk.bgYellow(`\nHighscore - ${highScores[0].score} by ${highScores[0].name}`));
console.log(chalk.yellow("\n----------------------------------------------"));

function levelOne(){
  for(var iterator = 0;iterator < questions.length;iterator++){
      putQuestion(questions[iterator], global.score);
  }
  console.log(`Your score is ${global.score} points now.`);
}

function levelTwo(){
  console.log();
  for(var iterator = 0;iterator < questionsForLevelTwo.length;iterator++){
      putQuestion(questionsForLevelTwo[iterator], global.score);
  }
  console.log(`Your score is ${global.score} points.`);
}

levelOne();

if(score === 8 || score > 8){
  console.log(chalk.green(`\nCongratulations!You're being taken to leveTwo`));
  levelTwo();
}else{
  console.log(chalk.red(`\nYou aren't going to levelTwo cause you couldn't score more than 7. Try luck next time!`));
}

if(score === 15) console.log(chalk.green(`Holy Jeez! You scored ${score}. Not even 1 answer wrong.`));

setHighScore();