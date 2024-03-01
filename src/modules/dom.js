import gameLoop from './game-loop.js';
const dom = (() => {
  const player = document.querySelector('#player > h2');
  const opponent = document.querySelector('#opponent > h2');
  const start = document.getElementById('start');
  const confirmBtn = document.getElementById('confirm');
  const playerName = document.getElementById('playerName');
  const playerBoard = document.getElementById('playerBoard');
  const content = document.getElementById('content');
  function newGame() {
    start.showModal();
  }
  confirmBtn.addEventListener('click', () => {
    start.close();
    gameLoop.initPlayers(playerName.value);
    showNames(`Captain ${playerName.value}`);
    gameLoop.initBoards();
    content.classList.remove('hide');
  });

  playerBoard.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  playerBoard.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.className === 'cell') {
      event.target.style.border = '';
      const data = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(data));
    }
  });
  playerBoard.addEventListener('dragenter', function (event) {
    if (event.target.className === 'cell') {
      event.target.style.border = '3px dotted red';
    }
  });
  playerBoard.addEventListener('dragleave', function (event) {
    if (event.target.className === 'cell') {
      event.target.style.border = '';
    }
  });
  // const carrier = document.getElementById('carrier');
  // const battleship = document.getElementById('battleship');
  // const cruiser = document.getElementById('cruiser');
  // const submarine = document.getElementById('submarine');
  // const destroyer = document.getElementById('destroyer');
  // carrier,
  // battleship,
  // cruiser,
  // submarine,
  // destroyer
  const ships = document.getElementById('shipsContainer');
  ships.addEventListener('dragstart', (event) => {
    if (event.target.className === 'ship') {
      event.dataTransfer.setData('text', event.target.id);
    }
  });

  function showNames(p1, p2 = 'Captain AI') {
    player.textContent = p1;
    opponent.textContent = p2;
  }
  function fillCell(ship, coords) {
    if (ship === 'carrier') {
      const length = 5;
      for (let i = 0; i < length; i++) {
        const cell = document.querySelector(
          ` #player >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1] + i}"]`
        );
        cell.classList.add('playerShip');
      }
    }
    if (ship === 'battleship') {
      const length = 4;
      for (let i = 0; i < length; i++) {
        const cell = document.querySelector(
          ` #player >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1] + i}"]`
        );
        cell.classList.add('playerShip');
      }
    }
    if (ship === 'cruiser') {
      const length = 3;
      for (let i = 0; i < length; i++) {
        const cell = document.querySelector(
          ` #player >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1] + i}"]`
        );
        cell.classList.add('playerShip');
      }
    }
    if (ship === 'submarine') {
      const length = 3;
      for (let i = 0; i < length; i++) {
        const cell = document.querySelector(
          ` #player >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1] + i}"]`
        );
        cell.classList.add('playerShip');
      }
    }
    if (ship === 'destroyer') {
      const length = 2;
      for (let i = 0; i < length; i++) {
        const cell = document.querySelector(
          ` #player >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1] + i}"]`
        );
        cell.classList.add('playerShip');
      }
    }
  }

  function displayShot(player, coords, boolean) {
    const cell = document.querySelector(
      ` #${player} >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1]}"]`
    );
    if (boolean) cell.classList.add(`${player}Hit`);
    else cell.classList.add('miss');
  }

  return {
    newGame,
    fillCell,
    displayShot,
  };
})();

export default dom;
