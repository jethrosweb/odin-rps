const options = ['rock', 'paper', 'scissors']

// user
const playerSelection = () => {
    let selection = prompt('Do you choose rock, paper, or scissors?').toLowerCase()

    if (selection == 'rock' || selection == 'paper' || selection == 'scissors') {
        console.log(`You chose ${selection}`)
        return selection
    } else {
        window.location.reload()
    }
}

// computer
const computerSelection = () => {
    let selection = options[Math.floor(Math.random() * 3)]
    console.log(`Computer chose ${selection}`)
    return selection
}

let playerScore = 0
let computerScore = 0

// play round
const playRound = () => {
    let player = playerSelection()
    let computer = computerSelection()

    if (
        player === 'rock' && computer === 'paper' ||
        player === 'paper' && computer === 'scissors' ||
        player === 'scissors' && computer === 'rock'    
        ) {
            console.log(`You lose! ${computer} beats ${player}`)
            computerScore++
    } else if (
        player === 'scissors' && computer === 'paper' ||
        player === 'paper' && computer === 'rock' ||
        player === 'rock' && computer === 'scissors'
        ) {
            console.log(`You win! ${player} beats ${computer}`);
            playerScore++
        } else if (player === computer) {
            console.log(`Tie!`);
        }
}

// game
const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`Your score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`);
    }
}

// play game
const playGame = () => {
    game()

    if (playerScore > computerScore) {
        console.log(`You win! ${playerScore} beats ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You lose! ${computerScore} beats ${playerScore}`);
    } else {
        console.log(`Tie game! Try again`);        
    }
}

playGame()