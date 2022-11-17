import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { employee } from '../model/employee';
import { student } from '../model/studentMdl';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {

  constructor(
    private _toastr: ToastrService
  ) { }

  @Input() tblDtls: employee[] = [];

  @Output() counterValue: EventEmitter<any> = new EventEmitter();
  emp: student
  counter: number = 10;


  @Output() empIDChange: EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {

  }

  incrementCount() {
    this.counter = this.counter + 1;
    this.counterValue.emit(`updated counter ${this.counter}`);
  }

  delEmp(eID: number) {
    console.log(eID);
    this.empIDChange.emit(eID);

    this._toastr.success("Employee is successfully deleted")

  }
}
