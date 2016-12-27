export default class Input {
	constructor() {
		this.left;
		this.up;
		this.right;
		this.down;
	}
	init() {
		document.addEventListener('keydown', this.handleKeyInput.bind(this, true));
		document.addEventListener('keyup', this.handleKeyInput.bind(this, false));
	}
	handleKeyInput(status, e) {
		switch (e.which) {
			case 37:
				this.left = status;
				break;
			case 38:
				this.up = status;
				break;
			case 39:
				this.right = status;
				break;
			case 40:
				this.down = status;
				break;
		}
	}
}
