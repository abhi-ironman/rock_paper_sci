const buttons = document.querySelectorAll("button");
let humanScore = parseInt(document.querySelector("#humanScore").textContent);
let computerScore = parseInt(document.querySelector("#computerScore").textContent);
let count = 1;
let flag = true;
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(flag){
            const humanChoice = e.target.textContent;
            const computerChoice = getComputerChoice();
            const choices = document.querySelector(".choices");
            const round = document.createElement("p");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const play = playRround(computerChoice,humanChoice);
            round.innerText = `Round :${count}`;
            count++;
            p1.innerText = `HUMAN CHOICE : ${humanChoice}`;
            p2.innerText = `COMPUTER CHOICE: ${computerChoice}`;
            p3.innerText = play;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
            choices.appendChild(round);
            choices.appendChild(p1);
            choices.appendChild(p2);
            choices.appendChild(p3);
            if( humanScore == 5){
                const p4 = document.createElement("p");
                p4.innerText = "HUMANS WINN" ;
                choices.appendChild(p4);
                const btn = document.createElement("button");
                btn.innerText = "RESET";
                choices.appendChild(btn);
                btn.addEventListener("click",function(e){
                    choices.innerHTML="";
                });
                flag = false
            }
            else if( computerScore == 5){
                const p4 = document.createElement("p");
                p4.innerText = "COMPUTER WINN" ;
                choices.appendChild(p4);
                   const btn = document.createElement("button");
                btn.innerText = "RESET";
                choices.appendChild(btn);
                btn.addEventListener("click",function(e){
                    choices.innerHTML="";
                });
                flag = 0;
            }
        }
    })
});


function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

function playRround(ComputerChoice,HumanChoice){
    if(ComputerChoice == "rock"){
        if(HumanChoice == "paper"){
            humanScore++;
            return ("You Win! Paper beats Rock.")
        }
        else if(HumanChoice == "scissors"){
            computerScore++;
            return ("You lose !! Rock beats Scissors.")
        }
        else{
            return ("Its a DRAW!!!.")
        }
    }

    else if(ComputerChoice == "paper"){
        if(HumanChoice == "scissors"){
            humanScore++;
                return ("You Win! scissors beats paper.")
        }
        else if(HumanChoice == "rock"){
            computerScore++;
            return ("You lose !! Paper beats Rock.")
        }
        else{
            return ("Its a DRAW!!!.")
        }
    }

    else{
        if(HumanChoice == "rock"){
            humanScore++;
            return ("You Win! Rock beats Scissors.")
        }
        else if(HumanChoice == "paper"){
            computerScore++;
            return ("You lose !! Scissors beats Paper.")
        }
        else{
            return ("Its a DRAW!!!.")
        }
    }
}