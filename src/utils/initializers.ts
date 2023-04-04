import { Game } from "../game";
import { GameConfigLoader, GAME_CONFIG_LOADER } from "./loaders";
import { Context } from "./context";

export async function initGame(): Promise<Game> {
    let game: Game;
    const config = await GAME_CONFIG_LOADER.getGameConfig();
    const configCtx = new Context<GameConfigLoader.IGameConfig>(config);
    game = new Game(configCtx);
    return game;
}