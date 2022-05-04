import { Component, OnInit  } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleNotification: boolean = false;
  toogleSetting:boolean = false;
  toggleIcon:boolean=true;
  dark:boolean=false;

  no1:boolean=false
  @Output() push = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
notfi(){
  this.toggleNotification = !this.toggleNotification
  this.toogleSetting = false;
}
setting(){
  this.toogleSetting=!this.toogleSetting;
  this.toggleNotification=false;
}
toggle()
{
  this.no1=!this.no1
}
// push(){
//   this.toggleIcon=!this.toggleIcon;
//   this.push1.emit(this.toggleIcon)
  
// }
system(){
  $("button.nav-link").removeClass("active");
  $("div.tab-pane").removeClass("show");

  $("div.tab-pane").removeClass("active");
  $("#system-tab").addClass("active");

  $("#system").addClass("show");
  $("#system").addClass("active");
}
viewall(){
  $("button.nav-link").removeClass("active");
  $("div.tab-pane").removeClass("show");

  $("div.tab-pane").removeClass("active");
  $("#view_all-tab").addClass("active");

  $("#view_all").addClass("show");
  $("#view_all").addClass("active");
}
transactions(){
  $("button.nav-link").removeClass("active");
  $("div.tab-pane").removeClass("show");

  $("div.tab-pane").removeClass("active");
  $("#transactions-tab").addClass("active");

  $("#transactions").addClass("show");
  $("#transactions").addClass("active");  
}
plots(){
  $("button.nav-link").removeClass("active");
  $("div.tab-pane").removeClass("show");

  $("div.tab-pane").removeClass("active");
  $("#plots_updates-tab").addClass("active");

  $("#plots_updates").addClass("show");
  $("#plots_updates").addClass("active");  
}
others(){
  $("button.nav-link").removeClass("active");
  $("div.tab-pane").removeClass("show");

  $("div.tab-pane").removeClass("active");
  $("#others-tab").addClass("active");

  $("#others").addClass("show");
  $("#others").addClass("active");  

}
color()
{
  this.dark=!this.dark;
  if(this.dark){
    $("body").addClass("darkThemeCSS"); 
  }
  else{
    $("body").removeClass("darkThemeCSS"); 
  }

}

}
