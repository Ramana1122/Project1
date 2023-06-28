import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EmpDataService } from '../services/emp-data.service';


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

  //for api
  employeeData: any;
  employeeData2:any;
  employeeData3:any;
  employeeId1: any;

constructor(private employeeService: EmployeeService,private router: Router,private empservice : EmpDataService) { 
   
}

ngOnInit(): void {

  this.employeeId1 =  this.empservice.getId()// 1553640; 

  ///////////////////////for merge
 

if(this.employeeId1=="" ){

    this.router.navigateByUrl('/login');

  }else{

        ///////////////////////for merge

  this.employeeService.getemployessDeta(

    this.employeeId1, 'reportee',

   'peer'

   ).subscribe(

     (data) => {

       console.log('Data:', data);

       this.employeeData = data[0];

       this.employeeData2 = data[1];

       this.employeeData3 = data[2];

   

       if (this.employeeData2.length === 0) {

         this.isReportees = false;

       }

     },

     (error) => {

       console.error(error);

     }

   );

  }
 
} 

openpop(empId: any) {
  sessionStorage.setItem('empId', empId);
  this.router.navigateByUrl('/admin/details');
}

}