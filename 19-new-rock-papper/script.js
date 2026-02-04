const resultElement = document.body.querySelector('.js-result-output');
    const moveElement = document.body.querySelector('.js-move-output');
    const scoreElement = document.body.querySelector('.js-score-output');

    const placar = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      loses: 0,
      draws: 0
    };

    localStorage.setItem('score', JSON.stringify(placar));



    function playGame(playerMove) {
      let result = '';
      const computerMove = pickComputerMove();

      if (computerMove === playerMove) {
       result = 'Draw';
       placar.draws++
      } else if ((computerMove === 'Rock' && playerMove === 'Scissors') || (computerMove === 'Paper' && playerMove === 'Rock') || (computerMove === 'Scissors' && playerMove === 'Paper')) {
        result = 'You Lose';
        placar.loses++;
      } else {
        result = 'You Win';
        placar.wins++;
      }

      localStorage.setItem('score', JSON.stringify(placar));

      resultElement.innerText = `${result}`;

      moveElement.innerText = `You choose ${playerMove}, computer choose ${computerMove}`;

      scoreElement.innerText = `Win: ${placar.wins} - Losses: ${placar.loses} - Ties: ${placar.draws}`;
      }



    function pickComputerMove() {
      let randomNumber = Math.random();
      let computerMove = '';

      
      if (randomNumber < 1/3) {
      computerMove = 'Rock';
      } else if (randomNumber < 2/3) {
      computerMove = 'Paper';
      } else { 
      computerMove = 'Scissors';
      }

      return computerMove;
      }

      function resetScore() {
        placar.wins = 0;
        placar.loses = 0;
        placar.draws = 0;

        localStorage.removeItem('score');

        resultElement.innerText = 'Placar Zerado!';

        moveElement.innerText = '';

        scoreElement.innerText = 'Win: 0 - Losses: 0 - Ties: 0'

        

      }


