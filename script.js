const actions = document.querySelector('.actions');


actions.addEventListener('click', event => {
    // Event delegation. If the item being clicked on is
    // the buttons wrapper itself, do nothing.
    if(event.target === event.currentTarget) return

    const clickedButton = event.target.closest('button')
    const playerChoice = clickedButton.getAttribute('data-play')

    playRound(playerChoice)
})

const plays = {
    rock: {
        beats: 'scissors',
        fontAwesomeIconClass: 'fa-regular fa-hand-back-fist',
    },
    scissors: {
        beats: 'paper',
        fontAwesomeIconClass: 'fa-regular fa-hand-scissors',
    },
    paper: {
        beats: 'rock',
        fontAwesomeIconClass: 'fa-regular fa-hand',
    },
};

function getComputerChoice() {
    const options = Object.keys(plays);
    const rndIndex = Math.floor(Math.random() * options.length);
    return options[rndIndex];
}

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice()
    
    let message;
    if (plays[playerChoice].beats === computerChoice) {
        message = `You win! ${playerChoice} beats ${computerChoice}`;
        increaseScore('player')
    } else if (plays[computerChoice].beats === playerChoice) {
        message = `You lose! ${computerChoice} beats ${playerChoice}`;
        increaseScore('computer')
    } else {
        message = "It's a draw!";
    }

    displayMessage(message)
}

function displayMessage(message) {
    console.log(message)
}

function increaseScore(elementId){
    const ele = document.getElementById(elementId);
    ele.textContent = +ele.textContent + 1;
};

