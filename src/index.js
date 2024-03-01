import './styles.css';
import newGame from './modules/game-loop.js';

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

newGame;
