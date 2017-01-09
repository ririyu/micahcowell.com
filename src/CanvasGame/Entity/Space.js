import Entity from '../Entity';

export default class Space extends Entity {
	constructor(ctx) {
		super(ctx);
		this.v = 1;
		this.stars = [];
		this.multiplier = 0.001; // bigger = more stars
	}
	init(x, y) {
		super.init(x, y);
		this.build();
	}
	build() {
		let sw = window.screen.width;
		let sh = window.screen.height;
		let starCount = this.multiplier * sw * sh;
		for (let i = 0; i < (starCount); i++) {
			let x = Math.random() * sw;
			let y = Math.random() * sh;
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
