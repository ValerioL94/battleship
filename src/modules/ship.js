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
