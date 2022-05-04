import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recenttransaction:boolean=false;
  constructor(private router:Router ) { }

   

  ngOnInit(): void {
  }
  recentTransaction(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
    this.router.navigate(['/layout/dashboard/recent_transaction'])
    this.recenttransaction=true;

}
}
