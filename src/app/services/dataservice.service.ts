import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Employee { 
  OID: any;
  DedalusId: any;
  EmployeeCode: any;
  EmployeeName: any;
  Employee_MailId: any;
  Gender: any;
  Location: any;
  ManagerName: any;
  ManagerMailId: any;
  ManagerCode: any;
  DateofJoin: any;
  ProductGroup: any;
  Product: any;
  ProductWorkArea: any;
  WorkGroup: any;
  UnifiedRoles: any;
  HLRole: any;
  HLDesignation: any;
  HLTitle: any;
  Unit: any;
  Owning: any;
  Status: any;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData1() {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/employee?co=');
  }

  getDetails(OID: any) {
    return this.http.get<Employee>('http://nhsappchna6210.cscidp.net/rdb/api/employee/' + OID);
  }
  
}