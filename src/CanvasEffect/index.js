import requestAnimationFrame from './State/requestAnimationFrame';
import Point from './Entity/Point';
import Line from './Entity/Line';

export default class CanvasEffect {
	constructor(el) {
		this.canvas = document.querySelector(el);
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext('2d');
		this.complexity = this.getComplexity();
		this.points = [];
		this.lines = [];
		this.stroke = 'rgba(255,255,255,0.1)';
		this.fill = '#666666';
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
		this.lines = [];
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].update();
			for (let j = i+1; j < this.points.length; j++) {
				let x1 = this.points[i].x;
				let y1 = this.points[i].y;
				let x2 = this.points[j].x;
				let y2 = this.points[j].y;
				this.lines.push(new Line(this.ctx, x1, y1, x2, y2));
			}
		}
	}
	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = this.fill;
		this.ctx.strokeStyle = this.stroke;
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].render();
		}
		for (let j = 0; j < this.lines.length; j++) {
			this.lines[j].render();
		}
	}
}
