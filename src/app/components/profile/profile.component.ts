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
      birthdate: '18-01-2002',
      gender: 'Мужской',
      passengerTypes: ['Обычный']
    };
  }

  mockSubsidies(): void {
    // Mock-данные для субсидий
    this.subsidies = [
      { id: 1, name: 'Субсидия на перелет по тарифу для молодежи', startDate: '01-01-2024', endDate: '06-30-2024', amount: 2 },
      { id: 2, name: 'Субсидия на перелет по тарифу для ДФО', startDate: '07-01-2024', endDate: '12-31-2024', amount: 4 }
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
