import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  Employees: any;
  selectedEmployee: any;
  currentUser:any;
  Employees1:any;
  Employeesby:any;
  Employees2:any;
  dialog: any;

  logged:any;
  isReportees=true;

constructor(private employeeService: EmployeeService,private router: Router) { 
   
}

ngOnInit(): void {
  this.logged = 3;
  this.employeeService.getEmployees().subscribe(response => {
    this.Employees = response[this.logged];});

    //for peers
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = this.logged; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const peer = selectedEmployee['Reporting Manager'];
        this.currentUser = selectedEmployee['Employee Name']
        this.Employees2 = response.filter(employee => ( employee?.['Reporting Manager'] === peer ));
      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });


    //for reportees
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = this.logged; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const report = selectedEmployee['Employee Name'];
        this.currentUser = selectedEmployee['Employee Name']

        this.Employees1 = response.filter(employee => ( employee?.['Reporting Manager'] === report ));


        if(this.Employees1.length == 0){
          this.isReportees = false;
        }

      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });
} 

openpop(empId: any) {
  sessionStorage.setItem('empId', empId);
  this.router.navigateByUrl('/employee-details');
}

}