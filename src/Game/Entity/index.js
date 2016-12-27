export default class Entity {
	constructor(ctx, width, height, velocity, x, y) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.velocity = velocity;
		this.x = x;
		this.y = y;
		this.res;
	}
	init(res) {
		this.res = res;
	}
}
