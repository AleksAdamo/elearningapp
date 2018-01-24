import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //um die in der URL übergebene ID abzurufen

import 'rxjs/add/operator/switchMap';

import { KurseService } from '../kurse.service';
import { Kurs } from '../kurse/kurs';
import { Abfrage } from '../abfragen/abfrage';
import { DeleteDialogComponent } from '../delete-dialog.component';
import { AnswerDialogComponent } from '../answer-dialog.component';

@Component({
    selector: 'app-learning',
    templateUrl: './learning.component.html',
    styleUrls: ['./learning.component.css'],
    providers: [KurseService]
})
export class LearningComponent implements OnInit {

    private kurs: Kurs;
    private abfragen: Abfrage[] = new Array<Abfrage>();
    constructor(
        private route: ActivatedRoute,
        private kurseService: KurseService,
        private router: Router,
        private dialog: MatDialog) { }

    ngOnInit() {
       
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getKurs(+params.get('kursID')))
            .subscribe(kurs => this.kurs = kurs);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getAbfragen(+params.get('kursID')))
            .subscribe(abfragen => this.abfragen = abfragen);//den Kurs den ich zurückbekommen habe auf den aktuellen Kurs setzen
        //this.kurseService.getKurs(+1).then(kurs => this.kurs = kurs);
  
      //  this.abfragen = this.kurs.abfragen;
       // console.log(this.kurs.abfragen.length);
    }


    showAnswer(abfrage:Abfrage): void {
        let dialogRef = this.dialog.open(AnswerDialogComponent);
        dialogRef.componentInstance.test = abfrage.antwort;
        console.log(abfrage.antwort);

    }
    delete(): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.kurseService.deleteKurs(this.kurs.kursID).then(() => this.router.navigate(['/']));
            }
        })

    }
    
}
