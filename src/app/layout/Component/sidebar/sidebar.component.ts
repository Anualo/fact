import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  toogleDrop:boolean=false;
  toggleDrop: boolean=false;
  constructor() { }
@Input() togdata:boolean =false;
  ngOnInit(): void {

  }
  toogled(){
    this.toogleDrop=!this.toogleDrop;
  }
  toggled(){
    this.toggleDrop=!this.toggleDrop;
  }
}
