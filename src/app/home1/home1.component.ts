import { Component,OnInit } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
  providers: [DatePipe]
})
export class Home1Component implements OnInit {
  employeeId : string='';
  employee: any;
  dateString:string='';
  myDetails:boolean = false;

  constructor(private employeeService: EmpDataService,private datePipe: DatePipe,private router: Router) {
   }
  ngOnInit(): void {
   this.employeeId = this.employeeService.getId();
   if(this.employeeId=="" ){
    this.router.navigateByUrl('/login');
  }else{
      console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        // console.log(data);
        if(data){
          this.employee = data;
        }
      },
      (error) => {
        console.error(error);
      }
    )}
  }
}