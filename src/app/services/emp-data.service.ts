import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  private apiUrl = 'https://temp-80aee-default-rtdb.firebaseio.com/data.json';
  constructor(private http: HttpClient) { }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
