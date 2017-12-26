import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BeatUi } from './beat/beat.ui';
import { BoardUi } from './board/board.ui';
import { InstrumentUi } from './instrument/instrument.ui';
import { NoteUi } from './note/note.ui';

@NgModule({
    bootstrap: [
        InstrumentUi
    ],
    declarations: [
        BeatUi,
        BoardUi,
        InstrumentUi,
        NoteUi
    ],
    imports: [
        BrowserModule
    ]
})
export class UiModule {}
