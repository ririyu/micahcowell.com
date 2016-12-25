import css from './Styles/main.scss';
import Game from './Components/game.js';

// create elements
const app = document.getElementById('app');
const container = document.createElement('div');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
container.id = 'app-container';
canvas.width = 240;
canvas.height = 160;
app.appendChild(container).appendChild(canvas);

// configure game
const game = new Game(ctx);
game.test();
