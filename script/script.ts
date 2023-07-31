let playerScore = 0,
    computerScore = 0;

enum Options {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
}

let getComputerChoice = () => {
  const values = Object.values(Options);
  return values[Math.floor(Math.random() * values.length)];
};

let playRound=(playerSelection,computerSelection)=>{
  playerSelection=playerSelection.toLowerCase();

  switch(true){
    case 
    playerSelection===Options.Rock&&computerSelection===Options.Scissors:
    playerScore++;
      return`You win! Rock beats Scissors`;
    
    case
      playerSelection===Options.Rock&&computerSelection===Options.Paper:
      computerScore++;
      return "You Lose! Paper beats Rock";
      
    case
      playerSelection===Options.Paper&&computerSelection===Options.Rock:
      playerScore++;
      return  "You Win! Paper beats Rock";
        
    case
      playerSelection===Options.Paper&&computerSelection===Options.Scissors:
      computerScore++;  
      return "You Lose! Scissors beats Paper";
        
    case
      playerSelection===Options.Scissors&&computerSelection===Options.Paper:
      playerScore++;  
      return "You Win! Scissors beats Paper";
        
    case
      playerSelection===Options.Scissors&&computerSelection===Options.Rock:
      computerScore++; 
      return  "You Lose! Paper beats Rock ";
        
    default:
      return "you both equal play again";             
  }
};
  
let updateScores = () =>{
  let div= document.querySelector('div');
  div.textContent = `
  Player Score:${playerScore}
  Computer Score:${computerScore}
  `
}


const game = () => {
  let buttons = document.querySelectorAll('button');
  console.log(buttons)
  buttons.forEach(button => button.addEventListener('click',()=> {
    let playerChoice=button.textContent;
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice,computerChoice);
    alert(result);
    updateScores();
  }));

};


game();
  
  