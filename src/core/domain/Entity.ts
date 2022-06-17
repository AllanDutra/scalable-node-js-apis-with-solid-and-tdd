import crypto from 'crypto';

// entidade não é necessariamente uma cópia de uma tabela no banco
export abstract class Entity<T> {
    protected _id: string;
    public props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();
    }
}