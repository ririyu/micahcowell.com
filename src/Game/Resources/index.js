export default class Resources {
	constructor(src) {
		this.src = src;
		this.cache = [];
		this.loaded = 0;
		this.callback;
	}
	load(callback) {
		this.callback = callback;
		for (let i = 0; i < this.src.length; i++) {
			let img = new Image();
		    img.src = this.src[i];
		    img.onload = this.advance.bind(this)
		    this.cache.push(img);
		}
	}
	advance() {
		this.loaded++;
		if (this.loaded >= this.src.length) {
			this.callback();
		}
	}
}
