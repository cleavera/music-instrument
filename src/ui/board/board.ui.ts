import { Component, Input } from '@angular/core';

import { Beat } from '../../beat/beat';
import { HalfStepScale, NOTE } from '../../scale';
import { Ticker } from '../../ticker/ticker';

@Component({
    selector: 'ui-board',
    styleUrls: ['./board.ui.scss'],
    templateUrl: './board.ui.html'
})
export class BoardUi {
    @Input('beats')
    public _beats: number;

    @Input()
    public notes: number;

    @Input()
    public bpm: number;

    public beats: Array<Beat>;
    public ticker: Ticker;

    private currentBeat: number;

    constructor() {
        this.currentBeat = 0;
    }

    public tick(): void {
        if (++this.currentBeat >= this.beats.length) {
            this.currentBeat = 0;
        }
    }

    public ngOnChanges(): void {
        this.beats = [];
        this.ticker = new Ticker(this.bpm);

        for (let x: number = 0; x < this._beats; x++) {
            this.beats.push(new Beat(new HalfStepScale(NOTE.C4, this.notes)));
        }

        this.ticker.register(() => {
            this.tick();
        });
    }
}
