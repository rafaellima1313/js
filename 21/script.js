const resultElem = document.querySelector(".js-result");
const moveElem = document.querySelector('.js-move');
const scoreElem = document.querySelector('.js-score');

const placar = JSON.parse(localStorage.getItem('placar')) || {
  win: 0,
  lose: 0,
  draw: 0
};

function pickComputerMove() {
  let chooseMove = Math.random();
  let computerMove = '';

  if (chooseMove < 1/3) {
    computerMove = 'Rock';  
  } else if (chooseMove < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  return computerMove;
}

function playGame(value) {
  let result = '';

  const computerMove = pickComputerMove();

  if (value === computerMove) {
    placar.draw++
    result = 'Draw';
  } else if (
      (value === 'Scissors' && computerMove === 'Rock') ||
      (value === 'Rock' && computerMove === 'Paper') ||
      (value === 'Paper' && computerMove === 'Scissors')
  ){
    placar.lose++;
    result = 'Lose';
  } else {
    placar.win++
    result = 'Win'
    }

  localStorage.setItem('placar', JSON.stringify(placar));

  resultElem.innerText = `${result}`;


  moveElem.innerText = `You choose ${value}, Computer choose ${computerMove}`

  scoreElem.innerText = `Win: ${placar.win} \nLose: ${placar.lose} \nDraw: ${placar.draw}`;
}

function resetScore() {
    placar.win = 0;
    placar.lose = 0;
    placar.draw = 0;
 

  localStorage.removeItem('placar');

  resultElem.innerText = 'Score Zerado'

  moveElem.innerText = '';

  scoreElem.innerText = `Win: ${placar.win} \nLose: ${placar.lose} \nDraw: ${placar.draw}`;
}