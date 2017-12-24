import { Component } from '../../core';

@Component({
    selector: 'ui-note',
    styles: require('./note.ui.scss')
})
export class NoteUi extends HTMLElement {
    public connectedCallback(): void {
        this.addEventListener('click', () => {
            if (this.hasAttribute('active')) {
                this.removeAttribute('active');
            } else {
                this.setAttribute('active', '');
            }
        });
    }
}
