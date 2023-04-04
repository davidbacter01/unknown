import { initGame } from "./utils/initializers";


async function start(): Promise<void> {
    const canvas: HTMLCanvasElement = document.getElementById('game-screen') as HTMLCanvasElement;
    canvas.style.backgroundColor = "black";
    const renderingCtx = canvas.getContext('2d');
    renderingCtx.canvas.height = window.innerHeight - 10;
    renderingCtx.canvas.width = window.innerWidth - 10;
    const game = await initGame();
    document.title = game.gameCtx.config.name;
    console.log('GAME: ', game);
}

start();
