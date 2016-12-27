import Entity from '../../Entity';

export default class Hero extends Entity {
	constructor(ctx, x, y, v, cw, ch) {
		super(ctx, x, y, v, cw, ch);
		this.color;
		this.width;
	}
	init(color, width) {
		this.color = color;
		this.width = width;
	}
	update(input) {
		if (input.left && (this.x - this.velocity) >= 0) {
			this.x -= this.velocity;
		}
		if (input.up && (this.y - this.velocity) >= 0) {
			this.y -= this.velocity;
		}
		if (input.right && (this.x + this.velocity) <= (this.canvas.width - this.width/2)) {
			this.x += this.velocity;
		}
		if (input.down && (this.y + this.velocity) <= (this.canvas.height - this.width)) {
			this.y += this.velocity;
		}
	}
	render() {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.rect(this.x, this.y, this.width, this.width);
		this.ctx.fill();
	}
}
