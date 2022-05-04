import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  showMe:boolean=false
  showMe1:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toggle()
{
  this.showMe=!this.showMe
}
toggle1(e:any)
{
  this.showMe1=!this.showMe1
  console.log(e.target.parentElement.parentElement.classList)
  if(this.showMe1){
    e.target.parentElement.classList.add("toggle")
  }
  else{
    e.target.parentElement.classList.remove("toggle")
  }
  console.log(e.target.parentElement.classList)
  
  
}
}
