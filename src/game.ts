import { Context } from "./utils/context";
import { GameConfigLoader } from "./utils/loaders";

export class Game {
    private _configCtx: Context<GameConfigLoader.IGameConfig>;
    constructor(context: Context<GameConfigLoader.IGameConfig>) {
        this._configCtx = context;
    }

    get gameCtx() {
        return this._configCtx;
    }
}