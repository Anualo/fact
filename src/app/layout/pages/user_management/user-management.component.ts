import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

 user:boolean=false;
  constructor(private router:Router
    ) { }

  ngOnInit(): void {
  }
  newUser(){
    console.log("body")
    const body = document.getElementsByTagName('body')[0];
    console.log("body")
    body.classList.add('modal-open');
    this.router.navigate(['/layout/user_management/usermanagement_add_new'])
    this.user=true;

}
}
