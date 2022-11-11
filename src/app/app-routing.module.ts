import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { LoginComponent } from './login/login.component';
import { pageNotFoundComp } from './pageNotFound-comp/pageNotFound-comp';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { UserAuthGuard } from './user-auth.guard';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: 'home',
    component: FirstCompComponent

  },
  {
    path: 'services/:sid',
    component: SecondCompComponent,
    canActivate:[UserAuthGuard]
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
    component: AddEmpComponent,
    canActivate:[UserAuthGuard]
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
    path: 'emp-Dtl',
    component: EmpDetailsComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
