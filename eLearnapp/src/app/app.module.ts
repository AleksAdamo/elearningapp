import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; //Um Einträge ändern zu können
import { NgModule, Component } from '@angular/core';

import { MatToolbarModule, MatListModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';

import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KursDetailComponent } from './kurse/kurs-detail/kurs-detail.component';
import { AppRoutingModule } from './app-routing.module'; //Das Modul wird hier referenziert
import { KurseService } from './kurse.service';
import { DeleteDialogComponent } from './delete-dialog.component';
import { AddKursComponent } from './kurse/add-kurs/add-kurs.component';


@NgModule({
  declarations: [
      AppComponent,
      MenuComponent,
      KursDetailComponent,
      DeleteDialogComponent,
      AddKursComponent
  ],
  entryComponents: [DeleteDialogComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatToolbarModule,
      HttpModule,
      FlexLayoutModule,
      MatListModule,
      MatProgressSpinnerModule,
      AppRoutingModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule
  ],
  exports: [],
  providers: [KurseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
