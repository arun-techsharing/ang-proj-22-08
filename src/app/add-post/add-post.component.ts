import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpployeeService } from '../empployee.service';
import { post } from '../model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  pstFrmGrp = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required)
  })
  constructor(private _empSrv: EmpployeeService) { }

  ngOnInit(): void {
  }
  addNewPostDtl() {

    let newPost: post;
    //newPost = this.pstFrmGrp.value;
    newPost = {
      title: this.pstFrmGrp.controls.title.value,
      body: this.pstFrmGrp.controls.desc.value,
      userId: this.pstFrmGrp.controls.userId.value
    }

    this._empSrv.addNewPost(newPost).subscribe(
      (resp) => {
        console.log(resp);
      }
    )

  }
}
