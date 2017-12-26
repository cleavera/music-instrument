import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
    selector: 'ui-note',
    template: '',
    styleUrls: [
        './note.ui.scss'
    ]
})
export class NoteUi {
    @HostBinding('class.is-active')
    public active: boolean;

    @HostListener('click', ['$event'])
    public onClick(): void {
        this.active = !this.active;
    }
}
