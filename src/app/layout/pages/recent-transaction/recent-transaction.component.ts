import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css']
})
export class RecentTransactionComponent implements OnInit {

  transaction:boolean=false;
  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  close(){ 
    const body = document.getElementsByTagName('body')[0];
  console.log(body)
    this.router.navigate(['/layout/dashboard/recent_transaction'])
    body.classList.remove('modal-open');
  }
}
