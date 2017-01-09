require('../index.html');
require('../scss/main.scss');
import CanvasGame from './CanvasGame';
import LastFmGrabber from './LastFmGrabber';

// now playing from last.fm
let nowPlaying = new LastFmGrabber('#now-playing');
nowPlaying.fetch();
