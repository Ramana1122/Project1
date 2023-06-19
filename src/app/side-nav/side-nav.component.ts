import { Component ,Input,OnInit} from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
@Input() sideNavStatus:boolean=false;
  list=[
  {
    number:'1',
    name1:'home',
    icon1:'fa-solid fa-house'
  },
  {
    number:'2',
    name2:'My-Details',
    icon2:'fa-solid fa-user'
  },
  {
    number:'3',
    name3:'My-Team',
    icon3:'fa-solid fa-users'
  },
  {
    number:'4',
    name4:'Add-New',
    icon4:'fa-solid fa-user-plus'
  },
  {
    number:'5',
    name5:'Edit-Details',
    icon5:'fa-solid fa-user-pen'
  },
  {
    number:'6',
    name6:'Search',
    icon6:'fa-solid fa-magnifying-glass'
  }

]
constructor(){}

ngOnInit():void{

}
ngAfterViewInit(): void {
  var bootstrap: any;

  setTimeout(()=>{

    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })    
  },2000)
}


toggleMode(event: any): void {
  let checked:any = event.target.checked;
  if(checked){
    document.body.setAttribute('data-theme', 'dark');
  }
  else{
    document.body.setAttribute('data-theme', 'light');
  }
  
  }
}
