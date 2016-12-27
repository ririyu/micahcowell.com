import Resources from './Resources';
import Input from './Input';
import requestAnimationFrame from './State/requestAnimationFrame';
import Scene from './Scene';
import Hero from './Entity/Hero';

const src = ['img/map.png'];

export default class Game {
	constructor(ctx, w, h) {
		this.res = new Resources(src);
		this.input = new Input();
		this.map = new Scene(ctx);
		this.guy = new Hero(ctx, 100, 100, 5, w, h);
		this.ctx = ctx;
		this.width = w;
		this.height = h;
	}
	init() {
		this.input.init();
		this.res.load(function() {
			this.map.init(this.res.cache[0]);
			this.guy.init('blue', 10);
			this.main();
		}.bind(this));
	}
	main() {
		requestAnimationFrame(this.main.bind(this));
		this.update();
		this.render();
	}
	update() {
		this.guy.update(this.input);
	}
	render() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.map.render();
		this.guy.render();
	}
}
