import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  transaction:boolean=true
  constructor(private router:Router
    ) { }

 

  ngOnInit(): void {
  }
  close(){ 
    const body = document.getElementsByTagName('body')[0];
  console.log(body)
    
    body.classList.remove('modal-open');
    this.router.navigate(['/layout/account_management'])
  }

}
