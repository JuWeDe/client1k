
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from '../models/passenger';
import { Subsidy } from '../models/subsidy';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`/api/passengers/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubsidyService {
  constructor(private http: HttpClient) {}

  getSubsidies(passengerId: number): Observable<Subsidy[]> {
    return this.http.get<Subsidy[]>(`/api/passengers/${passengerId}/subsidies`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Passenger } from '../models/passenger';

// @Injectable({
//   providedIn: 'root'
// })
// export class PassengerService {
//   private baseUrl = 'http://localhost:5160';

//   constructor(private http: HttpClient) { }

//   getPassenger(id: number): Observable<Passenger> {
//     return this.http.get<Passenger>(`${this.baseUrl}/passengers/${id}`);
//   }
// }
