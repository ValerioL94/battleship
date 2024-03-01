import './styles.css';
import dom from './modules/dom.js';

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

dom.newGame();
