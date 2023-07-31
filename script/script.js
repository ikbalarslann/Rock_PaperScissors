var playerScore = 0, computerScore = 0;
var Options;
(function (Options) {
    Options["Rock"] = "rock";
    Options["Paper"] = "paper";
    Options["Scissors"] = "scissors";
})(Options || (Options = {}));
var getComputerChoice = function () {
    var values = Object.values(Options);
    return values[Math.floor(Math.random() * values.length)];
};
var playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (true) {
        case playerSelection === Options.Rock && computerSelection === Options.Scissors:
            playerScore++;
            return "You win! Rock beats Scissors";
        case playerSelection === Options.Rock && computerSelection === Options.Paper:
            computerScore++;
            return "You Lose! Paper beats Rock";
        case playerSelection === Options.Paper && computerSelection === Options.Rock:
            playerScore++;
            return "You Win! Paper beats Rock";
        case playerSelection === Options.Paper && computerSelection === Options.Scissors:
            computerScore++;
            return "You Lose! Scissors beats Paper";
        case playerSelection === Options.Scissors && computerSelection === Options.Paper:
            playerScore++;
            return "You Win! Scissors beats Paper";
        case playerSelection === Options.Scissors && computerSelection === Options.Rock:
            computerScore++;
            return "You Lose! Paper beats Rock ";
        default:
            return "you both equal play again";
    }
};
var updateScores = function () {
    var div = document.querySelector('div');
    div.textContent = "\n  Player Score:" + playerScore + "\n  Computer Score:" + computerScore + "\n  ";
};
var game = function () {
    var buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach(function (button) { return button.addEventListener('click', function () {
        var playerChoice = button.textContent;
        var computerChoice = getComputerChoice();
        var result = playRound(playerChoice, computerChoice);
        alert(result);
        updateScores();
    }); });
};
game();