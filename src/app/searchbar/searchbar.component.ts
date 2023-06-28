import { Component, OnInit } from '@angular/core';

import { EmployeeService, Employee } from '../services/employee.service';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';




@Component({

  selector: 'app-searchbar',

  templateUrl: './searchbar.component.html',

  styleUrls: ['./searchbar.component.css']

})

export class SearchbarComponent implements OnInit {

  searchQuery: string = '';

  employees: Employee[] = [];

 

  showNoEmployeesFound: boolean = false;

  searchClicked: boolean = false;

   

  searchErrorMessage: string = '';

  showList: boolean = false;




  constructor(

    private employeeService: EmployeeService,

    private router: Router,

    private toastr: ToastrService

  ) { }




  ngOnInit() { }




  change() {

    if (this.searchQuery.length >= 3) {

      this.searchErrorMessage = '';

      this.searchClicked = false; // Reset the search result

    } else {

      this.searchErrorMessage = '';

      this.searchClicked = false;

      this.employees = []; // Reset the employee data

    }

  }

  employeeID: any;

  isViewSelect: boolean = false;

  navigateToEmployeeDetails(employee: any) {

    // this.router.navigate(['admin/details', employee.EmployeeCode]);

    this.isViewSelect = true;

    this.employeeID = employee.EmployeeCode;

  }




  onSearch() {

    this.isViewSelect = false;

    this.showList = true;

    if (this.searchQuery.trim().length >= 3) { // Trim the search query and check length

      this.employeeService.getData(this.searchQuery).subscribe(

        (data: Employee[]) => {

          this.employees = data;

          this.showNoEmployeesFound = this.employees.length === 0;

          this.searchClicked = true;

          if (this.showNoEmployeesFound) {

            this.toastr.warning('No employee details found.');

          }

        },

        (error: any) => {

          console.error('Error fetching employee data:', error);

          this.employees = [];

          this.showNoEmployeesFound = true;

          this.searchClicked = true;

        }

      );

      this.searchErrorMessage = '';

    } else {

      // Check if the search query consists of only spaces

      if (this.searchQuery.trim().length === 0) {

        this.toastr.error('Minimum 3 characters are required for search.');

      }

      else {

        this.searchQuery.length < 3

        this.toastr.error('Minimum 3 characters are required for search.');

      }

      this.employees = [];

      this.showNoEmployeesFound = false;

      this.searchClicked = true;

    }

  }




}