require('../index.html');
require('../scss/main.scss');
import LastFmGrabber from './LastFmGrabber';
import { Constellations } from 'canvas-effects';

let nowPlaying = new LastFmGrabber('#now-playing');
nowPlaying.fetch();

const starryNight = new Constellations({
	container: '#foo',
	width: '100%',
	height: '100%',
	seed: 6000,
	point: {
		color: [120,120,120,1]
	},
	line: {
		color: [120,120,120,1]
	}
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-80123410-2', 'auto');
ga('send', 'pageview');
