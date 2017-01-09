require('../index.html');
require('../scss/main.scss');
import CanvasGame from './CanvasGame';
import LastFmGrabber from './LastFmGrabber';

// background canvas effect
let starryNight = new CanvasGame('#starry-night');
starryNight.init();

// now playing from last.fm
let nowPlaying = new LastFmGrabber('#now-playing');
nowPlaying.fetch();
