const choices = ["rock", "paper", "scissor"];
var op1 = "SCISSOR";
var op2 = "Rock"
var op3 = "Paper";

function computerPlay(){
    var random = Math.floor(Math.random() * choices.length)
    console.log(choices[random])
    return choices[random]
}

function userPlay(){
//var userInput = prompt("Enter rock, paper or scissor");
var num = choices.indexOf(op1.toLowerCase());
if (num > -1){
    console.log(choices[num])
    return choices[num]
} 
}

var computerSelection = computerPlay()
var playerSelection = userPlay()

function rounds(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "paper") {
          return "you win! scissor beats paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
    return "you loose! rock beats scissor"
    }
    else if (playerSelection === "scissor" && computerSelection === "scissor"){
    return "Its a Tie!"
    }
    else return "Player, enter correct values"                
 }
console.log(rounds(playerSelection, computerSelection))






