import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
toggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  push(){
    console.log("welcome")
    this.toggle=!this.toggle
  
    if(this.toggle){
      $("ul.pageCover__header").addClass("toggle");
      $("div.pageCover__body__left").addClass("toggle");
    }
    else{
      $("ul.pageCover__header").removeClass("toggle");
      $("div.pageCover__body__left").removeClass("toggle");
    }
  }
}
