import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { ButtonComponent } from './components/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
