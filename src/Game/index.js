import Resources from './Resources';
import Input from './Input';
import requestAnimationFrame from './State/requestAnimationFrame';
import Map from './Entity/Map';

const src = ['img/map.png'];

export default class Game {
	constructor(ctx, width, height) {
		this.res = new Resources(src);
		this.input = new Input();
		this.map = new Map(ctx, width, height, 40, 0, 0);
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.lastTime;
	}
	init() {
		this.input.init();
		this.res.load(function() {
			this.map.init(this.res);
			this.lastTime = Date.now();
			this.main();
		}.bind(this));
	}
	main() {
		requestAnimationFrame(this.main.bind(this));
	    let now = Date.now();
		let dt = (now - this.lastTime) / 1000;
		this.update(dt);
		this.render();
		this.lastTime = now;
	}
	update(dt) {
		this.map.update(this.input, dt);
	}
	render() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.map.render();
	}
}
