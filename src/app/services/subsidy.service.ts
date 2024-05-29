import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subsidy } from '../models/subsidy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubsidyService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:5160';

  

  getSubsidies(passengerId: number): Observable<Subsidy[]> {
    const subsidies: Subsidy[] = [
      { id: 1, startDate: '01-01-2024', name: 'Субсидия на перелет по тарифу для молодежи', endDate: '06-30-2024', amount: 2 },
      { id: 2, startDate: '07-01-2024', name: 'Субсидия на перелет по тарифу для ДФО', endDate: '12-31-2024', amount: 4 }
    ];
    return of(subsidies);
  }

  // getSubsidies(passengerId: number): Observable<Passenger> {
  //   return this.http.get<Passenger>(`${this.baseUrl}/passengers/${passengerId}`);
  // }
}

