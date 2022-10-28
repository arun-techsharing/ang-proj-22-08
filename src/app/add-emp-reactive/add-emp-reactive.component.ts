import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employee } from '../model/employee';
import { gtr10 } from '../shared/customValidations/empValidations'
@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor() { }
  empDetail: employee;
  cntryList: any = [
    {
      cntryCode: '',
      cntryVal: ''
    },
    {
      cntryCode: 'IND',
      cntryVal: 'India'
    },
    {
      cntryCode: 'USA',
      cntryVal: 'United States of America'
    },
    {
      cntryCode: 'ENG',
      cntryVal: 'England'
    },
    {
      cntryCode: 'AUS',
      cntryVal: 'Australia'
    }
  ]
  empFrm: FormGroup = new FormGroup(
    {
      empID: new FormControl(),
      nm: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      address: new FormControl('', [Validators.minLength(10), Validators.maxLength(15)]),
      doj: new FormControl(''),
      cnt: new FormControl('', [gtr10]),
      city: new FormControl(),
      email: new FormControl('', [Validators.email]),
      country: new FormControl('', [Validators.required])
    }
  );

  ngOnInit(): void {
  }

  AddEmp() {
    if(this.empFrm.valid == false){
      this.empFrm.markAllAsTouched();
      return;
    }
    else{
      //add data to the database
      console.log(this.empFrm.value)
      this.empDetail = this.empFrm.value;
    }
    

  }
  editEmp() {

    this.empFrm.setValue({
      empID: '101',
      nm: 'Ramesh',
      address: 'adyar, main raod',
      doj: '10-11-2018',
      cnt: '91371291',
      city: 'chn',
      email: 'test@gmail.com'
    })
    // this.empFrm.patchValue({
    //   nm: 'Ramesh',
    //   address: 'adyar, main raod',
    //   doj: '10-11-2018',
    //   cnt: '91371291',
    //   city: 'Chennai',
    //   email: 'test@gmail.com'
    // })
  }

  cntryVal() {
    console.log(this.empFrm.controls.country.value)
    let contrySelVal = this.empFrm.controls.country.value;
    if (contrySelVal != '') {
      this.empFrm.controls.city.setValidators(Validators.required);
      this.empFrm.controls.city.updateValueAndValidity();
    }
    else {
      this.empFrm.controls.city.clearValidators();
      this.empFrm.controls.city.updateValueAndValidity();
      this.empFrm.controls.city.reset();
    }

  }

}


