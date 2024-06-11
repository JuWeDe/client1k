import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private baseUrl = `${environment.apiBaseUrl}/RouteWebApi`;

  constructor(private http: HttpClient) { }

  getSortedRoute(departPlaceName: string, arrivePlaceName: string, date: string): Observable<any> {
    const params = new HttpParams()
      .set('departPlaceName', departPlaceName)
      .set('arrivePlaceName', arrivePlaceName)
      .set('date', date);

    return this.http.get(`${this.baseUrl}/GetSortedRoute`, { params });
  }
}


