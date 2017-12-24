import { IScale } from '../scale/interfaces/scale.interface';

export class Beat {
    public scale: IScale;
    public activeNotes: Array<number>;

    constructor(scale: IScale) {
        this.scale = scale;
        this.activeNotes = [];
    }

    public play(): void {
        this.activeNotes.forEach((note: number): void => {
            this.scale.notes[note].play();
        });
    }
}
