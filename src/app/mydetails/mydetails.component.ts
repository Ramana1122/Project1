import { Component } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {
  employeeId = 19000445;
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
