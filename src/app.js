require('../index.html');
import css from './Style/main.scss';
import nowPlaying from './nowPlaying';

// now playing from last.fm
let music = new nowPlaying('#listening');
music.fetch();
