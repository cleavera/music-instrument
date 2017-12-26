import { Note } from '../note/note';
import { FREQUENCY } from './constant/frequency,constant';

export class HalfStepScale {
    public notes: Array<Note>;

    constructor(start: number, length: number) {
        this.notes = [];

        for (let x: number = 0; x < length; x++) {
            this.notes.push(new Note(FREQUENCY[start + x]));
        }
    }
}
