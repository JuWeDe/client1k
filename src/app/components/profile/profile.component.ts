import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { Subsidy } from 'src/app/models/subsidy';
import { Ticket } from 'src/app/models/ticket';
import { PassengerService } from 'src/app/services/passenger.service';
import { SubsidyService } from 'src/app/services/subsidy.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passenger!: Passenger;
  greeting: string = '';
  subsidies!: Subsidy[];
  passengerService!: PassengerService;
  subsidyService!: SubsidyService;
  flightsHist!: Ticket[];

  setGreeting(): void {
    const time = new Date().getHours();
    if (time < 12 && time > 6) {
      this.greeting = 'Доброе утро';
    } else if (time < 18 && time > 12) {
      this.greeting = 'Добрый день';
    } else if (time < 6 && time >= 0) {
      this.greeting = 'Добрый вечер';
    } else {
      this.greeting = 'Добрый вечер';
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.mockPassenger(); // Используем mock-данные для пассажира
    this.mockSubsidies(); // Используем mock-данные для субсидий
    this.mockFlightHistory(); // Используем mock-данные для субсидий
    this.setGreeting();
  }
  mockPassenger(): void {
    // Mock-данные для пассажира
    this.passenger = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthdate: '01-01-1999',
      gender: 'Мужской',
      passengerTypes: ['Обычный']
    };
  }
  mockFlights(): void {
    // Mock-данные для перелетов
    this.passenger = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthdate: '01-01-1999',
      gender: 'Мужской',
      passengerTypes: ['Обычный']
    };
  }
  mockSubsidies(): void {
    // Mock-данные для субсидий
    this.subsidies = [
      { id: 1, name: 'Субсидия на перелет по тарифу для молодежи', startDate: '20.06.2022', endDate: '31.12.2024', amount: 2 },
      { id: 2, name: 'Субсидия на перелет по тарифу для ДФО', startDate: '07.01.2024', endDate: '31.12.2024', amount: 4 }
    ];
  }
  mockFlightHistory(): void {
    // Mock-данные для субсидий
    this.flightsHist = [
      { id: 1, departure: 'Москва (Шереметьево)', arrival: 'Челябинск (Баландино)', carrier: 'Аэрофлот', flightNumber: 'SU-1422', date: '24.06.2023', departureTime: '7:20', arrivalTime: '12:05', price: 5340 },
      { id: 2, arrival: 'Москва (Шереметьево)', departure: 'Челябинск (Баландино)', carrier: 'Аэрофлот', flightNumber: 'SU-1422', date: '30.08.2023', departureTime: '7:20', arrivalTime: '7:45', price: 5340 },
      { id: 3, departure: 'Москва (Шереметьево)', arrival: 'Челябинск (Баландино)', carrier: 'Победа', flightNumber: 'DP‑6569', date: '28.12.2022', departureTime: '19:20', arrivalTime: '23:15', price: 3580 },
      { id: 4, arrival: 'Москва (Шереметьево)', departure: 'Челябинск (Баландино)', carrier: 'Победа', flightNumber: 'DP‑6569', date: '05.02.2022', departureTime: '5:20', arrivalTime: '05:45', price: 3580 },
      
    ];
  }
  getUser(id: number) {
    
  }
  getSubsidies(passengerId: number) {
  }
}
