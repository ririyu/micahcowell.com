import requestAnimationFrame from './State/requestAnimationFrame';
import Space from './Entity/Space';

export default class CanvasGame {
	constructor(el) {
		this.canvas = document.querySelector(el);
		this.ctx = this.canvas.getContext('2d');
		this.MilkyWay = new Space(this.ctx);
	}
	init() {
		this.resize();
		this.MilkyWay.init(0, 0);
		this.main();
	}
	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
	main() {
		requestAnimationFrame(this.main.bind(this));
		this.update();
		this.render();
	}
	update() {
		this.resize();
		this.MilkyWay.update();
	}
	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.MilkyWay.render();
	}
}
