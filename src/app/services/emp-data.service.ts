import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUrls } from './allservers';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  private empId: string = "";

  constructor(private http: HttpClient) {}

  getEmployeesFromServer1(): Observable<any> {
    return this.http.get(ServerUrls.SERVER_1);
  }
  
  getEmployeeById(employeeId: string): Observable<any> {
    const apiUrl = ServerUrls.SERVER_1 + '/' + employeeId;
    return this.http.get(apiUrl);
  }

  getId(): string {
    return this.empId;
  }

  setId(empId: string): void {
    this.empId = empId;
  }
}
