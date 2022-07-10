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

