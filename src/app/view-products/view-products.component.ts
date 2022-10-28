import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { employee } from '../model/employee'
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @ViewChild('second') secComp = {} as SecondCompComponent;
  constructor() { }
  empData: employee[] = [
    {
      empID:201,
      fullName:'Ramesh',
      address:'Chennai',
      cnt:917812121,
      doj:'21-08-2017'
    },
    {
      empID:202,
      fullName:'Priya',
      address:'Bangalore',
      cnt:917812121,
      doj:'21-08-2022'
    },
    {
      empID:203,
      fullName:'Merlin',
      address:'CBC',
      cnt:917812121,
      doj:'21-08-2019'
    },
    {
      empID:204,
      fullName:'Pavithra',
      address:'MDU',
      cnt:917812121,
      doj:'21-08-2021'
    },
    {
      empID:205,
      fullName:'Vishnu',
      address:'TN',
      cnt:917812121,
      doj:'21-08-2015'
    }
  ];
  childCounterVal: string;

  ngOnInit(): void {
    // this.secComp?.printStrValUppcs();
    // console.log(this.secComp)
    // let color = this.secComp?.getColor("India");
    // console.log(color)
  }
  getProducts() {
    //this.secComp.printStrValUppcs();
    //let color = this.secComp.getColor("India");
    console.log(this.secComp.months)
    this.empData = [
      {
        empID:201,
        fullName:'Ramesh',
        address:'Chennai',
        cnt:917812121,
        doj:'21-08-2017'
      },
      {
        empID:202,
        fullName:'Priya',
        address:'Bangalore',
        cnt:917812121,
        doj:'21-08-2022'
      },
      {
        empID:203,
        fullName:'Merlin',
        address:'CBC',
        cnt:917812121,
        doj:'21-08-2019'
      },
      {
        empID:204,
        fullName:'Pavithra',
        address:'MDU',
        cnt:917812121,
        doj:'21-08-2021'
      },
      {
        empID:205,
        fullName:'Vishnu',
        address:'TN',
        cnt:917812121,
        doj:'21-08-2015'
      }
    ];
  }

  updateCounter(e) {
    console.log(e);
    this.childCounterVal = e;
  }

  updateEmpDtls(empId){
    console.log(empId);
    this.empData = this.empData.filter(emp => emp.empID != empId);
  }

}
