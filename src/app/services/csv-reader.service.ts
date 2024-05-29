import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {
  constructor(private http: HttpClient) {}

  public getCsvData(csvPath: string): Observable<any[]> {
    return this.http.get(csvPath, { responseType: 'text' }).pipe(
      map(data => this.csvToArray(data))
    );
  }

  private csvToArray(csv: string): any[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const rows = lines.slice(1);

    return rows.map(row => {
      const values = row.split(',');
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index].trim();
      });
      return obj;
    });
  }
}
