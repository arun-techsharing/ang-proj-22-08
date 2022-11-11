import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpployeeService } from './empployee.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private empSrv:EmpployeeService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log('message from user Auth guard')
    console.log(route.url);
   // let user = localStorage.getItem('userType');

    let isusrAdmin:boolean = this.empSrv.isUserAdmin();

    if(isusrAdmin == true){
      return true;
    }
    else{
      window.alert("You are not authorized to access this section")
      return false;
    }
    
  }

}
