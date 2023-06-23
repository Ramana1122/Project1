import { Component } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {
 
employeeId : string='';
employee: any;
dateString:string='';
constructor(private employeeService: EmpDataService,private route: ActivatedRoute,private datePipe: DatePipe) {
 }
//  formatDate(dateString: string): string {
//   const date = new Date(dateString);
//    return this.datePipe.transform(date);
// }
ngOnInit(): void {
 this.employeeId = this.employeeService.getId();
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