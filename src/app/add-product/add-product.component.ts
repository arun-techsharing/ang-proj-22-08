import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodFrm = new FormGroup({

    prodNm: new FormControl('',[Validators.required]),
    prodPrice: new FormControl('',[Validators.required]),
    prodQuan:new FormControl('',[Validators.required]),
    ctgy:new FormControl('',[Validators.required]),
    discount: new FormControl()

  });


  prodCategories:any = [
    'vegies',
    'diary',
    'groceries',
  ]

  constructor() {

    
   }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.prodFrm.value)
   
  }
}
