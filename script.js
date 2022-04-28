const choices = ["rock", "paper", "scissor"];
let winners = []
// var op1 = "SCISSOR";
// var op2 = "Rock"
// var op3 = "Paper";

function userPlay(){
    let userInput = prompt("Enter rock, paper or scissor");
    
    while (userInput == null){
        userInput = prompt("Enter rock, paper or scissor")
    }
    let num = choices.indexOf(userInput.toLowerCase());
    if (num > -1){
        //console.log(choices[num])
        return choices[num]                                
    }   

    let inputCheck = validator(userInput)
    while (inputCheck == false){
        userInput = prompt("Player, Enter rock, paper or scissor")
        while (userInput == null){
            userInput = prompt("Enter rock, paper or scissor")
        }
        let num = choices.indexOf(userInput.toLowerCase());
        if (num > -1){
           // console.log(choices[num])
            return choices[num]                                
        }   
            inputCheck = validator(userInput)     
    } 
return userInput
                                           
}
function validator(choice){
    return choices.includes(choice)
}

function computerPlay(){
    let random = Math.floor(Math.random() * choices.length)
    //console.log(choices[random])
    return choices[random]
}



function rounds(roundPlayed) {
    const computerSelection = computerPlay()
    const playerSelection = userPlay()
    const winner = whoWon(playerSelection, computerSelection)
    winners.push(winner)
    singleRounds(playerSelection, computerSelection, winner, roundPlayed)
   
}
function whoWon(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    } 
    else if((playerSelection === "scissor" && computerSelection === "paper") || 
    (playerSelection === "rock" && computerSelection === "scissor") || 
    (playerSelection === "paper" && computerSelection === "rock") ){
        return "User"
    }
    else return "Computer"

 }

 
function game(){
    for (let i = 1; i <= 5 ; i++) {
        
        rounds(i) 
    }
    showWins()
}
function showWins(){
let playerWins = winners.filter(item => item == "User").length
let computerWins = winners.filter(item => item == "Computer").length
let ties = winners.filter(item => item == "Tie").length
console.log("---Game-Over---")
console.log("User Won:", playerWins)
console.log("Computer Won:", computerWins)
console.log("Ties:", ties)
//winner after 5 rounds or a tie
// if(playerWins == computerWins){console.log("Its a Draw after 5 sets")}
// else if(playerWins > computerWins){ console.log("User wins after 5 sets")}
// else console.log("Computer wins after 5 sets")

}
function singleRounds(userPlay, computerPlay, winner, roundPlayed){
console.log("round played:", roundPlayed)
console.log("User played:", userPlay)
console.log("Computer played:", computerPlay)
if(winner == "Tie"){console.log("it's a tie!")}
else {console.log(winner, "is the winner")
}
}
console.log(game())







