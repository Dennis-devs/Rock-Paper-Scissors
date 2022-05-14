const choices = ["rock", "paper", "scissor"];
let winners = [];                                       

function resetGame(){
    winners =  [];
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.computerSelection').textContent = '';
    document.querySelector('.playerSelection').textContent = '';
    document.querySelector('.reset').style.display = 'none';

}

function startGame(){
    //play a 5 round game
    const buttons = document.querySelectorAll("#buttons>button");
    buttons.forEach(button => button.addEventListener('click', function (){
        if(button.id){
            rounds(button.id);
    }
}))
}

function computerPlay(){
    let random = Math.floor(Math.random() * choices.length);
    if(random >= -1)
    return choices[random];
}

function rounds(playerSelection) {
    let wins = checkWins();
    if (wins >= 5){return}
    const computerSelection = computerPlay();
    const winner = whoWon(playerSelection, computerSelection);
    winners.push(winner);
    updateWins();
    singleRounds(playerSelection, computerSelection, winner);
    wins = checkWins();
    if(wins == 5){
        //display end results
        //change the button to visible
        //change the text to display winner
     displayEnd()
    }
}

function displayEnd(){
    let playerWins = winners.filter(item => item == "User").length;
    if(playerWins == 5){
        document.querySelector('.winner').textContent = "Congrats, you have won 5 games !";
    
    } else {
        document.querySelector('.winner').textContent = "Computer wins 5 games";

    }
    document.querySelector('.reset').style.display = 'flex';
}

function updateWins(){
    let playerWins = winners.filter(item => item == "User").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}
function checkWins(){
    let playerWins = winners.filter(item => item == "User").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}

function whoWon(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    } 
    else if((playerSelection === "scissor" && computerSelection === "paper") || 
    (playerSelection === "rock" && computerSelection === "scissor") || 
    (playerSelection === "paper" && computerSelection === "rock") ){
        return "User";
    }
    else return "Computer"
 }

function singleRounds(playerSelection, computerSelection, winner){

    document.querySelector(".playerSelection").textContent = 
    `You chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;

    document.querySelector(".computerSelection").textContent =
     `Computer chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;

    document.querySelector(".winner").textContent = 
    `Round winner is: ${winner}`;
}

startGame()









