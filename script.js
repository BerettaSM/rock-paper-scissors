const choices = {
    'Rock': 'Scissors',
    'Scissors': 'Paper',
    'Paper': 'Rock'
}

function toTitleCase(string) {
    if(!string) return ''
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

function getComputerChoice() {
    const options = Object.keys(choices)
    const rndIndex = Math.floor(Math.random() * options.length)
    return options[rndIndex]
}

function playRound(playerSelection,computerSelection) {
    playerSelection = toTitleCase(playerSelection)
    if(choices[playerSelection] === computerSelection) {
        // player wins
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if(choices[computerSelection] === playerSelection) {
        // computer wins
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        // draw
        return "It's a draw!"
    }
}

function getUserInput() {
    for(;;) {
        userInput = toTitleCase(prompt('Choose "Paper", "Rock" or "Scissors": ', ''))
        if(!!choices[userInput]) return userInput
        alert('Invalid choice. Try again.')
    }
}