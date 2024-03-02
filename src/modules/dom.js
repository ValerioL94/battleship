import gameLoop from './game-loop.js';
const dom = (() => {
  const playerH2 = document.querySelector('#player > h2');
  const player = document.getElementById('player');
  const opponent = document.querySelector('#opponent > h2');
  const start = document.getElementById('start');
  const confirmBtn = document.getElementById('confirm');
  const playerName = document.getElementById('playerName');
  const playerBoard = document.getElementById('playerBoard');
  const content = document.getElementById('content');
  const ships = document.querySelectorAll('.ship');
  const shipsContainer = document.getElementById('shipsContainer');

  function newGame() {
    start.showModal();
    confirmBtn.disabled = true;
  }
  confirmBtn.addEventListener('click', () => {
    start.close();
    player.appendChild(playerBoard);
    gameLoop.initPlayers(playerName.value);
    showNames(`Captain ${playerName.value}`);
    gameLoop.initBoards(playerShips);
    content.classList.remove('hide');
    ships.forEach((ship) => {
      ship.draggable = false;
    });
  });

  const playerShips = [];
  playerBoard.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  playerBoard.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.className === 'cell') {
      event.target.style.border = '';
      const data = event.dataTransfer.getData('text');
      const ship = document.getElementById(data);
      if (
        parseInt(event.target.dataset.column) + parseInt(ship.dataset.size) >
        10
      )
        return;
      event.target.appendChild(ship);
      if (playerShips.length > 0) {
        for (let i = 0; i < playerShips.length; i++) {
          if (playerShips[i].id === ship.id) playerShips.splice(i, 1);
        }
      }
      playerShips.push({
        id: ship.id,
        coords: [event.target.dataset.row, event.target.dataset.column],
      });
      ship.style.position = 'absolute';
      shipsContainer.childElementCount === 1
        ? (confirmBtn.disabled = false)
        : (confirmBtn.disabled = true);
    }
  });
  playerBoard.addEventListener('dragenter', function (event) {
    if (event.target.className === 'cell') {
      event.target.style.border = '3px dotted blue';
    }
  });
  playerBoard.addEventListener('dragleave', function (event) {
    if (event.target.className === 'cell') {
      event.target.style.border = '';
    }
  });

  ships.forEach((ship) => {
    ship.addEventListener('dragstart', (event) => {
      if (event.target.className === 'ship') {
        event.dataTransfer.setData('text', event.target.id);
        event.target.classList.add('hide');
      }
    });
    ship.addEventListener('dragend', (event) => {
      event.target.classList.remove('hide');
    });
  });

  function showNames(p1, p2 = 'Captain AI') {
    playerH2.textContent = p1;
    opponent.textContent = p2;
  }

  function displayShot(player, coords, boolean) {
    const cell = document.querySelector(
      `#${player} >.board >.cell[data-row="${coords[0]}"][data-column="${coords[1]}"]`
    );
    if (boolean) cell.classList.add(`${player}Hit`);
    else cell.classList.add('miss');
  }

  return {
    newGame,
    displayShot,
  };
})();

export default dom;
