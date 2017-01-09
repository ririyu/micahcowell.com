export default class Entity {
	constructor(ctx) {
		this.ctx = ctx;
		this.cw = this.ctx.canvas.width;
		this.ch = this.ctx.canvas.height;
		this.x;
		this.y;
	}
	render() {}
}
