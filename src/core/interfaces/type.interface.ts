export interface Type<T> extends Function {// tslint:disable-line interface-name
    new (...args: Array<any>): T; // tslint:disable-line no-any
}
