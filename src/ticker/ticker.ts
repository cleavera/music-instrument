import { ICallbackDeregister } from './interfaces/callback-deregister.interface';
import { ITickCallback } from './interfaces/tick-callback.interface';

export class Ticker {
    public bpm: number;
    private callbacks: Array<ITickCallback>;

    private get interval(): number {
        return (this.bpm / (60 * 4)) * 1000;
    }

    constructor(bpm: number = 60) {
        this.bpm = bpm;
        this.tick();
    }

    public register(callback: ITickCallback): ICallbackDeregister {
        this.callbacks.push(callback);

        return (): void => {
            this.callbacks.splice(this.callbacks.indexOf(callback), 1);
        };
    }

    private callback(): void {
        this.callbacks.forEach((callback: ITickCallback) => {
            callback();
        });
    }

    private tick(): void {
        this.callback();

        setInterval(() => {
            this.tick();
        }, this.interval);
    }
}
