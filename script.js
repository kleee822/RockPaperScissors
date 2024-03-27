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

let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
let computerSelection = getComputerChoice(3).toLowerCase();

function rockPaperScissors(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        alert('Both made the same choice, there is no winner.')
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        alert('You loose! Rock beats scissors.')
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        alert('You win! Paper beats rock.')
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        alert('You loose! Scissors beats paper.')
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        alert('You win! Rock beats scissors.')
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        alert('You win! Scissors beats paper.')
    } else {
        alert('You loose! Paper beats rock.')
    }
}


console.log(rockPaperScissors(playerSelection, computerSelection))






