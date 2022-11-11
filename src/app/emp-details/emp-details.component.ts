import { Component, OnInit } from '@angular/core';
import { EmpployeeService } from '../empployee.service';
import { employee } from '../model/employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private empSrv: EmpployeeService) { }
  empList: employee[];
  ngOnInit(): void {
    this.empList = this.empSrv.getAllEmployees();
  }

}
