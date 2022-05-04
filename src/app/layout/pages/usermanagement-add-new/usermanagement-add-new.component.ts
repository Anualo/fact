import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-usermanagement-add-new',
  templateUrl: './usermanagement-add-new.component.html',
  styleUrls: ['./usermanagement-add-new.component.css']
})
export class UsermanagementAddNewComponent implements OnInit {

  transaction:boolean=false;
  constructor(private router:Router
    ) { }

  ngOnInit(): void {
  }
  close(){ 
    const body = document.getElementsByTagName('body')[0];
  console.log(body)
    
    body.classList.remove('modal-open');
    this.router.navigate(['/layout/user_management'])
  }

}
