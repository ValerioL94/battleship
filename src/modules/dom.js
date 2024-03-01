const dom = (() => {
  const player = document.querySelector('#player > h2');
  const opponent = document.querySelector('#opponent > h2');
  function showPlayerName(name) {
    player.textContent = name;
  }
  function showOpponentName(name) {
    opponent.textContent = name;
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
    showPlayerName,
    showOpponentName,
    fillCell,
    displayShot,
  };
})();

export default dom;
