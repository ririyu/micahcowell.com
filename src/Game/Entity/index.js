export default class Entity {
	constructor(ctx, x, y, v, cw, ch) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.velocity = v;
		this.canvas = {
			width: cw,
			height: ch
		}
		this.sprite;
	}
	init(sprite) {
		this.sprite = sprite;
	}
}
