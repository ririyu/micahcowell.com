import css from './Styles/main.scss';
import Game from './Game';

// create elements
const app = document.getElementById('app');
const container = document.createElement('div');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
container.id = 'app-container';
canvas.width = 384;
canvas.height = 320;
app.appendChild(container).appendChild(canvas);

// configure game
const game = new Game(ctx, canvas.width, canvas.height);
game.init();
