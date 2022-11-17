import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { employee } from '../model/employee'
import { EmpployeeService } from '../empployee.service';
import { IProduct } from '../model/IProduct';
import { FormControl, FormGroup } from '@angular/forms';
import { post } from '../model/post';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @ViewChild('second') secComp = {} as SecondCompComponent;
  constructor(private empSrv: EmpployeeService, private _toastr:ToastrService) { }
  empData: employee[];
  childCounterVal: string;
  userList;
  prodList: IProduct[];
  prdFrm: FormGroup = new FormGroup(
    {
      prdCatID: new FormControl('')
    }
  );
  ngOnInit(): void {
    // this.secComp?.printStrValUppcs();
    // console.log(this.secComp)
    // let color = this.secComp?.getColor("India");
    // console.log(color)
    this.empData = this.empSrv.getAllEmployees();


  }
  getProducts() {
    //this.secComp.printStrValUppcs();
    //let color = this.secComp.getColor("India");
    console.log(this.secComp.months)
    this.empData = [
      {
        empID: 201,
        fullName: 'Ramesh',
        address: 'Chennai',
        cnt: 917812121,
        doj: '21-08-2017'
      },
      {
        empID: 202,
        fullName: 'Priya',
        address: 'Bangalore',
        cnt: 917812121,
        doj: '21-08-2022'
      },
      {
        empID: 203,
        fullName: 'Merlin',
        address: 'CBC',
        cnt: 917812121,
        doj: '21-08-2019'
      },
      {
        empID: 204,
        fullName: 'Pavithra',
        address: 'MDU',
        cnt: 917812121,
        doj: '21-08-2021'
      },
      {
        empID: 205,
        fullName: 'Vishnu',
        address: 'TN',
        cnt: 917812121,
        doj: '21-08-2015'
      }
    ];
  }

  updateCounter(e) {
    console.log(e);
    this.childCounterVal = e;
  }

  updateEmpDtls(empId) {
    console.log(empId);
    this.empData = this.empData.filter(emp => emp.empID != empId);
  }

  getUserDetails() {
    console.log('before calling service method')
    this.empSrv.getAllUsers().subscribe(
      (resp) => {
        console.log(resp['status']);
        console.log('inside subscribe method');
        //this.userList:user = resp;
      },
      (err) => {
        console.log(err);
        let errResp = err;
        // if(errResp['status'] == '404'){
        //   alert('Service which you are trying to does not exists');
        // }
        alert('Server response failed, please try again later')
      },
      () => {
        console.log("after successful completion")
      }
    );
    console.log('after calling service method')
  }

  getProductDtls() {
    this.empSrv.getAllproducts().subscribe(
      (resp) => {
        console.log(resp);
        this.prodList = resp;
      }
    )
  }

  getProdByCatgyId() {
    console.log(this.prdFrm.controls.prdCatID.value)
    let catgyId = this.prdFrm.controls.prdCatID.value;
    this.empSrv.getProdbyCtgry(catgyId).subscribe(
      (data) => {
        this.prodList = data;
      }
    )
  }


  addNewPostDtl() {

    let newPost: post;
    newPost = {
      title: 'Learning API Post Method',
      body: 'Using http client library we can call a post method, api url and body is a mandatory parameter for post req',
      userId: 10
    }

    this.empSrv.addNewPost(newPost).subscribe(
      (resp) => {
        console.log(resp);
        this._toastr.success("New Posrt added in to the database")

      },
      (error)=>{
        this._toastr.error("Add post failed, please try again later")
      }
    )

  }


}
