import Entity from '../../Entity';

export default class Map extends Entity {
	update(input, dt) {
		let step = Math.round(this.velocity * dt);
		if (input.left && (this.x + step) <= 0) {
			this.x += step;
		}
		if (input.up && (this.y + step) <= 0) {
			this.y += step;
		}
		if (input.right && (this.x - step) >= -this.width) {
			this.x -= step;
		}
		if (input.down && (this.y - step) >= -this.height) {
			this.y -= step;
		}
	}
 	render() {
		this.ctx.drawImage(this.res.cache[0], this.x, this.y);
	}
}
