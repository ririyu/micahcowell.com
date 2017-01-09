import Entity from '../Entity';

export default class Space extends Entity {
	constructor(ctx) {
		super(ctx);
		this.v = 1;
		this.stars = [];
		this.complexity = 1000;
	}
	init(x, y) {
		super.init(x, y);
		this.build();
	}
	build() {
		for (let i = 0; i < this.complexity; i++) {
			let x = Math.random() * window.screen.width;
			let y = Math.random() * window.screen.height;
			let w = Math.random() * (5 - 2) + 2;
			this.stars[i] = {x, y, w};
		}
	}
	update() {
		super.update();
	}
	render() {
		super.render();
		this.ctx.fillStyle = '#666666';
		for (let i = 0; i < this.stars.length; i++) {
			let { x, y, w } = this.stars[i];
			this.ctx.fillRect(x, y, w, w);
		}
	}
}
