import Ship from './ship.js';
export default class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
    this.ships = [];
  }

  placeShip(ship, coords) {
    if (ship === 'carrier') {
      const carrier = new Ship(5);
      if (!coords) coords = this.randomCoords(carrier);
      for (let i = 0; i < carrier.length; i++) {
        this.board[coords[0]][coords[1] + i] = carrier;
      }
      this.ships.push(carrier);
    }
    if (ship === 'battleship') {
      const battleship = new Ship(4);
      if (!coords) coords = this.randomCoords(battleship);
      for (let i = 0; i < battleship.length; i++) {
        this.board[coords[0]][coords[1] + i] = battleship;
      }
      this.ships.push(battleship);
    }
    if (ship === 'cruiser') {
      const cruiser = new Ship(3);
      if (!coords) coords = this.randomCoords(cruiser);
      for (let i = 0; i < cruiser.length; i++) {
        this.board[coords[0]][coords[1] + i] = cruiser;
      }
      this.ships.push(cruiser);
    }
    if (ship === 'submarine') {
      const submarine = new Ship(3);
      if (!coords) coords = this.randomCoords(submarine);
      for (let i = 0; i < submarine.length; i++) {
        this.board[coords[0]][coords[1] + i] = submarine;
      }
      this.ships.push(submarine);
    }
    if (ship === 'destroyer') {
      const destroyer = new Ship(2);
      if (!coords) coords = this.randomCoords(destroyer);
      for (let i = 0; i < destroyer.length; i++) {
        this.board[coords[0]][coords[1] + i] = destroyer;
      }
      this.ships.push(destroyer);
    }
  }

  placeShipsRandomly() {
    this.placeShip('carrier');
    this.placeShip('battleship');
    this.placeShip('cruiser');
    this.placeShip('submarine');
    this.placeShip('destroyer');
  }

  randomCoords(ship) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * (11 - ship.length));
    while (!this.isValid([x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * (11 - ship.length));
    }
    return [x, y];
  }

  isValid(coords) {
    if (this.board[coords[0]][coords[1]] === null) return true;
    else return false;
  }

  receiveAttack(coords) {
    if (this.board[coords[0]][coords[1]] === null) {
      return false;
    } else {
      this.board[coords[0]][coords[1]].hit();
      return true;
    }
  }

  isGameOver() {
    for (let i = 0; i < 5; i++) {
      if (!this.ships[i].isSunk()) return false;
    }
    return true;
  }
}
