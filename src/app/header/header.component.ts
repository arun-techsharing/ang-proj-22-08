import { Component, Input, OnInit } from '@angular/core';
import { navItems } from '../model/nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() nvLst:navItems[] =[
    {
      navNm:'Home',
      path:'/home'
    },
    {
      navNm:'About Us',
      path:'/about'
    },
    {
      navNm:'Services',
      path:'/services/200'
    },
    {
      navNm:'Add Emp',
      path:'/add-employee'
    },
    {
      navNm:'Contact Us',
      path:'/contact'
    },
    {
      navNm:'View Employees',
      path:'/viewproducts'
    },
    {
      navNm:'Employee Details',
      path:'/emp-Dtl'
    },
    {
      navNm:'Add Post',
      path:'/add-post'
    }
  ];
  ngOnInit(): void {
  }

}
