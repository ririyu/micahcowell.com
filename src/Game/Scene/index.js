export default class Scene {
	constructor(ctx) {
		this.ctx = ctx;
		this.x = 0;
		this.y = 0;
		this.bg;
	}
	init(bg) {
		this.bg = bg;
	}
 	render() {
		this.ctx.drawImage(this.bg, this.x, this.y);
	}
}
