require('../index.html');
require('../scss/main.scss');
import CanvasEffect from './CanvasEffect';
import LastFmGrabber from './LastFmGrabber';

// now playing from last.fm
let nowPlaying = new LastFmGrabber('#now-playing');
nowPlaying.fetch();

// constelation effect
let starryNight = new CanvasEffect('#starry-night');
starryNight.init();
