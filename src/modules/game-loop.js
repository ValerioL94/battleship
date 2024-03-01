import Player from '../modules/player.js';
import Gameboard from './gameboard.js';
import dom from './dom.js';

const gameLoop = (() => {
  let player;
  let opponent;
  function initPlayers() {
    const newPlayer = new Player('Captain Bob');
    dom.showPlayerName(newPlayer.name);
    player = newPlayer;
    const newOpponent = new Player('Captain AI');
    dom.showOpponentName(newOpponent.name);
    opponent = newOpponent;
  }
  let playerBoard;
  let opponentBoard;
  function initBoards() {
    const newPlayerBoard = new Gameboard();
    newPlayerBoard.placeShip('carrier', [8, 1]);
    dom.fillCell('carrier', [8, 1]);
    newPlayerBoard.placeShip('battleship', [6, 1]);
    dom.fillCell('battleship', [6, 1]);
    newPlayerBoard.placeShip('cruiser', [4, 1]);
    dom.fillCell('cruiser', [4, 1]);
    newPlayerBoard.placeShip('submarine', [2, 1]);
    dom.fillCell('submarine', [2, 1]);
    newPlayerBoard.placeShip('destroyer', [0, 1]);
    dom.fillCell('destroyer', [0, 1]);
    playerBoard = newPlayerBoard;
    const newOpponentBoard = new Gameboard();
    newOpponentBoard.placeShip('carrier', [8, 4]);
    newOpponentBoard.placeShip('battleship', [6, 5]);
    newOpponentBoard.placeShip('cruiser', [4, 6]);
    newOpponentBoard.placeShip('submarine', [2, 6]);
    newOpponentBoard.placeShip('destroyer', [0, 7]);
    opponentBoard = newOpponentBoard;
  }

  const p2Board = document.querySelector('#opponent>.board');
  p2Board.addEventListener('click', (event) => {
    const cell = [event.target.dataset.row, event.target.dataset.column];
    if (!cell[0] || !cell[1]) return;
    player.shoot(cell);
    if (opponentBoard.receiveAttack(cell)) {
      dom.displayShot('opponent', cell, true);
    } else dom.displayShot('opponent', cell, false);
    if (opponentBoard.isGameOver()) return alert(`${player.name} has won!`);
    p2Board.classList.add('disabled');
    setTimeout(() => {
      opponentTurn();
    }, 500);
  });

  function opponentTurn() {
    opponent.shootRandomly();
    const cell = opponent.shots[opponent.shots.length - 1];
    if (playerBoard.receiveAttack(cell)) {
      dom.displayShot('player', cell, true);
    } else dom.displayShot('player', cell, false);
    if (playerBoard.isGameOver()) return alert(`${opponent.name} has won!`);
    p2Board.classList.remove('disabled');
  }

  function newGame() {
    initPlayers();
    initBoards();
  }
  return {
    newGame,
  };
})();

export default gameLoop;
