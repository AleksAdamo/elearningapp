import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router } from '@angular/router';
import { KurseService } from '../kurse.service';
import { User } from '../users/user';
import { FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [KurseService]
})

export class RegistrationComponent implements OnInit {

    //KurseService injizieren
    private users: User[];
    constructor(private kurseService: KurseService, private router: Router) {

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}