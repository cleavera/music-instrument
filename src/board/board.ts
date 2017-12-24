import { Beat } from '../beat/beat';
import { IScale } from '../scale/interfaces/scale.interface';
import { Ticker } from '../ticker/ticker';

export class Board {
    public beats: Array<Beat>;

    private pointer: number;

    constructor(ticker: Ticker, scale: IScale, beats: number) {
        this.beats = [];
        this.pointer = 0;

        for (let x: number = 0; x < beats; x++) {
            this.beats.push(new Beat(scale));
        }

        ticker.register(() => {
            this.play();
        });
    }

    public play(): void {
        this.beats[this.pointer].play();
        this.increment();
    }

    private increment(): void {
        this.pointer++;

        if (this.pointer >= this.beats.length) {
            this.pointer = 0;
        }
    }
}
