import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationPopupComponent } from './components/registration-popup/registration-popup.component';
import { SubsidiesComponent } from './components/subsidies/subsidies.component';
import {AppRoutingModule} from './app-routing.module'
import { ButtonPanelComponent } from './components/button-panel/button-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlightSearchFormComponent } from './components/flight-search-form/flight-search-form.component';
import { InfoComponent } from './components/info/info.component';
import { RoutesComponent } from './components/routes/routes.component';
import { FlightsComponent } from './components/flights/flights.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AuthDialogComponent,
    HeaderComponent,
    RegistrationPopupComponent,
    SubsidiesComponent,
    ButtonPanelComponent,
    PageNotFoundComponent,
    FlightSearchFormComponent,
    InfoComponent,
    RoutesComponent,
    FlightsComponent
  ],
  imports: [
    // NgxDatesPickerModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
