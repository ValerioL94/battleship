import Ship from './ship.js';
export default class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
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
