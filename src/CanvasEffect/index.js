import requestAnimationFrame from './State/requestAnimationFrame';
import Point from './Entity/Point';

export default class CanvasEffect {
	constructor(el) {
		this.canvas = document.querySelector(el);
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext('2d');
		this.complexity = this.getComplexity();
		this.points = [];
	}
	getComplexity() {
		return this.canvas.width * this.canvas.height / 10000;
	}
	init() {
		for (let i = 0; i < this.complexity; i++) {
			let x = Math.random() * this.canvas.width;
			let y = Math.random() * this.canvas.height;
			this.points[i] = new Point(this.ctx, x, y);
		}
		this.main();
	}
	main() {
		requestAnimationFrame(this.main.bind(this));
		this.update();
		this.render();
	}
	update() {
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].update();
		}
	}
	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].render();
		}
	}
}
