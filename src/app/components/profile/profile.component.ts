import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { Subsidy } from 'src/app/models/subsidy';
import { PassengerService } from 'src/app/services/passenger.service';
import { SubsidyService } from 'src/app/services/subsidy.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passenger: Passenger | undefined;
  greeting: string = '';
  subsidies: any;

  constructor() { }

  ngOnInit(): void {
    this.mockPassenger(); // Используем mock-данные для пассажира
    this.mockSubsidies(); // Используем mock-данные для субсидий
    this.setGreeting();
  }
  mockPassenger(): void {
    // Mock-данные для пассажира
    this.passenger = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthdate: '1990-01-01', // Формат даты: ГГГГ-ММ-ДД
      gender: 'Мужской',
      passengerTypes: ['Обычный']
    };
  }

  mockSubsidies(): void {
    // Mock-данные для субсидий
    this.subsidies = [
      { id: 1, name: 'Субсидия на перелет по тарифу для молодежи', startDate: '2024-01-01', endDate: '2024-06-30', amount: 2 },
      { id: 2, name: 'Субсидия на перелет по тарифу для ДФО', startDate: '2024-07-01', endDate: '2024-12-31', amount: 4 }
    ];
  }

  setGreeting(): void {
    const time = new Date().getHours();
    if (time < 12) {
      this.greeting = 'Доброе утро';
    } else if (time < 18) {
      this.greeting = 'Добрый день';
    } else {
      this.greeting = 'Добрый вечер';
    }
  }
}