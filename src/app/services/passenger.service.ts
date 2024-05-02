import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl = 'http://localhost:5160';

  constructor(private http: HttpClient) { }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${this.baseUrl}/passengers/${id}`);
  }
}
