import Entity from '../Entity';

export default class Line extends Entity {
	constructor(ctx, x1, y1, x2, y2) {
		super(ctx);
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
		this.max = 100;
	}
	render() {
		if (Math.abs(this.x1 - this.x2) <= this.max &&
			Math.abs(this.y1 - this.y2) <= this.max) {
			this.ctx.beginPath();
			this.ctx.moveTo(this.x1, this.y1);
			this.ctx.lineTo(this.x2, this.y2);
			this.ctx.stroke();
		}
	}
}
