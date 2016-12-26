import Map from './Map';
import Resources from './Resources';
import Input from './Input';
import requestAnimationFrame from './State/requestAnimationFrame';

export default class Game {
	constructor(ctx, width, height) {
		this.res = new Resources();
		this.input = new Input();
		this.map = new Map(ctx, width, height);
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.fps = 60;
		this.time = {
			elapsed: 0,
			last: 0
		};
		this.movement={
			left: false,
			up: false,
			right: false,
			down: false,
		}
	}
	init() {
		this.input.init();
		this.res.load(function() {
			const img = this.res.cache;
			this.map.init(img[0]);
			this.time.last = Date.now();
			this.main();
		}.bind(this));
	}
	main() {
	    requestAnimationFrame(this.main.bind(this));
	    let now = Date.now();
		let dt = (now - this.time.last) / 1000.0;
	    this.time.elapsed = now - this.time.last;
	    if (this.time.elapsed > (1000 / this.fps)) {
	        this.time.last = now - (this.time.elapsed % (1000 / this.fps));
			this.update();
			this.render();
	    }
	}
	update() {
		this.map.update(this.input.move);
	}
	render() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.map.render();
	}
}
