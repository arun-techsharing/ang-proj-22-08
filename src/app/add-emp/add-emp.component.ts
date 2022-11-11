import { Component, OnInit } from '@angular/core';
import { EmpployeeService } from '../empployee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private empSrv:EmpployeeService) { }

  ngOnInit(): void {
    console.log(this.empSrv.userId)
  }
  addEmp(frmData){
    console.log(frmData.value)

  }

}
