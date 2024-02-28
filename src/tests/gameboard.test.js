import Gameboard from '../modules/gameboard.js';

describe('gameboard functions', () => {
  const board = new Gameboard();
  test('place ships at specified coordinates', () => {
    board.placeShip('destroyer', [3, 3]);
    expect(board.board[3][3]).toBeDefined();
  });
  test('shot missed', () => {
    expect(board.receiveAttack([2, 5])).toBeFalsy();
  });
  test('shot hit a ship', () => {
    expect(board.receiveAttack([3, 3])).toBeTruthy();
  });
  test('game is over', () => {
    expect(board.isGameOver()).toBeFalsy();
    board.receiveAttack([3, 4]);
    expect(board.isGameOver()).toBeTruthy();
  });
});
