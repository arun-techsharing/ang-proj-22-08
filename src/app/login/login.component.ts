import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpployeeService } from '../empployee.service';
import { login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lgnFrmGrp = new FormGroup({
    userNm: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  })
  constructor(
    private _emplySrv: EmpployeeService
  ) { }

  ngOnInit(): void {
  }

  userLogin() {

    console.log(this.lgnFrmGrp.value);
    let lgnDtls: login = {
      Username: this.lgnFrmGrp.controls.userNm.value,
      Password: this.lgnFrmGrp.controls.pwd.value
    }
    this._emplySrv.lgnUser(lgnDtls).subscribe(
      (rsp) => {
        console.log(rsp)
        if (rsp == "") {
          alert("Incorrect Username and password")
        }
        else {
          localStorage.setItem("jwtTk", rsp)
        }
      }
    );
  }

}
