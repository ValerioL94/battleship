import Ship from './ship.js';
export default class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
    this.missedShots = [];
    this.ships = [];
  }

  placeShip(ship, coords) {
    if (ship === 'carrier') {
      ship = new Ship(5);
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][coords[1] + i] = ship;
      }
      this.ships.push(ship);
    }
    if (ship === 'battleship') {
      ship = new Ship(4);
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][coords[1] + i] = ship;
      }
      this.ships.push(ship);
    }
    if (ship === 'cruiser') {
      ship = new Ship(3);
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][coords[1] + i] = ship;
      }
      this.ships.push(ship);
    }
    if (ship === 'submarine') {
      ship = new Ship(3);
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][coords[1] + i] = ship;
      }
      this.ships.push(ship);
    }
    if (ship === 'destroyer') {
      ship = new Ship(2);
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][coords[1] + i] = ship;
      }
      this.ships.push(ship);
    }
  }

  isValid(cell) {
    if (cell[0] < 0 || cell[1] < 0 || cell[0] > 9 || cell[1] > 9) return false;
    else return true;
  }

  isEmpty(cell) {
    if (cell(0) != null || cell[1] != null) return false;
    else return true;
  }

  receiveAttack(coords) {
    if (this.board[coords[0]][coords[1]] === null) {
      this.board[coords[0]][coords[1]] = 'miss';
      this.missedShots.push(coords);
      return false;
    } else if (
      this.board[coords[0]][coords[1]] !== null &&
      this.board[coords[0]][coords[1]] !== 'miss'
    ) {
      this.board[coords[0]][coords[1]].hit();
      return true;
    }
  }

  isGameOver() {
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  }
}
