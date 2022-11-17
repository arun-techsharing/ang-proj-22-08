import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
