import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'answer-dialog',
    templateUrl: './answer-dialog.component.html'
})

export class AnswerDialogComponent {
    public test: string;
    constructor(public dialogRef: MatDialogRef<AnswerDialogComponent>) { }
}