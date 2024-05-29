import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';
import { defineLocale, ruLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { Flight } from 'src/app/models/flight';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  control = new FormControl('');
  cities: string[] = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Челябинск'];
  filteredCities: Observable<string[]> | undefined;
  flights: Flight[] = [];
  searchForm: FormGroup;
  date: any;
  showFlightHeader: boolean = true;
  filteredDepCities: Observable<string[]> | undefined;
  constructor(private formBuilder: FormBuilder) {
    defineLocale('ru', ruLocale);
    this.searchForm = this.formBuilder.group({
      from: [''],
      to: [''],
      date: [''],
      adultPassengers: [],
      childPassengers: []
    });
  }

  ngOnInit() {
    this.filteredCities = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredDepCities = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );


  }

  private _filterDeparture(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.cities.filter(city => this._normalizeValue(city).includes(filterValue));
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.cities.filter(city => this._normalizeValue(city).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  onSubmit(): void {


    this.flights = [
      {
        id: 1, departure: 'Москва', arrival: 'Челябинск', carrier: 'Aeroflot', departureTime: '07:00', arrivalTime: '11:35', price: 7500,
        flightNumber: 'su-1446'
      },
      // {
      //   id: 2, departure: 'Москва', arrival: 'Челябинск', carrier: 'Aeroflot', departureTime: '19:20', arrivalTime: '23:55', price: 4500,
      //   flightNumber: 'su-1446'
      // },
    ];
  }

  addEvent(arg0: string, $event: MatDatepickerInputEvent<any, any>): void {

  }
}


