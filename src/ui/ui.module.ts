import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoteUi } from './note/note.ui';

@NgModule({
    bootstrap: [
        NoteUi
    ],
    declarations: [
        NoteUi
    ],
    imports: [
        BrowserModule
    ]
})
export class UiModule {}
