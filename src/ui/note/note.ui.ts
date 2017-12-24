import { Component } from '../../core';

@Component({
    selector: 'ui-note',
    styles: require('./note.ui.scss')
})
export class NoteUi extends HTMLElement {
    public get isOn(): boolean {
        return this.hasAttribute('active');
    }

    public set isOn(value: boolean) {
        if (value) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }

    public connectedCallback(): void {
        this.addEventListener('click', () => {
            this.isOn = !this.isOn;
        });
    }
}
