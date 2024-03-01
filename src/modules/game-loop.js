import Player from '../modules/player.js';
import renderBoard from './dom.js';
import Gameboard from './gameboard.js';

const newGame = (() => {
  const player = new Player('Captain Bob');
  renderBoard.setPlayerName('Captain Bob');
  const opponent = new Player('Captain AI');
  renderBoard.setOpponentName('Captain AI');
  const playerBoard = new Gameboard();
  const opponentBoard = new Gameboard();

  playerBoard.placeShip('carrier', [8, 1]);
  renderBoard.fillCell('carrier', [8, 1]);
  playerBoard.placeShip('battleship', [6, 1]);
  renderBoard.fillCell('battleship', [6, 1]);
  playerBoard.placeShip('cruiser', [4, 1]);
  renderBoard.fillCell('cruiser', [4, 1]);
  playerBoard.placeShip('submarine', [2, 1]);
  renderBoard.fillCell('submarine', [2, 1]);
  playerBoard.placeShip('destroyer', [0, 1]);
  renderBoard.fillCell('destroyer', [0, 1]);

  opponentBoard.placeShip('carrier', [8, 4]);
  opponentBoard.placeShip('battleship', [6, 5]);
  opponentBoard.placeShip('cruiser', [4, 6]);
  opponentBoard.placeShip('submarine', [2, 6]);
  opponentBoard.placeShip(' destroyer', [0, 7]);
  return {
    player,
    opponent,
    playerBoard,
    opponentBoard,
  };
})();

export default newGame;
