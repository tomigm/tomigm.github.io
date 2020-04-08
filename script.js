let computerScore = 0;
let playerScore = 0;
let playerSelection
let computerSelection; 

// We select button tag and group them in const buttons

const buttons = document.querySelectorAll ('button') ;


// ForEach button --> an eventListener is applied with each (click). The called element (e = button) takes the value of the clicked button
// and returns = 1) User selection printed in document 2) executes playRound 3&4) prints scores in document 5) runs game () 


buttons.forEach ((button) => {
    button.addEventListener ('click', (e) => {
        playerSel.textContent = `${button.value}` ;
        playRound (button.value, computerPlay(3));
        playerRes.textContent = `${playerScore}`;
        computerRes.textContent = `${computerScore}`;
        game ();
        
    })
})

// It generates a random number with a floor of 3 (from function call) and return a value assigned to each number

function computerPlay (random) {

    let result = Math.floor(Math.random() * Math.floor(random));
    computerSelection = ( result === 0 ) ? 'ROCK' :
    ( result === 1 ) ? 'PAPER' :
    ( result === 2 ) ? 'SCISSORS' :
    'NaN' ;
    computerSel.textContent = `${computerSelection}` ;
    return computerSelection;

}

// It evaluates all the variables and combination of games and a) increase player/computer score b) prints round winner in document

function playRound (playerSelection, computerSelection) {

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        ++playerScore;
        return gameRes.textContent = 'You won! ROCK beats SCISSORS';

    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        ++computerScore;
        return gameRes.textContent = 'You Lose! ROCK beats SCISSORS';
    }
    else {
        if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            ++playerScore;
            return gameRes.textContent = 'You won! SCISSORS beats PAPER';
        }
        else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
            ++computerScore;
            return gameRes.textContent = 'You Lose! SCISSORS beats PAPER';
        }
        
        else {
            if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
                ++playerScore;
                return gameRes.textContent = 'You won! PAPER beats ROCK';
            }
            else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
                ++computerScore;
                return gameRes.textContent = 'You Lose! PAPER beats ROCK';
            }
            else {
                return gameRes.textContent = `It's a tie! \ ${playerSelection} = ${computerSelection}`;
            
            }
            }
        }
        

}

// It evaluate the current round and limits it to the best of five

function game() {
    if (playerScore == 5 || computerScore == 5) {
    
            
        if (playerScore > computerScore) {
            finalRes.textContent = "YOU WIN!";
            playerScore = 0;
            computerScore= 0;
        }
        else {
            finalRes.textContent = 'COMPUTER WINS';
            playerScore = 0;
            computerScore= 0;
        }
    }
        
    else if (playerScore < 5 && computerScore < 5) {
        finalRes.textContent = ''
        return;
    }
   
}

