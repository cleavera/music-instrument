import { Component, Input } from '@angular/core';
import { Beat } from '../../beat/beat';
import { Note } from '../../note/note';

@Component({
    selector: 'ui-beat',
    styleUrls: ['./beat.ui.scss'],
    templateUrl: './beat.ui.html'
})
export class BeatUi {
    @Input()
    public beat: Beat;

    public get notes(): Array<Note> {
        return this.beat.scale.notes;
    }

    public isActive(note: Note): boolean {
        return this.beat.activeNotes.indexOf(this._getNoteIndex(note)) > -1;
    }

    public activate(note: Note): void {
        this.beat.activeNotes.push(this._getNoteIndex(note));
    }

    public deactivate(note: Note): void {
        if (this._getNoteIndex(note) !== -1) {
            this.beat.activeNotes.splice(this.beat.activeNotes.indexOf(this._getNoteIndex(note)), 1);
        }
    }

    private _getNoteIndex(note: Note): number {
        return this.beat.scale.notes.indexOf(note);
    }
}
