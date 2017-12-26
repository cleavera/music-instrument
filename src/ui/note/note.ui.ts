import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-note',
    template: '',
    styleUrls: [
        './note.ui.scss'
    ]
})
export class NoteUi {
    @Input()
    @HostBinding('class.is-active')
    public active: boolean;

    @Output()
    public onActivate: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public onDeactivate: EventEmitter<void> = new EventEmitter<void>();

    @HostListener('click', ['$event'])
    public onClick(): void {
        if (this.active) {
            this.onDeactivate.emit();
        } else {
            this.onActivate.emit();
        }
    }
}
