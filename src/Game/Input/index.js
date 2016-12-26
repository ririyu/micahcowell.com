export default class Input {
	constructor() {
		this.move = {};
	}
	init() {
		document.addEventListener('keydown', this.handleKeyInput.bind(this, true));
		document.addEventListener('keyup', this.handleKeyInput.bind(this, false));
	}
	handleKeyInput(status, e) {
		switch (e.which) {
			case 37:
				this.move.left = status;
				break;
			case 38:
				this.move.up = status;
				break;
			case 39:
				this.move.right = status;
				break;
			case 40:
				this.move.down = status;
				break;
		}
	}
}
