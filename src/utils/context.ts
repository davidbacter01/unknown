export class Context<T> {
    private _config: T;
    constructor(config:T) {
        this._config = config;
    }

    get config(): T{
        return this._config;
    }
}