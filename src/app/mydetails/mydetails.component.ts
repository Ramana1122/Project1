import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit{

  employeeId : string='';
  employee: any;

  constructor(private employeeService: EmpDataService,private route: ActivatedRoute) {

   }
  ngOnInit(): void {
   this.employeeId = this.employeeService.getId();

      console.log(this.employeeId);

    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        console.log(data);
        if(data){
          this.employee = data;
        }
       
      },
      (error) => {
        console.error(error);
      }

    )}
}
  



  // this.employeeService.getEmployeeById(this.employeeId).subscribe(
  //   (data) => {
  //     console.log(data);
  //     if(data && data!=undefined){
  //       this.employee = data;
  //       this.isNodata=true;
  //     }else{
  //       this.isNodata=false;
  //     }
     
  //   },
  //   (error) => {
  //     console.error(error);
  //   }

  // )