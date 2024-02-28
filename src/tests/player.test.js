import Player from '../modules/player.js';

describe('player functions', () => {
  const player = new Player('Captain Bob');
  test('shot registered once', () => {
    player.shoot([3, 3]);
    player.shoot([3, 3]);
    expect(player.shots).toEqual([[3, 3]]);
  });
  test('random shots', () => {
    player.shootRandomly();
    player.shootRandomly();
    expect(player.shots.length).toBe(3);
  });
});
