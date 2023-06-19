import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
  private apiUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/employee?co=';

  private apiUrl1 = 'http://nhsappchna6210.cscidp.net/rdb/api/employee';

  private apiUrl2 = '';

constructor(private http: HttpClient) { }

  // searchEmployeeById(employeeId: string) {
  //   return this.http.get(`${this.apiUrl}${employeeId}`);
  //   // return this.http.get(`${this.apiUrl}/data/0.json`);
  //   // return this.http.get(`${this.apiUrl}`+employeeId+'.json');
  // } 

  searchEmployeeById(employeeId: string) {
    return this.http.get(`${this.apiUrl1}/${employeeId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error appropriately
        console.error('An error occurred:', error.message);
        // You can perform additional error handling here, such as displaying an error message to the user
  
        // Modify the error message as needed
        const errorMessage = 'An internal server error occurred. Please try again later.';
  
        // Rethrow the error to propagate it further
        return throwError(errorMessage);
      })
    );
  }

  updateEmployee(employeeId: string, employeeData: any) {
    return this.http.put(`${this.apiUrl1}/${employeeId}`, employeeData);
    // return this.http.put(`${this.apiUrl}/data/0.json`, employeeData);
    // return this.http.put(`${this.apiUrl}/data/`+employeeId+'.json', employeeData);
  }

  getdesigination(domaincode:string){
    return this.http.get("http://nhsappchna6210.cscidp.net/rdb/api/ValueSet?DomainCode="+domaincode)
  }
  
}
