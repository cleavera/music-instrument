import { Note } from '../note/note';
import { FREQUENCY } from './constant/frequency,constant';

export class MajorScale {
    public notes: Array<Note>;

    constructor(start: number, length: number) {
        this.notes = [];

        for (let x: number = 0; x < length; x++) {
            console.log(x, this._getNote(x));
            this.notes.push(new Note(FREQUENCY[start + this._getNote(x)]));
        }
    }

    private _getNote(x: number): number {
        const divisor: number = x / 7;
        const octave: number = Math.floor(divisor);
        const note: number = (divisor - octave) * 7;

        let ret: number = (octave * 6) + note;

        if (note >= 3) {
            ret -= 0.5;
        }

        return ret * 2;
    }
}
