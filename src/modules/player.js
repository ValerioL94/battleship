export default class Player {
  constructor(name) {
    this.name = name;
    this.shots = [];
  }

  shoot(coords) {
    if (this.isValid(coords)) this.shots.push(coords);
  }

  shootRandomly() {
    const coords = [];
    coords[0] = Math.floor(Math.random() * 10);
    coords[1] = Math.floor(Math.random() * 10);
    while (!this.isValid(coords)) {
      coords[0] = Math.floor(Math.random() * 10);
      coords[1] = Math.floor(Math.random() * 10);
    }
    this.shots.push(coords);
  }

  isValid(coords) {
    for (let i = 0; i < this.shots.length; i++) {
      if (this.shots[i][0] === coords[0] && this.shots[i][1] === coords[1])
        return false;
    }
    return true;
  }
}
