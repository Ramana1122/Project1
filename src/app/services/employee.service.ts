import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 export interface Employee { 
  'CSC_DoJ':any;
   'Employee ID': any;
  'EmployeeName': any;
   'Dedalus ID': any;
   'HL Designation':any;
   'Location':any;
   'HLRole':any;
   'HL Title':any;
   'Employee_MailId':any;
   'Manager Email':any;
   'Owning':any;
   'Product':any;
   'Product Group':any;
   'Product Work Area':any;
   'Reporting Manager':any;
   'Unified Roles':any;
  'Unit':any;
   'Work Group':any;
   visible: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/employee?co=';

  constructor(private http: HttpClient) {}

  getData(id:any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl+id);
  }



// Using Json......................................................
  private employeesUrl = 'http://localhost:4500/employee'; 
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  //test
  getEmployeesdetails(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  getEmployeeById(empid: any) : Observable<any[]> {
    return this.http.get<any[]> ('http://localhost:4500/employee?Employee ID='+empid);
  }
}
