var _playerScore = 0, _computerScore = 0;
var _result;
var _resultHand;
var _description;
var Options;
(function (Options) {
    Options["Rock"] = "rock";
    Options["Paper"] = "paper";
    Options["Scissors"] = "scissors";
})(Options || (Options = {}));
var Images;
(function (Images) {
    Images["Rock"] = "https://www.rpsgame.org/assets/img/rock.svg";
    Images["Paper"] = "https://www.rpsgame.org/assets/img/paper.svg";
    Images["Scissors"] = "https://www.rpsgame.org/assets/img/scissors.svg";
})(Images || (Images = {}));
var getComputerChoice = function () {
    var values = Object.values(Options);
    return values[Math.floor(Math.random() * values.length)];
};
var playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    var playerImage = document.querySelector('.pImage');
    var computerImage = document.querySelector('.cImage');
    switch (true) {
        case playerSelection === Options.Rock && computerSelection === Options.Scissors:
            playerImage.src = Images.Rock;
            computerImage.src = Images.Scissors;
            _resultHand = "You win!";
            _description = "Rock beats Scissors";
            _playerScore++;
            return;
        case playerSelection === Options.Rock && computerSelection === Options.Paper:
            playerImage.src = Images.Rock;
            computerImage.src = Images.Paper;
            _resultHand = "You Lose!";
            _description = "Paper beats Rock";
            _computerScore++;
            return;
        case playerSelection === Options.Paper && computerSelection === Options.Rock:
            playerImage.src = Images.Paper;
            computerImage.src = Images.Rock;
            _resultHand = "You win!";
            _description = "Paper beats Rock";
            _playerScore++;
            return;
        case playerSelection === Options.Paper && computerSelection === Options.Scissors:
            playerImage.src = Images.Paper;
            computerImage.src = Images.Scissors;
            _resultHand = "You Lose!";
            _description = "Scissors beats Paper";
            _computerScore++;
            return;
        case playerSelection === Options.Scissors && computerSelection === Options.Paper:
            playerImage.src = Images.Scissors;
            computerImage.src = Images.Paper;
            _resultHand = "You win!";
            _description = "Scissors beats Paper";
            _playerScore++;
            return;
        case playerSelection === Options.Scissors && computerSelection === Options.Rock:
            playerImage.src = Images.Scissors;
            computerImage.src = Images.Rock;
            _resultHand = "You Lose!";
            _description = "Paper beats Rock ";
            _computerScore++;
            return;
        default:
            _resultHand = "You Both Equal";
            _description = "Play Again";
            return;
    }
};
var updateScores = function () {
    var result_hand = document.querySelector('.result');
    var desctription = document.querySelector('.description');
    var pScore = document.querySelector('.PScore');
    var cScore = document.querySelector('.CScore');
    result_hand.textContent = "" + _resultHand;
    desctription.textContent = "" + _description;
    pScore.textContent = "Player Score: " + _playerScore;
    cScore.textContent = "Computer Score: " + _computerScore;
};
var game = function () {
    var buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach(function (button) { return button.addEventListener('click', function () {
        var playerChoice = button.textContent;
        var computerChoice = getComputerChoice();
        _result = playRound(playerChoice, computerChoice);
        if (_playerScore === 5 || _computerScore === 5) {
            if (_playerScore > _computerScore)
                return alert('player won the game');
            else
                return alert('computer won the game');
        }
        updateScores();
    }); });
};
game();
