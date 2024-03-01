const renderBoard = (() => {
  const player = document.querySelector('#player > h2');
  const opponent = document.querySelector('#opponent > h2');
  function setPlayerName(name) {
    player.textContent = name;
  }
  function setOpponentName(name) {
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

  return {
    setPlayerName,
    setOpponentName,
    fillCell,
  };
})();

export default renderBoard;
