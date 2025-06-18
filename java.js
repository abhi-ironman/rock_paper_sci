
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");
let humanScore = 0; 
let computerScore = 0;
function getComputerChoice(){
    let arr=["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*(2-0+1)+0)];
}

function playRround(ComputerChoice,HumanChoice){
    if(ComputerChoice == "rock"){
        if(HumanChoice == "paper"){
            humanScore+=1;
           
            console.log("You Win! Paper beats Rock.")
        }
        else if(HumanChoice == "scissors"){
            computerScore+=1;
            console.log("You lose !! Rock beats Scissors.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }

    else if(ComputerChoice == "paper"){
        if(HumanChoice == "scissors"){
            humanScore+=1;
            console.log("You Win! scissors beats paper.")
        }
        else if(HumanChoice == "rock"){
            computerScore+=1;
            console.log("You lose !! Paper beats Rock.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }

    else{
        if(HumanChoice == "rock"){
            humanScore+=1;
            console.log("You Win! Rock beats Scissors.")
        }
        else if(HumanChoice == "paper"){
            computerScore+=1;
            console.log("You lose !! Scissors beats Paper.")
        }
        else{
            console.log("Its a DRAW!!!.")
        }
    }
}
function playGame(HumanChoice,round){
    let ComputerChoice=getComputerChoice();
    console.log(`Round ${round}:`);
    playRround(ComputerChoice,HumanChoice);
    human.textContent=humanScore;
    computer.textContent=computerScore;
    if(humanScore == 5){
        console.log("HUMANS WINNN");
        winner.textContent="HUMANS WINNN"

    }
    else if(computerScore ==5){
        console.log("COMPUTERS WINNN");
        winner.textContent="COMPUTER WINSS"
    }
}
let round = 1
btn1.addEventListener("click",()=> playGame(btn1.textContent,round++));
btn2.addEventListener("click",()=> playGame(btn2.textContent,round++) );
btn3.addEventListener("click",()=> playGame(btn3.textContent,round++));

