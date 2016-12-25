// imports

export default class Game {
	constructor(ctx) {
		this.ctx = ctx;
		this.lastTime;
	}
	main() {
		let now = Date.now();
	    let dt = (now - this.lastTime) / 1000.0;
		/*
	    update(dt);
	    render();

	    this.lastTime = now;
	    requestAnimFrame(main);
		*/
	}
	requestAnimFrame() {
		return  window.requestAnimationFrame ||
        	window.webkitRequestAnimationFrame ||
        	window.mozRequestAnimationFrame ||
        	function(callback) {
            	window.setTimeout(callback, 1000 / 60);
        	};
	}
}
