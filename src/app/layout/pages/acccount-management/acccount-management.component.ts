import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-acccount-management',
  templateUrl: './acccount-management.component.html',
  styleUrls: ['./acccount-management.component.css']
})
export class AcccountManagementComponent implements OnInit {
  transaction:boolean=false;
  constructor(private router:Router
    ) { }

  ngOnInit(): void {
  }
  newTransaction(){
  
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
    this.router.navigate(['/layout/account_management/new_transaction'])
      }
      close(){ 
        const body = document.getElementsByTagName('body')[0];
      console.log(body)
        body.classList.remove('modal-open');
      }
}
