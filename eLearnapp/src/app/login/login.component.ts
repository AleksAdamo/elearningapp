import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router } from '@angular/router';
import { KurseService } from '../kurse.service';
import { User } from '../users/user';



@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [KurseService]
})

export class LoginComponent implements OnInit {
    //KurseService injizieren
    private users: User[];
    constructor(private kurseService: KurseService, private router: Router) {

    }

    ngOnInit(): void {
        this.kurseService.getUsers().then(users => this.users = users);
    }

    goOn(): void {
        this.router.navigate(['/admin/kursmenu'])
    }

}