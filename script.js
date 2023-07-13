const plays = {
    'rock': {
        beats: 'scissors',
        fontAwesomeIconClass: 'fa-regular fa-hand-back-fist'
    },
    'scissors': {
        beats: 'paper',
        fontAwesomeIconClass: 'fa-regular fa-hand-scissors'
    },
    'paper': {
        beats: 'rock',
        fontAwesomeIconClass: 'fa-regular fa-hand'
    },
}

function getComputerChoice() {
    const options = Object.keys(plays)
    const rndIndex = Math.floor(Math.random() * options.length)
    return options[rndIndex]
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if(plays[playerSelection] === computerSelection) {
        // player wins
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if(plays[computerSelection] === playerSelection) {
        // computer wins
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        // draw
        return "It's a draw!"
    }
}

