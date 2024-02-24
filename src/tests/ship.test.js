import Ship from '../modules/ship';

describe('ships', () => {
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const submarine = new Ship(3);
  const destroyer = new Ship(2);

  test('hits', () => {
    carrier.hit();
    expect(carrier.hitsTaken).toBe(1);
  });

  test('multiple hits', () => {
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.hitsTaken).toBe(3);
  });

  test('sunk false', () => {
    expect(submarine.isSunk()).toBe(false);
  });

  test('sunk true', () => {
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
  });
});
