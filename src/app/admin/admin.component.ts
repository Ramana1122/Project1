import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  sideNavStatus:boolean=false;
  toggleSideNav() {
    this.sideNavStatus = !this.sideNavStatus;
  }

}