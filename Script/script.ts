enum Options {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
  }
  
  let getComputerChoice = () => {
    const values = Object.values(Options);
    return values[Math.floor(Math.random() * values.length)];
  };
  
  console.log(getComputerChoice());
  