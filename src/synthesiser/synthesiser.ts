export class Synthesiser {
    private _context: AudioContext;
    private _oscillator: OscillatorNode;
    private _gain: GainNode;

    constructor() {
        this._context = new AudioContext();
        this._oscillator = this._context.createOscillator();
        this._gain = this._context.createGain();

        this._oscillator.connect(this._gain);
        this._gain.connect(this._context.destination);
        this._gain.gain.value = 0;
        this._oscillator.start(this._context.currentTime);
    }

    public play(frequency: number): void {
        this._oscillator.frequency.value = frequency;
        this._gain.gain.exponentialRampToValueAtTime(1, this._context.currentTime + 0.05);

        this._gain.gain.exponentialRampToValueAtTime(0.00001, this._context.currentTime + 0.25);
    }
}

export const synthesiser: Synthesiser = new Synthesiser();
