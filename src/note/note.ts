import { synthesiser } from '../synthesiser/synthesiser';

export class Note {
    public frequency: number;

    constructor(frequency: number) {
        this.frequency = frequency;
    }

    public play(): void {
        synthesiser.play(this.frequency);
    }
}
