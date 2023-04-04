class GameConfigLoader<T> {
    private _src: string;
    constructor(options: GameConfigLoader.IOptions) {
        this._src = options.src;
    }

    async getGameConfig(): Promise<T> {
        const file = await fetch(this._src);
        const jsonData: T = await file.json();
        return jsonData;
    }
}

export namespace GameConfigLoader {
    export interface IOptions {
        src: string;
    }

    export interface IGameConfig {
        name: string;
        assets: IAssetsConfig;
    }

    export interface IAssetsConfig {
        characters: ICharactersConfig;
    }

    export interface ICharactersConfig {
        owlet: string;
    }
}

export const GAME_CONFIG_LOADER = new GameConfigLoader<GameConfigLoader.IGameConfig>({src:'../game.config.json'});