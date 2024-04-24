import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Добавлено ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationPopupComponent } from './components/registration-popup/registration-popup.component';
import { SubsidiesComponent } from './components/subsidies/subsidies.component';
import { AppRoutingModule } from './app-routing.module'
import { ButtonPanelComponent } from './components/button-panel/button-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InfoComponent } from './components/info/info.component';
import { RoutesComponent } from './components/routes/routes.component';
import { FlightsComponent } from './components/flights/flights.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReferenceComponent } from './components/reference/reference.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ruLocale } from 'ngx-bootstrap/locale';
import { MatNativeDateModule } from '@angular/material/core'; // Импортируем MatNativeDateModule


@NgModule({
  declarations: [
    AppComponent,
    AuthDialogComponent,
    HeaderComponent,
    RegistrationPopupComponent,
    SubsidiesComponent,
    ButtonPanelComponent,
    PageNotFoundComponent,
    InfoComponent,
    ReferenceComponent,
    RoutesComponent,
    FlightsComponent
  ],
  imports: [
    CommonModule,
    BsDatepickerModule,
    ReactiveFormsModule, // Добавлено ReactiveFormsModule
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    BsLocaleService,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
