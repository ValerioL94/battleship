export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitsTaken = 0;
  }

  hit() {
    this.hitsTaken += 1;
  }

  isSunk() {
    if (this.hitsTaken === this.length) return true;
    else return false;
  }
}

// const carrier = new Ship(5);
// const battleship = new Ship(4);
// const cruiser = new Ship(3);
// const submarine = new Ship(3);
// const destroyer = new Ship(2);
