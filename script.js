const choices = ["rock", "paper", "scissor"];
// var op1 = "SCISSOR";
// var op2 = "Rock"
// var op3 = "Paper";

function userPlay(){
let userInput = prompt("Enter rock, paper or scissor");
let num = choices.indexOf(userInput.toLowerCase());
if (num > -1){
    console.log(choices[num])
    return choices[num]                                
}                                                  
}

function computerPlay(){
    let random = Math.floor(Math.random() * choices.length)
    console.log(choices[random])
    return choices[random]
}

let computerSelection = computerPlay()
let playerSelection = userPlay()

function rounds(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "Its a tie!"
    } 
    else if(playerSelection === "scissor" && computerSelection === "paper") {
        return "You Win! scissor beats paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Loose! rock beats scissor"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Loose! paper beats rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! rock bets scissor"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! paper beats rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You Loose! scissor beats paper"
    }
    else return "Player, Enter correct values!"                
 }
 

// function game(){
//     let playerWins = []
//     let computerWins = []
//     for (let i = 1; i <= 5 ; i++) {
  
//         if (rounds(playerSelection, computerSelection) === "Its a tie!") {
//             return "round tied"
//         }
//         else if(rounds(playerSelection, computerSelection) === "You Win! scissor beats paper" || rounds(playerSelection, computerSelection) === "You Win! rock bets scissor" || rounds(playerSelection, computerSelection) === "You Win! paper beats rock") {
//             playerWins.push(i)
//             console.log(playerWins)
//             return "You win round this round"
//         } 
//         else if(rounds(playerSelection, computerSelection) === "You Loose! rock beats scissor" || rounds(playerSelection, computerSelection) === "You Loose! paper beats rock" || rounds(playerSelection, computerSelection) === "You Loose! scissor beats paper") {
//             computerWins.push(i)
//             console.log(computerWins)
//             return "Computer wins this round"
//         }  
    
//     }
//     if (playerWins.length > computerWins.length) {
//         return "you are the champion"
//     }
//     else if(computerWins > playerWins) {
//         return "computer is the champion"
//     }
//     else return "Its a 5 round tie"
// }
//function game()






