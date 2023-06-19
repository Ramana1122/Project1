import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  
  constructor(private router: Router) { }

  
  ngOnInit(): void {
    
  }
  sideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  logout(): void {
    // Perform any necessary logout logic (e.g., clear user session, reset variables, etc.)
  
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
