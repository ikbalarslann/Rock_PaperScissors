let _playerScore = 0,
    _computerScore = 0;

let _result;
let _resultHand;
let _description;

enum Options {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
}

enum Images{
  Rock="https://www.rpsgame.org/assets/img/rock.svg",
  Paper="https://www.rpsgame.org/assets/img/paper.svg",
  Scissors="https://www.rpsgame.org/assets/img/scissors.svg"
}


let getComputerChoice = () => {
  const values = Object.values(Options);
  return values[Math.floor(Math.random() * values.length)];
};

let playRound=(playerSelection,computerSelection)=>{
  playerSelection=playerSelection.toLowerCase();
  
  let playerImage=document.querySelector('.pImage')as HTMLImageElement;
  let computerImage=document.querySelector('.cImage')as HTMLImageElement;



  switch(true){
    case 
    playerSelection===Options.Rock&&computerSelection===Options.Scissors:
    
    playerImage.src=Images.Rock;
    computerImage.src=Images.Scissors;

    _resultHand="You win!";
    _description=`Rock beats Scissors`
    _playerScore++;
      return ;
    
    case
      playerSelection===Options.Rock&&computerSelection===Options.Paper:

      playerImage.src=Images.Rock;
      computerImage.src=Images.Paper;
      
      _resultHand="You Lose!";
      _description="Paper beats Rock"
      _computerScore++;
      return ;
      
    case
      playerSelection===Options.Paper&&computerSelection===Options.Rock:
     
      playerImage.src=Images.Paper;
      computerImage.src=Images.Rock;

      _resultHand="You win!";
      _description="Paper beats Rock"
      _playerScore++;
      return  ;
        
    case
      playerSelection===Options.Paper&&computerSelection===Options.Scissors:

      playerImage.src=Images.Paper;
      computerImage.src=Images.Scissors;
     
      _resultHand="You Lose!";
      _description="Scissors beats Paper"
      _computerScore++;
      return ;
        
    case
      playerSelection===Options.Scissors&&computerSelection===Options.Paper:

      playerImage.src=Images.Scissors;
      computerImage.src=Images.Paper;
     
      _resultHand="You win!";
      _description="Scissors beats Paper"
      _playerScore++;
      return ;
        
    case
      playerSelection===Options.Scissors&&computerSelection===Options.Rock:

      playerImage.src=Images.Scissors;
      computerImage.src=Images.Rock;
      
      _resultHand="You Lose!";
      _description="Paper beats Rock "
      _computerScore++;
      return  ;
        
    default:
      _resultHand="You Both Equal"
      _description="Play Again"
      return ;             
  }
};
  
let updateScores = () => {
  let result_hand = document.querySelector('.result');
  let desctription = document.querySelector('.description');

  let pScore=document.querySelector('.PScore');
  let cScore=document.querySelector('.CScore');

  result_hand.textContent=`${_resultHand}`
  desctription.textContent=`${_description}`

  pScore.textContent=`Player Score: ${_playerScore}`
  cScore.textContent=`Computer Score: ${_computerScore}`

  
}


const game = () => {
  let buttons = document.querySelectorAll('button');
  console.log(buttons)
  buttons.forEach(button => button.addEventListener('click',()=> {
    let playerChoice=button.textContent;
    let computerChoice = getComputerChoice();
    _result = playRound(playerChoice,computerChoice);
    
    if (_playerScore===5||_computerScore===5)
 {
  if(_playerScore>_computerScore)
  return alert('player won the game')
  else 
  return alert('computer won the game')
}
    updateScores();
  }));

};


game();
  
  