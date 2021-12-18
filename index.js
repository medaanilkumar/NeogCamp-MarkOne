
var readlineSync=require("readline-sync")
var chalk=require("chalk")




var username=readlineSync.question("what is your name ")
console.log("Welcome "+username +" How do you Know  Anil?")
questionOne = {
  question: "Who is Anil favorite superhero?",
  answer: "Dhruv"
}

questionTwo = {
  question: "Which is Anil favorite sad song?",
  answer: "Channa Meraya"
}
questionThree = {
  question: "Which is Anil favorite  song?",
  answer: "Mara bhai"
}
questionFour = {
  question: "Which is Anil colour?",
  answer: "Red"
}
questionFive = {
  question: "Which company Anil is working?",
  answer: "kony"
}
score=0
score1=0
list1=[questionOne,questionTwo,questionThree,questionFour,questionFive]
function fourth(list1){
  for(var i=0;i<list1.length;i++){
     var a=readlineSync.question(list1[i].question)
     if(a===list1[i].answer)
     { console.log(chalk.blue("Correct "))
       score=score+1
       console.log(chalk.bgYellowBright("current score is"+score))
       console.log(chalk.cyanBright("---------------------"))
     }
  else{
    console.log(chalk.red("wrong! "))
   score1=score1-1
   console.log(chalk.bgYellowBright("current score is "+score))
   console.log(chalk.cyanBright("---------------------"))
  }
  
  }
  return score  
}
console.log("Your have given Right answers   "+fourth(list1))
console.log("You have given wrong answers "+score1)

console.log("Your Final score is "+(score1-score))