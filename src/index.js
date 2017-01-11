require('../index.html');
require('../scss/main.scss');
import LastFmGrabber from './LastFmGrabber';
import { Constellations } from 'canvas-effects';

// now playing from last.fm
let nowPlaying = new LastFmGrabber('#now-playing');
nowPlaying.fetch();

const starryNight = new Constellations({
	container: '#starry-night',
	width: '100%',
	height: '100%',
	point: {
		color: '#666666'
	},
	line: {
		color: [120,120,120,1]
	}
});
