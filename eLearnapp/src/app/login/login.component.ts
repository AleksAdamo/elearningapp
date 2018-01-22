import { Component, OnInit } from '@angular/core'; //OnInit = Lebenszyklus event
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { KurseService } from '../kurse.service';
import { User } from '../users/user';
import { FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [KurseService]
})

export class LoginComponent implements OnInit {
    //KurseService injizieren
    //private users: User[];
    private user: User;

    constructor(
        private kurseService: KurseService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
       // this.kurseService.getUsers().then(users => this.users = users);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.kurseService.getUserById(+params.get('userID')))
            .subscribe(user => this.user = user);
    }

    goOn(): void {
        this.router.navigate(['/admin/kursmenu'])
    }

    login(passwort: string, email: string): void {
        if (this.user.email == email) {
            if (this.user.passwort == passwort) {
                this.router.navigate(['admin/kursmenu'])
            }
        }
        else {
            this.router.navigate(['/'])
        }
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
}