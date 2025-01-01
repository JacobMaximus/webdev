
function getComputerChoice(){
    let compChoice = Math.random() * (3 - 1) + 1;
    
    if (compChoice == 1) {return 'rock';}
    else if (compChoice == 2) {return 'paper';}
    else {return 'scissors';}
}

function getHumanChoice(){
    humanChoice1 = prompt('Your choice:')
    return humanChoice1.toLowerChoice()
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        alert("Its a Draw")
        return 0
    } 
    else if (humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'rock'  && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock'){
        alert('Human Wins!')
        return 1
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper' || computerChoice == 'rock'  && humanChoice == 'scissors' || computerChoice == 'paper' && humanChoice == 'rock'){
        alert('Computer Wins!')
        return 2
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);
        if (winner == 1){
            humanScore++
        } else if (winner == 2){
            computerScore++
        }
    }

    if (humanScore > computerScore){
        alert('HUMAN HAS WON!')
    }
    else if (computerScore > humanScore){
        alert('COMPUTER HAS WON')
    }
    else{
        alert('DRAW')
    }

}


playGame()


