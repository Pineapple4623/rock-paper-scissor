// test = Math.floor(Math.random() * 3) +1

// console.log(test)

function getComputerChoice(){
    num = Math.floor(Math.random() * 3) +1
    let choice;
    if(num ==1 ){
        choice = "scissors"
    }
    else if (num == 2){
        choice = "rock"
    }
    else if (num == 3 ){
      choice = "paper"  
    }
    return choice
}

function getHumanChoice(){
     return prompt("Type for Scissors, Type for Rock, Type for Paper").toLowerCase();
}

let humanScore =0;
let compScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  if (humanChoice == "scissors" && computerChoice == "paper"){
    console.log("You win! Scissors beat Paper")
    humanScore++;

  }
  else if (humanChoice == "rock" && computerChoice == "scissors")
  {
    console.log("You win! Rock beats Scissor")
    humanScore++;
  }
  else if(humanChoice == "paper" && computerChoice == "rock"){
    console.log("You win! Paper beats Rock")
    humanScore++;
  }
  else if(humanChoice == "scissors" && computerChoice == "rock" )
  {
    console.log("You lost! Scissors lost to Rock.")
    compScore++;
  }
  else if(humanChoice == "rock" && computerChoice == "paper" )
  {
    console.log("You lost! Rock lost to Paper.")
    compScore++;
  }
  else if(humanChoice == "paper" && computerChoice == "scissors" )
  {
    console.log("You lost! Paper lost to Scissors.")
    compScore++;
  }
  else if (humanChoice == computerChoice) {
    console.log("It's a tie! You and Computer guessed the same.")
    humanScore++;
    compScore++;
  }
}
function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}


