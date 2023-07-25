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
var game = function () {
    for (var i = 0; i < 5; i++) {
        var playerChoice = void 0;
        var computerChoice = getComputerChoice();
        playerChoice = prompt("Your choice (rock, paper, or scissors)").toLowerCase();
        alert(playRound(playerChoice, computerChoice));
        // Display scores during the game
        console.log("Player Score:", playerScore);
        console.log("Computer Score:", computerScore);
    }
    // Display final scores after the game
    console.log("Final Player Score:", playerScore);
    console.log("Final Computer Score:", computerScore);
    if (playerScore > computerScore) {
        alert("You won the game");
    }
    else if (playerScore === computerScore) {
        alert("It's a tie");
    }
    else {
        alert("You lost the game");
    }
};
game();
