let humanScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let arr=["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*(2-0+1)+0)];
}
function getHumanChoice(){
    let choice = prompt("Enter a choice:");
    return choice;
}

function playRround(ComputerChoice,HumanChoice){
    if(ComputerChoice == "rock"){
        if(HumanChoice == "paper"){
            humanScore++;
            console.log("You Win! Paper beats Rock.")
        }
        else if(HumanChoice == "scissors"){
            computerScore++;
            console.log("You lose !! Rock beats Scissors.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }

    else if(ComputerChoice == "paper"){
        if(HumanChoice == "scissors"){
            humanScore++;
            console.log("You Win! scissors beats paper.")
        }
        else if(HumanChoice == "rock"){
            computerScore++;
            console.log("You lose !! Paper beats Rock.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }

    else{
        if(HumanChoice == "rock"){
            humanScore++;
            console.log("You Win! Rock beats Scissors.")
        }
        else if(HumanChoice == "paper"){
            computerScore++;
            console.log("You lose !! Scissors beats Paper.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }
}

function playGame(){
    let count = 1;

    while(count <= 5){
        console.log(`Round ${count}:`);
        ComputerChoice=getComputerChoice();
        HumanChoice=getHumanChoice().toLowerCase();
        playRround(ComputerChoice,HumanChoice);
        count++;
    }
    if(humanScore > computerScore){
        console.log("You WINNN!!");
    }
    else if(humanScore < computerScore){
        console.log("You Lose :(");
    }
    else{
        console.log("It's a Draw -_-");
    }
}
playGame();