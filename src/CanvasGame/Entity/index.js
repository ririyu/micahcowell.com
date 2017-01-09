export default class Entity {
	constructor(ctx) {
		this.ctx = ctx;
		this.cw;
		this.ch;
		this.x;
		this.y;
		this.v;
	}
	init(x, y) {
		this.x = x;
		this.y = y;
		this.resize();
	}
	resize() {
		this.cw = this.ctx.canvas.width;
		this.ch = this.ctx.canvas.height;
	}
	update() {
		this.resize();
	}
	render() {}
}
