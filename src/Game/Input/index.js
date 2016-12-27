export default class Input {
	constructor() {
		this.left;
		this.up;
		this.right;
		this.down;
	}
	init() {
		document.addEventListener('keydown', this.handleKeyDown.bind(this, true));
		document.addEventListener('keyup', this.handleKeyUp.bind(this));
	}
	handleKeyDown(status, e) {
		switch (e.which) {
			case 37:
			case 65:
				this.left = status;
				this.up = !status;
				this.right = !status;
				this.down = !status;
				break;
			case 38:
			case 87:
				this.left = !status;
				this.up = status;
				this.right = !status;
				this.down = !status;
				break;
			case 39:
			case 68:
				this.left = !status;
				this.up = !status;
				this.right = status;
				this.down = !status;
				break;
			case 40:
			case 83:
				this.left = !status;
				this.up = !status;
				this.right = !status;
				this.down = status;
				break;
		}
	}
	handleKeyUp(e) {
		this.left = false;
		this.up = false;
		this.right = false;
		this.down = false;
	}
}
