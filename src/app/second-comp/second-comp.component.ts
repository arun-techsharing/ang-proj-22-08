import { Component, OnInit } from '@angular/core';
import { studentCls } from '../model/student';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  constructor(private actRou: ActivatedRoute) { }

  peopleLst: people[] = [
    {
      country: 'USA',
      name: 'John'
    },
    {
      country: 'Japan',
      name: 'sei'
    },
    {
      country: 'England',
      name: 'MAthew'
    },
    {
      country: 'India',
      name: 'Raja'
    },
    {
      country: 'China',
      name: 'yois'
    },
  ]
  todayDt = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  amount = 250;
  marks = 0.9133;

  ngOnInit(): void {

    this.printStrValUppcs();
    this.actRou.params.subscribe(p => {
      console.log(`getting value from url ${p['sid']} and service name is: ${p['serviceNm']}`);
    })



  }

  // addStudent(): studentCls {
  //   let student: studentCls = ;
  //  // let student: studentCls = null;
  //   return student;
  // }

  getColor(cntry: string): string {
    var country = cntry;
    if (cntry == 'USA') {
      return 'green';
    }
    else if (cntry == 'Japan') {
      return 'red';
    }
    else if (cntry == 'India') {
      return 'blue';
    }
    else {
      return 'yellow';
    }

  }

  printStrValUppcs() {
    console.log(this.peopleLst)
  }

}

export interface people {
  country: string,
  name: string
}