function getComputerChoice() {
    let = choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors'
    }
    }

let computerScore = 0
let playerScore = 0
 
function rockPaperScissors() {
    let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
    let computerSelection = getComputerChoice(3).toLowerCase();
    if (computerSelection == playerSelection) {
        alert('Both made the same choice, there is no winner.')
        alert(`You have ${playerScore} wins, while computer has ${computerScore} wins.`)
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        alert('You loose! Rock beats scissors.')
        alert(`You have ${playerScore} wins, while computer has ${++computerScore} wins.`)
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        alert('You win! Paper beats rock.')
        alert(`You have ${++playerScore} wins, while computer has ${computerScore} wins.`)
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        alert('You loose! Scissors beats paper.')
        alert(`You have ${playerScore} wins, while computer has ${++computerScore} wins.`)
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        alert('You win! Rock beats scissors.')
        alert(`You have ${++playerScore} wins, while computer has ${computerScore} wins.`)
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        alert('You win! Scissors beats paper.')
        alert(`You have ${++playerScore} wins, while computer has ${computerScore} wins.`)
    } else {
        alert('You loose! Paper beats rock.')
        alert(`You have ${playerScore} wins, while computer has ${++computerScore} wins.`)
    }
}


function playGame() {
    return rockPaperScissors();
}


playGame();
playGame();
playGame();
playGame();
playGameLast();

function playGameLast() {
    rockPaperScissors();
    if (computerScore === playerScore) {
        alert('There is no winner after five rounds played.')
    } else if (computerScore > playerScore) {
        alert('You have lost after 5 rounds.')
    } else alert('You have won after five rounds!');
}









