//Charuu..............................
import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id: any;
  details: any;
  empId:any;
  e:any;
  
  constructor(private fs : EmployeeService){
    this.empId = sessionStorage.getItem("empId");
    this.readdata(this.empId);
  }
  
  readdata(empId:any){
    this.fs.getEmployeeById(empId).subscribe(
      {
        next: (data:any) =>{
          for(let x of data){
            if(x['Employee ID'] == empId){
              this.e = x;
            }
          }
        },
        error : ()=>this.details = {}
      }
    )
  }
}
