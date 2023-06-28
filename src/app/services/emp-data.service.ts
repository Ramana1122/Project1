import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from './allservers';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  private empId: string = "";

  constructor(private http: HttpClient, private serverService:server) {}

  getEmployeeById(employeeId: string): Observable<any> {
    const apiUrl = this.serverService.ServerUrls +'employee/' +'/' + employeeId;
    return this.http.get(apiUrl);
  }

  getId(): string {
    return this.empId;
  }

  setId(empId: string): void {
    this.empId = empId;
  }
}
