import './styles.css';

function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));
