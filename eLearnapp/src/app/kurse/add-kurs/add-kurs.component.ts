import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { KurseService } from '../../kurse.service';
import { Kurs } from '../kurs';
import { Kategorie } from '../../Kategorien/kategorie';

@Component({
  selector: 'app-add-kurs',
  templateUrl: './add-kurs.component.html',
  styleUrls: ['./add-kurs.component.css']
})
export class AddKursComponent implements OnInit {
    private kurs = new Kurs();
    private kategorien: Kategorie[];
    constructor(
        private kurseService: KurseService,
        private router: Router
    ) { }

    ngOnInit() {
        this.kurseService.getKategorien().then(kategorien => this.kategorien = kategorien);
  }

  save(): void {
      this.kurseService.saveKurs(this.kurs).then(() => this.router.navigate(['/']));
  }

}
