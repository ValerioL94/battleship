import Player from '../modules/player.js';
import Gameboard from './gameboard.js';
import dom from './dom.js';

const gameLoop = (() => {
  let newPlayer;
  let newOpponent;
  function initPlayers(p1, p2 = 'Captain AI') {
    newPlayer = new Player(`Captain ${p1}`);
    newOpponent = new Player(p2);
  }
  let newPlayerBoard;
  let newOpponentBoard;
  function initBoards(playerShips) {
    newPlayerBoard = new Gameboard();
    playerShips.forEach((ship) => {
      newPlayerBoard.placeShip(ship.id, ship.coords);
    });
    newOpponentBoard = new Gameboard();
    newOpponentBoard.placeShipsRandomly();
  }
  const p2Board = document.querySelector('#opponent>.board');
  p2Board.addEventListener('click', (event) => {
    const cell = [event.target.dataset.row, event.target.dataset.column];
    if (!cell[0] || !cell[1]) return;
    newPlayer.shoot(cell);
    if (newOpponentBoard.receiveAttack(cell)) {
      dom.displayShot('opponent', cell, true);
    } else dom.displayShot('opponent', cell, false);
    if (newOpponentBoard.isGameOver()) return dom.gameOver(newPlayer.name);
    p2Board.classList.add('disabled');
    setTimeout(() => {
      opponentTurn();
    }, 500);
  });

  function opponentTurn() {
    newOpponent.shootRandomly();
    const cell = newOpponent.shots[newOpponent.shots.length - 1];
    if (newPlayerBoard.receiveAttack(cell)) {
      dom.displayShot('player', cell, true);
    } else dom.displayShot('player', cell, false);
    if (newPlayerBoard.isGameOver()) return dom.gameOver(newOpponent.name);
    p2Board.classList.remove('disabled');
  }
  return {
    initPlayers,
    initBoards,
  };
})();

export default gameLoop;
