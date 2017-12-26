import { Component, Input } from '@angular/core';

import { Beat } from '../../beat/beat';
import { Board } from '../../board/board';
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

    public ticker: Ticker;
    public board: Board;
    public get beats(): Array<Beat> {
        return this.board.beats;
    }

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
        this.ticker = new Ticker(this.bpm);
        this.board = new Board(this.ticker, new HalfStepScale(NOTE.C4, this.notes), this._beats);

        this.ticker.register(() => {
            this.tick();
        });
    }
}
