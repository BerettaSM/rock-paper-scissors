const actions = document.querySelector('.actions');
const messages = document.querySelector('.messages')
const display = document.querySelector('.display')

const ROUNDS = 5

actions.addEventListener('click', listenForAction)

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

function listenForAction(event) {
    // Event delegation. If the item being clicked on is
    // the buttons wrapper itself, do nothing.
    if(event.target === event.currentTarget) return

    // Find the button clicked on and get player choice.
    const clickedButton = event.target.closest('button')
    const playerChoice = clickedButton.getAttribute('data-play')

    playRound(playerChoice)
}

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

    displayChoices(playerChoice, computerChoice)
    displayMessage(message)
    checkForGameOver()
}

function increaseScore(elementId){
    const ele = document.getElementById(elementId);
    ele.textContent = +ele.textContent + 1;
};

function checkForGameOver() {
    const pEle = document.getElementById("player");
    const pScore = +pEle.textContent

    const cEle = document.getElementById('computer')
    const cScore = +cEle.textContent

    if(pScore < ROUNDS && cScore < ROUNDS) return

    let endResult;
    if(pScore > cScore) {
        endResult = `You scored ${ROUNDS} points! You win!`;
    } else {
        endResult = `Oh no! Computer scored ${ROUNDS} points... You lose! :(`;
    }
    displayMessage(endResult + '\nRefresh to play again.')

    endGame()
}

function endGame() {
    for(const button of actions.children)
        button.disabled = true;
    actions.removeEventListener('click', listenForAction)
}

function displayChoices(playerChoice, computerChoice) {
    const playerIcon = plays[playerChoice].fontAwesomeIconClass;
    const computerIcon = plays[computerChoice].fontAwesomeIconClass;
    
    display.innerHTML = `
    <div>
        <div class="icon"><i class="fa-regular ${playerIcon}"></i></div>
        <span>Player</span>
    </div>
    <i class="fa-solid fa-xmark"></i>
    <div>
        <div class="icon"><i class="fa-regular ${computerIcon}"></i></div>
        <span>Computer</span>
    </div>
    `
}

function displayMessage(message) {
    messages.textContent = message
}