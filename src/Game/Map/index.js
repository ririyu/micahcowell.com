export default class Map {
	constructor(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.speed = 5;
		this.x = 0;
		this.y = 0;
		this.bg;
	}
	init(img) {
		this.bg = img;
	}
	update(move) {
		console.log(this.x + ', ' +this.y);
		if (move.left && this.x != 0) {
			this.x += this.speed;
		}
		if (move.up && this.y != 0) {
			this.y += this.speed;
		}
		if (move.right && this.x != -this.width) {
			this.x -= this.speed;
		}
		if (move.down && this.y != -this.height) {
			this.y -= this.speed;
		}
	}
 	render() {
		this.ctx.drawImage(this.bg, this.x, this.y);
	}
}
