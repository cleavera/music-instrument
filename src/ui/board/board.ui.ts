import { Component, Input, SimpleChanges } from '@angular/core';

import { Beat } from '../../beat/beat';
import { HalfStepScale, NOTE } from '../../scale';

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

    public beats: Array<Beat>;

    public ngOnChanges(changes: SimpleChanges): void {
        this.beats = [];

        for (let x: number = 0; x < changes._beats.currentValue; x++) {
            this.beats.push(new Beat(new HalfStepScale(NOTE.C4, changes.notes.currentValue)));
        }
    }
}
