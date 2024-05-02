import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subsidy } from '../models/subsidy';

@Injectable({
  providedIn: 'root'
})
export class SubsidyService {

  constructor() { }

  // Простая заглушка, возвращающая фиктивные данные о субсидиях
  getSubsidies(passengerId: number): Observable<Subsidy[]> {
    // Предположим, что у пассажира с ID 1 есть две субсидии
    const subsidies: Subsidy[] = [
      { id: 1, startDate: '2024-01-01', name: 'Субсидия на перелет по тарифу для молодежи', endDate: '2024-06-30', amount: 2 },
      { id: 2, startDate: '2024-07-01', name: 'Субсидия на перелет по тарифу для ДФО', endDate: '2024-12-31', amount: 4 }
    ];
    return of(subsidies);
  }
}
