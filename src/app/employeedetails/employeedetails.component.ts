
import { Component, OnInit } from '@angular/core';
import { DataService,Employee } from '../services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  OID:any;
  employee: Employee = {} as Employee; // Initialize with default value

  constructor(
    private fs: DataService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  handleButtonClick() {
    this.router.navigate(['search']);
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      console.log("onit", params);
      this.OID = params['empid'];
      this.readData(this.OID);
    });
  }

  readData(OID: any) {
    if (OID) {
      console.log("hello", OID);
      this.fs.getDetails(OID).subscribe(
        (employee: Employee) => {
          this.employee = employee;
        },
        (error) => {
          console.error('Error fetching employee details:', error);
          // Handle error case
          this.employee = {} as Employee;
        }
      );
    }
  }
}