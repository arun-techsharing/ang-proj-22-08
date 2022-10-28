import { Component, OnInit } from '@angular/core';
import { studentCls } from '../model/student';
import { student } from '../model/studentMdl';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  public title: string = "Home";
  public showStuDt: boolean = true;
  isDisabled: boolean = false;
  userType: string = 'Teacher';
  imgNm: string = "logo-nav@2x.png";
  stundetData: student = {
    rollNo: 100,
    name: 'Priya',
    class: '4th',
    section: 'C',
    age: 12,
    cnt: 173132912
  }

  public studentList: student[] = [
    {
      rollNo: 100,
      name: 'Priya',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 101,
      name: 'Rahul',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 102,
      name: 'Sheikh',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 103,
      name: 'Madhu',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 100,
      name: 'Priya',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 101,
      name: 'Rahul',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 102,
      name: 'Sheikh',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 103,
      name: 'Madhu',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    }
  ]

  public stuList: studentCls[] = [

    {
      rollNo: 100,
      name: 'Priya',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },
    {
      rollNo: 101,
      name: 'Rahul',
      class: '4th',
      section: 'C',
      age: 12,
      cnt: 173132912
    },


  ]
  public subjects: string[] = ['Maths', 'Physics', 'Chemistry', 'Computer', 'Social']


  constructor(private rout: Router) { }

  ngOnInit(): void {

    
  }

  submitFrm(greet: string) {
    console.log(this.title + " " + greet);
    this.title = "Updating using Event Data Binding";
    console.log(this.title);
  }

  shwStuData() {
    this.showStuDt = true;
  }

  toggleUserTyp(userTyp: string) {
    if (userTyp == 'T') {
      this.userType = 'Teacher';

    }
    else if (userTyp == 'S') {
      this.userType = 'Student';
    }
  }

  redirctToServices(){
    this.rout.navigateByUrl('/services/200');
  }

}

