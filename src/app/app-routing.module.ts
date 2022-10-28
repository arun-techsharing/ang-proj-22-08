import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { pageNotFoundComp } from './pageNotFound-comp/pageNotFound-comp';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: 'home',
    component: FirstCompComponent

  },
  {
    path: 'services/:sid',
    component: SecondCompComponent
  },
  {
    path: 'myshop/contact',
    component: SecondCompComponent
  },
  {
    path: 'viewproducts',
    component: ViewProductsComponent
  },
  {
    path: 'add-employee',
    component: AddEmpComponent
  },
  {
    path: 'add-employee-react',
    component: AddEmpReactiveComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: pageNotFoundComp
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
