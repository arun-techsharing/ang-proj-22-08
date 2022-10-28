import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { pageNotFoundComp } from './pageNotFound-comp/pageNotFound-comp';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { HeaderComponent } from './header/header.component';
import { DataTblComponent } from './data-tbl/data-tbl.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [AppComponent, SecondCompComponent, FirstCompComponent, pageNotFoundComp, HeaderComponent, DataTblComponent, ViewProductsComponent, AddEmpComponent, AddEmpReactiveComponent, AddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
