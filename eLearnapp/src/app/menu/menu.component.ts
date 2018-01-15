﻿import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router } from '@angular/router';

import { KurseService } from '../kurse.service';
import { Kategorie } from '../Kategorien/kategorie';
import { Kurs } from '../kurse/kurs';

@Component({
    selector: 'kurs-menu', //was ist das HTML Element was ich nutzen will um etwas darzustellen
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [KurseService]
})
export class MenuComponent implements OnInit {

    private kategorien: Kategorie[];
    //KurseService injizieren
    constructor(private kurseService: KurseService, private router: Router) {

    }

    ngOnInit(): void {
        this.kurseService.getKategorien().then(kategorien => this.kategorien = kategorien);
    }

    goToKurs(kurs: Kurs): void {
        this.router.navigate(['/kurs', kurs.kursID]);
    }

    addKurs(): void {
        this.router.navigate(['/kurs/add'])
    }
}