import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //um die in der URL �bergebene ID abzurufen

import 'rxjs/add/operator/switchMap';

import { KurseService } from '../../kurse.service';
import { Kurs } from '../kurs';
import { Kategorie } from '../../Kategorien/kategorie';
import { Abfrage } from '../../abfragen/abfrage';
import { DeleteDialogComponent } from '../../delete-dialog.component';

@Component({
    selector: 'app-kurs-detail',
    templateUrl: './kurs-detail.component.html',
    styleUrls: ['./kurs-detail.component.css']
})
export class KursDetailComponent implements OnInit {

    private kurs: Kurs;
    private kategorien: Kategorie[];
    private abfragen: Abfrage[] = new Array<Abfrage>();

    constructor(
        private route: ActivatedRoute,
        private kurseService: KurseService,
        private router: Router,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.kurseService.getKategorien().then(kategorien => this.kategorien = kategorien);
        //this.kurseService.getAbfragen().then(abfragen => this.abfragen = abfragen);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getKurs(+params.get('kursID')))
            .subscribe(kurs => this.kurs = kurs); //den Kurs den ich zur�ckbekommen habe auf den aktuellen Kurs setzen
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getAbfragen(+params.get('kursID')))
            .subscribe(abfragen => this.abfragen = abfragen);
       
    }

    save(): void {
        this.kurseService.saveKurs(this.kurs).then(() => this.router.navigate(['/admin/kursmenu'])); //navigiert anschlie�end auf die Startseite
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


