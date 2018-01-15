import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//wohin möchte ich navigieren?
import { MenuComponent } from './menu/menu.component';
import { KursDetailComponent } from './kurse/kurs-detail/kurs-detail.component';
import { AddKursComponent } from './kurse/add-kurs/add-kurs.component';
//routen definieren
const routes: Routes = [
    //Zu jeder Route die ich routen möchte vergebe ich einen Pfad und eine Komponente
    { path: '', redirectTo: '/menu', pathMatch: 'full' }, //Standartseite
    { path: 'menu', component: MenuComponent },
    { path: 'kurs/add', component: AddKursComponent }, //neue komponente in der app.module.ts importieren
    { path: 'kurs/:kursID', component: KursDetailComponent }
]

//Modul konfigurieren
@NgModule({
    imports: [RouterModule.forRoot(routes)], //Routendefinitionen übergeben um zu konfigurieren
    exports: [RouterModule]
})
export class AppRoutingModule { }