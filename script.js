let playerScore = 0;
    let computerScore = 0;

    function play(playerChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let result = '';
      if (playerChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
      ) {
        result = `You win! ${capitalize(playerChoice)} beats ${computerChoice}.`;
        playerScore++;
      } else {
        result = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`;
        computerScore++;
      }

      document.getElementById('result').innerText = result;
      document.getElementById('score').innerText = `Player I: ${playerScore} | Player II: ${computerScore}`;
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }