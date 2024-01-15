
const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

   // let playerLowerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
          return "player";
        } else {
          return "computer"
        }
}

function printResults(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection);
      if (result == "tie") {
        return "It's a tie, play again";
      } else if (result == "player") {
        return "You win";
      } else {
        return "You lose";
      }
}


// the above shit, I'm pretty sure I understand, and could make from scratch again, the rest is hard: 

// create a function to 'get' input from the user, and store it in a variable

function askPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock, paper, or scissors...");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome To The Game")
    for (let i = 0; i < 5; i++) {
        const playerSelection = askPlayerChoice();
        const computerSelection = getComputerChoice();
       console.log(printResults(playerSelection, computerSelection));
       console.log("----------------");
       if (playRound(playerSelection, computerSelection) == "player") {
        playerScore++;
       } 
       else if (playRound(playerSelection, computerSelection) == "computer") {
        computerScore++;
       }
    }
    console.log("Game Over");
    if(playerScore > computerScore) {
        console.log("You win, you smelly bastard!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose, ya bum");
    }
    else {
        console.log("It's a tie, wasn't that fun?");
    }
}

game();