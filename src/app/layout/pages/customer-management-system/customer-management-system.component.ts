import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-management-system',
  templateUrl: './customer-management-system.component.html',
  styleUrls: ['./customer-management-system.component.css']
})
export class CustomerManagementSystemComponent implements OnInit {
customer:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  addNewCustomer(){
this.customer=true;
const body = document.getElementsByTagName('body')[0];
//
body.classList.add('modal-open');
//
  }
  close(){ 
    const body = document.getElementsByTagName('body')[0];
  console.log(body)
    this.customer=false;
    
    body.classList.remove('modal-open');
  }
}
