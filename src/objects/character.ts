import { Sprite } from "./sprite";

export class Character {
    private _name: string;
    private _sprite: Sprite;

    constructor(options: Character.IOptions) {
        this._name = options.name;
        this._sprite = new Sprite("/assets/owlet/Owlet_Monster.png");
    }
}

export namespace Character {
    export interface IOptions {
        name: string;
    }
}