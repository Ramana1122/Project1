import { Component,OnInit } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  employeeId = 19001223;
  employee: any;

  constructor(private employeeService: EmpDataService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData(): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (response: any[]) => {
        const employee = response.find(emp => emp['Employee ID'] == this.employeeId);
        if (employee) {
          this.employee = employee;
        }
      },
      (error: any) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
}
  ///////////////////////////////////////////////////////////
//   employee:any;
//   constructor(private empDataService: EmpDataService) { }

//   ngOnInit(): void {
//     const employeeId = 19000445; 
//     this.empDataService.searchEmployeeById(employeeId.toString()).subscribe((employeeData) => {
//         console.log(employeeData);
//         this.employee=employeeData;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
// }

  //   Employee: any;

  // constructor(private employeeService: EmpDataService) { }

  // ngOnInit(): void {
    
  //   this.employeeService.getuser().subscribe(response => {
  //     this.Employee = response[2];
  //   });
  // }



  // gdata: any;

  // constructor (private cs : EmpDataService){}
  // fetchData() {
  //   this.cs.getData().subscribe(
  //     (response: any) => {
  //       this.gdata = response;
  //     },
  //     (      error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
  // ngOnInit(): void {
  //   this.fetchData();
  // }




  // constructor(private fs : EmpDataService){

  //   this.empId = sessionStorage.getItem("empId");

  //   this.readdata(this.empId);

  // }

 // readdata(empId:any){
//   this.fs.getData().subscribe(
//     {
//       next: (data:any) =>{
//         for(let x of data){
//           if(x['Employee ID'] == empId){
//             this.e = x;
//           }
//         }
//       },
//       error : ()=>this.details = {}
//     }
//   )
// }
